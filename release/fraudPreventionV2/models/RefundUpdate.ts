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
import { OrderPurchaseUpdateRequest } from './OrderPurchaseUpdateRequest'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'
import { OrderPurchaseUpdateRequestProperties } from './OrderPurchaseUpdateRequest'

/**
 * Refund related data. Update should be sent when refund is issued or settled. Amounts should include all fees and taxes.
 */
@JsonObject({ constructorParams: [{}] })
export class RefundUpdate extends OrderPurchaseUpdateRequest {
    @JsonProperty('type')
    readonly type = 'REFUND_UPDATE'

    public constructor(refundUpdate: RefundUpdateProperties) {
        super({
            riskId: refundUpdate.riskId,
        })
    }
}

export type RefundUpdateRefundStatusEnum = 'ISSUED' | 'SETTLED'

export interface RefundUpdateProperties
    extends OrderPurchaseUpdateRequestProperties {}
