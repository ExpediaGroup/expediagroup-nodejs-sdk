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

import org.openapitools.codegen.CodegenModel

internal data class Discriminator(
    val originalName: String,
    val name: String,
    val value: String
)

internal fun getParentDiscriminator(model: CodegenModel): Discriminator? {
    return model.parentModel?.discriminator?.let {
        Discriminator(
            it.propertyBaseName,
            it.propertyName,
            it.mappedModels.find { mappedModel -> mappedModel.modelName.equals(model.classname) }!!.mappingName
        )
    }
}

internal fun getDiscriminators(model: CodegenModel): MutableList<String> {
    val discriminators: MutableList<String> = model.parentModel?.let { getDiscriminators(model.parentModel) } ?: mutableListOf()
    model.discriminator?.let {
        discriminators.add(it.propertyBaseName)
    }
    return discriminators
}
