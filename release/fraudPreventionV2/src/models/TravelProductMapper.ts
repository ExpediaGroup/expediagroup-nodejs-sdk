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
import { Activity } from './Activity'
import { Air } from './Air'
import { Car } from './Car'
import { Cruise } from './Cruise'
import { Hotel } from './Hotel'
import { Insurance } from './Insurance'
import { Rail } from './Rail'
import { TravelProduct } from './TravelProduct'

export class TravelProductMapper {
    static subTypes = new Map<string, any>([
        ['ACTIVITY', Activity],
        ['AIR', Air],
        ['CAR', Car],
        ['CRUISE', Cruise],
        ['HOTEL', Hotel],
        ['INSURANCE', Insurance],
        ['RAIL', Rail],
    ])

    static getType(property) {
        let discriminator = property.type
        if (TravelProductMapper.subTypes.has(discriminator)) {
            return TravelProductMapper.subTypes.get(discriminator)
        }
        return TravelProduct
    }
}
