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
import org.openapitools.codegen.CodegenOperation
import org.openapitools.codegen.CodegenProperty

val mustacheHelpers = mapOf(
    "removeLeadingSlash" to {
        Mustache.Lambda { fragment, writer -> writer.write(fragment.execute().removePrefix("/")) }
    },
    "throwBadRequestError" to {
        Mustache.Lambda { fragment, writer ->
            (fragment.context() as CodegenOperation).responses.find { response -> response.code == "400" }?.let {
                val errorType: String = it.baseType
                writer.write("throw new ExpediaGroupRequestError<$errorType>(Serializer.deserializeObject<$errorType>(error.response.data, $errorType) as $errorType, error.response.status)")
            } ?: run { writer.write("throw new ExpediaGroupRequestError<string>('Bad Request', error.response.status)") }
        }
    },
    "throws" to {
        Mustache.Lambda { fragment, writer ->
            (fragment.context() as CodegenOperation).responses.find { response -> response.code == "400" }?.let {
                val errorType: String = it.baseType
                writer.write("* @throws ExpediaGroupRequestError<$errorType>")
            } ?: run { writer.write("* @throws new ExpediaGroupRequestError<string>") }
        }
    },
    "processMapperType" to {
        Mustache.Lambda { fragment, writer ->
            val codegenProperty: CodegenProperty = fragment.context() as CodegenProperty
            if ("Error" == codegenProperty.dataType) {
                writer.write("ModelErrorMapper")
            } else {
                writer.write(fragment.execute())
            }
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
)
