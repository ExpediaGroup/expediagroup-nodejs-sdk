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

 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

/**
 * Indicates that the API cannot fulfill the request because while the client is correctly authenticated, the client doesn\'t have the permission to execute the specified operation. This error type does not imply that the request is valid, or that the resource against which the operation being performed exists or satisfies other pre-conditions.
 */
@JsonObject({ constructorParams: [{}] })
export class ForbiddenError {
    /**
     * Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon.
     */
    @JsonProperty({ name: 'code' })
    code: ForbiddenErrorCodeEnum
    /**
     * A human-readable explanation of the error, specific to this error occurrence.
     */
    @JsonProperty({ name: 'message' })
    message: string

    public constructor(forbiddenError: ForbiddenErrorProperties) {
        this.code = forbiddenError.code
        this.message = forbiddenError.message
    }
}

export type ForbiddenErrorCodeEnum =
    | 'UNAUTHORIZED'
    | 'FORBIDDEN'
    | 'NOT_FOUND'
    | 'ACCOUNT_UPDATE_NOT_FOUND'
    | 'TOO_MANY_REQUESTS'
    | 'INTERNAL_SERVER_ERROR'
    | 'BAD_GATEWAY'
    | 'RETRYABLE_ACCOUNT_SCREEN_FAILURE'
    | 'RETRYABLE_ACCOUNT_UPDATE_FAILURE'
    | 'GATEWAY_TIMEOUT'
    | 'BAD_REQUEST'

export interface ForbiddenErrorProperties {
    code: ForbiddenErrorCodeEnum
    message: string
}
