/*
 * Copyright (C) 2023 Expedia, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.expediagroup.sdk.generators.openapi

import com.samskivert.mustache.Mustache
import org.openapitools.codegen.CodegenModel
import org.openapitools.codegen.CodegenProperty
import org.openapitools.codegen.CodegenResponse
import org.openapitools.codegen.model.OperationsMap

val mustacheHelpers = mapOf(
    "removeLeadingSlash" to {
        Mustache.Lambda { fragment, writer -> writer.write(fragment.execute().removePrefix("/")) }
    },
    "processMapperType" to {
        Mustache.Lambda { fragment, writer ->
            val codegenProperty: CodegenProperty = fragment.context() as CodegenProperty
            if (codegenProperty.dataType == Constant.ERROR) {
                writer.write("ModelErrorMapper")
            } else {
                writer.write(fragment.execute())
            }
        }
    },
    "processErrorType" to {
        Mustache.Lambda { fragment, writer ->
            val response: CodegenResponse = fragment.context() as CodegenResponse
            writer.write(if (response.dataType == Constant.ERROR) Constant.MODEL_ERROR else fragment.execute())
        }
    },
    "assignDiscriminators" to {
        Mustache.Lambda { fragment, writer ->
            val model = fragment.context() as CodegenModel
            getParentDiscriminator(model)?.let {
                writer.write("@JsonProperty(\"${it.originalName}\")\n")
                writer.write("readonly ${it.name} = '${it.value}'\n")
            }
        }
    },
    "isNotDiscriminator" to {
        Mustache.Lambda { fragment, writer ->
            val discriminators: List<String> = getDiscriminators(fragment.context(1) as CodegenModel)
            val property: CodegenProperty = fragment.context() as CodegenProperty
            if (!discriminators.contains(property.baseName)) {
                writer.write(fragment.execute())
            }
        }
    },
    "callSuperConstructor" to {
        Mustache.Lambda { fragment, writer ->
            val model: CodegenModel = fragment.context() as CodegenModel
            model.parentModel?.let {
                val discriminators: MutableList<String> = getDiscriminators(model)
                writer.write("super({\n")
                it.allVars.filterNot { variable ->
                    variable.isDiscriminator || discriminators.contains(variable.baseName)
                }.forEach { variable ->
                    writer.write("${variable.name}: ${model.classVarName}.${variable.name},\n")
                }
                writer.write("})")
            }
        }
    },
    "defineApiExceptions" to {
        Mustache.Lambda { fragment, writer ->
            val dataTypes: MutableSet<String> = mutableSetOf()
            val operationsMap: OperationsMap = fragment.context() as OperationsMap
            operationsMap.operations.operation.forEach { operation ->
                operation.responses.forEach { response ->
                    response.takeIf { !it.is2xx }?.dataType?.let { if (it == Constant.ERROR) Constant.MODEL_ERROR else it }?.takeIf { !dataTypes.contains(it) }?.also {
                        writer.write("export class ExpediaGroupApi$it extends ExpediaGroupApiError ")
                        writer.write("{constructor(readonly statusCode: number, readonly errorObject: $it) {super(statusCode, errorObject);}}\n")
                        dataTypes.add(it)
                    }
                }
            }
        }
    },
    "listApiExceptionsRanges" to {
        Mustache.Lambda { fragment, writer ->
            val errorCodes: MutableSet<String> = mutableSetOf()
            val operationsMap: OperationsMap = fragment.context() as OperationsMap
            operationsMap.operations.operation.forEach { operation ->
                operation.responses.forEach { response ->
                    response.takeIf { !it.is2xx && !errorCodes.contains(it.code) }?.also {
                        val dataType = if (it.dataType == Constant.ERROR) Constant.MODEL_ERROR else it.dataType
                        writer.write("new HttpStatusCodeRange('${it.code}', (error: ErrorResponse) => new ExpediaGroupApi$dataType")
                        writer.write("(error.response.status, Serializer.deserializeObject(error.response.data, $dataType) as $dataType)),\n")
                        errorCodes.add(it.code)
                    }
                }
            }
        }
    },
)
