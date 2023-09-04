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
 * Reason of order update cancellation.
 */
@JsonObject({ constructorParams: [{}] })
export class CancellationReason {
    /**
     * Primary cancellation reason code.
     */
    @JsonProperty({ name: 'primary_reason_code' })
    primaryReasonCode?: string
    /**
     * Substitute cancellation reason code.
     */
    @JsonProperty({ name: 'sub_reason_code' })
    subReasonCode?: string
    /**
     * Primary cancellation reason code. Required if `order_status = CANCELLED`.
     */
    @JsonProperty({ name: 'primary_reason_description' })
    primaryReasonDescription?: string
    /**
     * Substitute cancellation reason description.
     */
    @JsonProperty({ name: 'sub_reason_description' })
    subReasonDescription?: string

    public constructor(cancellationReason: CancellationReasonProperties) {
        this.primaryReasonCode = cancellationReason.primaryReasonCode
        this.subReasonCode = cancellationReason.subReasonCode
        this.primaryReasonDescription =
            cancellationReason.primaryReasonDescription
        this.subReasonDescription = cancellationReason.subReasonDescription
    }
}

export interface CancellationReasonProperties {
    primaryReasonCode?: string
    subReasonCode?: string
    primaryReasonDescription?: string
    subReasonDescription?: string
}
