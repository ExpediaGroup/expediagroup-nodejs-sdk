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
export class Points extends Payment {
    /**
     * Points account id.
     */
    @JsonProperty({ name: 'account_id' })
    accountId: string

    @JsonProperty('method')
    readonly method = 'POINTS'

    public constructor(points: PointsProperties) {
        super({
            brand: points.brand,
            reason: points.reason,
            billingName: points.billingName,
            billingAddress: points.billingAddress,
            billingEmailAddress: points.billingEmailAddress,
            authorizedAmount: points.authorizedAmount,
            verifiedAmount: points.verifiedAmount,
            threeDigitsSecureCriteria: points.threeDigitsSecureCriteria,
            operations: points.operations,
            extensions: points.extensions,
        })
        this.accountId = points.accountId
    }
}

export interface PointsProperties extends PaymentProperties {
    accountId: string
}
