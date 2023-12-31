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
 * Data that describes issued refund that should be updated.
 */
@JsonObject({ constructorParams: [{}] })
export class IssuedRefundUpdateDetails {
    /**
     * Date and time when the 3rd party payment processor confirmed that a previously submitted payment refund has issued at the participating financial institutions.
     */
    @JsonProperty({ name: 'refund_issued_date_time' })
    refundIssuedDateTime: Date
    @JsonProperty({
        name: 'refund_issued_amount',
        type: (property) => AmountMapper.getType(property),
    })
    refundIssuedAmount: Amount

    public constructor(
        issuedRefundUpdateDetails: IssuedRefundUpdateDetailsProperties,
    ) {
        this.refundIssuedDateTime =
            issuedRefundUpdateDetails.refundIssuedDateTime
        this.refundIssuedAmount = issuedRefundUpdateDetails.refundIssuedAmount
    }
}

export interface IssuedRefundUpdateDetailsProperties {
    refundIssuedDateTime: Date
    refundIssuedAmount: Amount
}
