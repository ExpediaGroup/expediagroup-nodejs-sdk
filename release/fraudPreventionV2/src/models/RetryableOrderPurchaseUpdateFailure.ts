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
 * Indicates that the API is either down for maintenance or overloaded and cannot fulfill the request at the current time. This is a temporary error and retrying the same request after a certain delay could eventually result in success. There will be a Retry-After HTTP header in API response specifying how long to wait to retry the request. If there is no Retry-After HTTP header then retry can happen immediately. If the error persists after retrying with delay, please reach out to <support team>.\"
 */
@JsonObject({ constructorParams: [{}] })
export class RetryableOrderPurchaseUpdateFailure {
    /**
     * Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon.
     */
    @JsonProperty({ name: 'code' })
    code: RetryableOrderPurchaseUpdateFailureCodeEnum
    /**
     * A human-readable explanation of the error, specific to this error occurrence.
     */
    @JsonProperty({ name: 'message' })
    message: string

    public constructor(
        retryableOrderPurchaseUpdateFailure: RetryableOrderPurchaseUpdateFailureProperties,
    ) {
        this.code = retryableOrderPurchaseUpdateFailure.code
        this.message = retryableOrderPurchaseUpdateFailure.message
    }
}

export type RetryableOrderPurchaseUpdateFailureCodeEnum =
    | 'UNAUTHORIZED'
    | 'FORBIDDEN'
    | 'NOT_FOUND'
    | 'ORDER_PURCHASE_UPDATE_NOT_FOUND'
    | 'TOO_MANY_REQUESTS'
    | 'INTERNAL_SERVER_ERROR'
    | 'BAD_GATEWAY'
    | 'RETRYABLE_ORDER_PURCHASE_SCREEN_FAILURE'
    | 'RETRYABLE_ORDER_PURCHASE_UPDATE_FAILURE'
    | 'GATEWAY_TIMEOUT'
    | 'BAD_REQUEST'

export interface RetryableOrderPurchaseUpdateFailureProperties {
    code: RetryableOrderPurchaseUpdateFailureCodeEnum
    message: string
}
