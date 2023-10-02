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
import { OrderPurchaseTransaction } from './OrderPurchaseTransaction'
import { OrderPurchaseTransactionMapper } from './OrderPurchaseTransactionMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

@JsonObject({ constructorParams: [{}] })
export class OrderPurchaseScreenRequest {
    @JsonProperty({
        name: 'transaction',
        type: (property) => OrderPurchaseTransactionMapper.getType(property),
    })
    transaction: OrderPurchaseTransaction

    public constructor(
        orderPurchaseScreenRequest: OrderPurchaseScreenRequestProperties
    ) {
        this.transaction = orderPurchaseScreenRequest.transaction
    }
}

export interface OrderPurchaseScreenRequestProperties {
    transaction: OrderPurchaseTransaction
}
