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
import { Payment } from './Payment'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'
import { PaymentProperties } from './Payment'

@JsonObject({ constructorParams: [{}] })
export class PayPal extends Payment {
    /**
     * Unique PayPal Customer Account identification number.
     */
    @JsonProperty({ name: 'payer_id' })
    payerId: string
    /**
     * Unique transaction number to identify Auth calls at PayPal.
     */
    @JsonProperty({ name: 'transaction_id' })
    transactionId: string
    /**
     * Reference code passed to acquiring bank at the time of payment. This code is the key ID that ties back to payments data at the payment level.
     */
    @JsonProperty({ name: 'merchant_order_code' })
    merchantOrderCode?: string

    @JsonProperty('method')
    readonly method = 'PAYPAL'

    public constructor(payPal: PayPalProperties) {
        super({
            brand: payPal.brand,
            reason: payPal.reason,
            billingName: payPal.billingName,
            billingAddress: payPal.billingAddress,
            billingEmailAddress: payPal.billingEmailAddress,
            authorizedAmount: payPal.authorizedAmount,
            verifiedAmount: payPal.verifiedAmount,
            threeDigitsSecureCriteria: payPal.threeDigitsSecureCriteria,
            operations: payPal.operations,
        })
        this.payerId = payPal.payerId
        this.transactionId = payPal.transactionId
        this.merchantOrderCode = payPal.merchantOrderCode
    }
}

export interface PayPalProperties extends PaymentProperties {
    payerId: string
    transactionId: string
    merchantOrderCode?: string
}
