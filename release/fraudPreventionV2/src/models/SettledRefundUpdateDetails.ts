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
import { Amount } from './Amount'

import { AmountMapper } from './AmountMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

/**
 * Data that describes settled refund that should be updated.
 */
@JsonObject({ constructorParams: [{}] })
export class SettledRefundUpdateDetails {
    /**
     * Date and time when the 3rd party payment processor confirmed that a previously submitted payment refund has settled at the participating financial institutions.
     */
    @JsonProperty({ name: 'refund_settlement_date_time' })
    refundSettlementDateTime: Date
    /**
     * Date and time when the refund was deposited to the original form of payment.
     */
    @JsonProperty({ name: 'refund_deposit_date_time' })
    refundDepositDateTime: Date
    /**
     * A unique number that tags a credit or debit card transaction when it goes from the merchant\'s bank through to the cardholder\'s bank. Typically, merchants can get this number from their payment processors. This number is used when dealing with disputes/chargebacks on original transactions.
     */
    @JsonProperty({ name: 'acquirer_reference_number' })
    acquirerReferenceNumber: string
    /**
     * Unique settlement identifier specific to the payment processor for the settlement transaction generated for a previously submitted payment refund.
     */
    @JsonProperty({ name: 'settlement_id' })
    settlementId: string
    @JsonProperty({
        name: 'refund_settled_amount',
        type: (property) => AmountMapper.getType(property),
    })
    refundSettledAmount: Amount

    public constructor(
        settledRefundUpdateDetails: SettledRefundUpdateDetailsProperties
    ) {
        this.refundSettlementDateTime =
            settledRefundUpdateDetails.refundSettlementDateTime
        this.refundDepositDateTime =
            settledRefundUpdateDetails.refundDepositDateTime
        this.acquirerReferenceNumber =
            settledRefundUpdateDetails.acquirerReferenceNumber
        this.settlementId = settledRefundUpdateDetails.settlementId
        this.refundSettledAmount =
            settledRefundUpdateDetails.refundSettledAmount
    }
}

export interface SettledRefundUpdateDetailsProperties {
    refundSettlementDateTime: Date
    refundDepositDateTime: Date
    acquirerReferenceNumber: string
    settlementId: string
    refundSettledAmount: Amount
}