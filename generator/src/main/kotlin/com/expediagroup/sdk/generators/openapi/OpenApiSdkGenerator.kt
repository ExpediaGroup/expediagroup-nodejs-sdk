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

import com.expediagroup.sdk.model.ClientGenerationException
import com.github.rvesse.airline.SingleCommand
import com.github.rvesse.airline.annotations.Command
import com.github.rvesse.airline.annotations.Option
import org.openapitools.codegen.CodegenConstants
import org.openapitools.codegen.DefaultGenerator
import org.openapitools.codegen.SupportingFile
import org.openapitools.codegen.config.CodegenConfigurator

/**
 * Configures the OpenAPI Generator based on command line parameters to generate an EG Travel SDK project
 * This will produce a maven project in the specified output directory
 */
@Command(name = "generate", description = "Let's build an EG Travel SDK!")
class OpenApiSdkGenerator {
    private val supportingFiles = listOf(
        "ExpediaGroupRequestError.ts",
        "ApiError.ts",
        "client/index.ts",
        "models/index.ts",
        "tsconfig.json",
        "typedoc.json",
        "package.json",
        ".prettierrc",
        "index.ts",
        "README.md",
    )

    companion object {
        /**
         * Main Entry Point
         *
         * Parses command line arguments and then generates an EG Travel SDK
         */
        @JvmStatic
        fun main(args: Array<String>) {
            val generator = SingleCommand.singleCommand(OpenApiSdkGenerator::class.java).parse(*args)
            generator.run()
        }
    }

    @Option(name = ["-i", "--input-spec"])
    lateinit var inputFile: String

    @Option(name = ["-o", "--output-directory"])
    lateinit var outputDirectory: String

    @Option(name = ["-n", "--namespace"])
    lateinit var namespace: String

    @Option(name = ["-v", "--version"])
    lateinit var version: String

    fun run() {
        try {
            val lowercaseNamespace: String = namespace.replace(Constant.NON_ALPHANUMERIC_REGEX, Constant.EMPTY_STRING).lowercase()
            val config = CodegenConfigurator().apply {
                setGeneratorName("typescript")
                setTemplateDir("templates/expediagroup-sdk")
                setInputSpec(inputFile)
                setOutputDir(outputDirectory)
                setArtifactVersion(version)
                setArtifactId("expediagroup-nodejs-sdk-$lowercaseNamespace")
                setModelPackage("models")
                setApiPackage("client")
                setApiNameSuffix("Client")

                addGlobalProperty(CodegenConstants.APIS, "")
                addGlobalProperty(CodegenConstants.MODELS, "")
                addGlobalProperty(CodegenConstants.SUPPORTING_FILES, supportingFiles.joinToString(","))

                addAdditionalProperty(CodegenConstants.ENUM_PROPERTY_NAMING, "UPPERCASE")
                addAdditionalProperty(CodegenConstants.SORT_PARAMS_BY_REQUIRED_FLAG, true)

                // Template specific properties
                addAdditionalProperty("namespace", lowercaseNamespace)

                // Mustache Helpers
                mustacheHelpers.forEach { (name, function) -> addAdditionalProperty(name, function()) }
            }
            val generatorInput = config.toClientOptInput().apply {
                userDefinedTemplates(
                    listOf(
                        ModelTemplate("model/modelMapper.mustache", "Mapper.ts"),
                        SupportingFile("error/expediaGroupRequestError.mustache", "models/error", "ExpediaGroupRequestError.ts"),
                        SupportingFile("error/apiError.mustache", "models/error/", "ApiError.ts"),
                        SupportingFile("package.mustache", "package.json"),
                        SupportingFile("typedoc.mustache", "typedoc.json"),
                        SupportingFile("tsconfig.mustache", "tsconfig.json"),
                        SupportingFile("prettierrc.mustache", ".prettierrc"),
                        SupportingFile("index.mustache", "index.ts"),
                        SupportingFile("api/index.mustache", "client/index.ts"),
                        SupportingFile("model/index.mustache", "models/index.ts"),
                        SupportingFile("README.mustache", "README.md"),
                    ),
                )
            }

            val generator = DefaultGenerator(false).apply { opts(generatorInput) }
            generator.generate()
        } catch (e: Exception) {
            throw ClientGenerationException("Failed to generate SDK", e)
        }
    }
}
