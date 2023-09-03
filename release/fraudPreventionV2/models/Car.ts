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
import { TravelProduct } from './TravelProduct'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'
import { TravelProductProperties } from './TravelProduct'

@JsonObject({ constructorParams: [{}] })
export class Car extends TravelProduct {
    /**
     * Location where the automobile will be picked up.
     */
    @JsonProperty({ name: 'pick_up_location' })
    pickUpLocation: string
    /**
     * Location at which the automobile will be returned.
     */
    @JsonProperty({ name: 'drop_off_location' })
    dropOffLocation: string
    /**
     * Local date and time the automobile will be picked-up, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.
     */
    @JsonProperty({ name: 'pickup_time' })
    pickupTime: Date
    /**
     * Local date and time the automobile will be returned, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.
     */
    @JsonProperty({ name: 'return_time' })
    returnTime: Date

    @JsonProperty('type')
    readonly type = 'CAR'

    public constructor(car: CarProperties) {
        super({
            price: car.price,
            inventoryType: car.inventoryType,
            inventorySource: car.inventorySource,
            travelersReferences: car.travelersReferences,
        })
        this.pickUpLocation = car.pickUpLocation
        this.dropOffLocation = car.dropOffLocation
        this.pickupTime = car.pickupTime
        this.returnTime = car.returnTime
    }
}

export interface CarProperties extends TravelProductProperties {
    pickUpLocation: string
    dropOffLocation: string
    pickupTime: Date
    returnTime: Date
}
