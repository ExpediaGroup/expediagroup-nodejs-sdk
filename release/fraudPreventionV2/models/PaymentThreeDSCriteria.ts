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
 * Payment ThreeDS criteria attributes.
 */
@JsonObject({ constructorParams: [{}] })
export class PaymentThreeDSCriteria {
    /**
     * This is a flag passed that indicates that this transaction could potentially go through 3DS.
     */
    @JsonProperty({ name: 'probable_flag' })
    probableFlag?: boolean
    /**
     * Model used to process payment transaction.
     */
    @JsonProperty({ name: 'transaction_model' })
    transactionModel?: string

    public constructor(
        paymentThreeDSCriteria: PaymentThreeDSCriteriaProperties
    ) {
        this.probableFlag = paymentThreeDSCriteria.probableFlag
        this.transactionModel = paymentThreeDSCriteria.transactionModel
    }
}

export interface PaymentThreeDSCriteriaProperties {
    probableFlag?: boolean
    transactionModel?: string
}
