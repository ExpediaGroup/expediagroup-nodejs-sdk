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
import { CustomerAccountAddress } from './CustomerAccountAddress'

import { CustomerAccountAddressMapper } from './CustomerAccountAddressMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

@JsonObject({ constructorParams: [{}] })
export class RailwayStationDetails {
    /**
     * The popularly known name or title by which the railway station is identified.
     */
    @JsonProperty({ name: 'name' })
    name: string
    /**
     * This attribute provides information about the specific classification assigned to the rail station. It helps differentiate between different types of stations, such as major stations (STATION) or stations located within a city (city).
     */
    @JsonProperty({ name: 'type' })
    type?: RailwayStationDetailsTypeEnum
    /**
     * The unique identifier or code assigned to an individual rail station or a pseudo-station representing all the stations within a specific city, from which rail travel originates.
     */
    @JsonProperty({ name: 'station_code' })
    stationCode: string
    @JsonProperty({
        name: 'address',
        type: (property) => CustomerAccountAddressMapper.getType(property),
    })
    address: CustomerAccountAddress
    /**
     * The timezone associated with the location of the station, specifying the local time offset from Coordinated Universal Time (UTC).
     */
    @JsonProperty({ name: 'timezone' })
    timezone?: string

    public constructor(railwayStationDetails: RailwayStationDetailsProperties) {
        this.name = railwayStationDetails.name
        this.type = railwayStationDetails.type
        this.stationCode = railwayStationDetails.stationCode
        this.address = railwayStationDetails.address
        this.timezone = railwayStationDetails.timezone
    }
}

export type RailwayStationDetailsTypeEnum = 'STATION' | 'CITY'

export interface RailwayStationDetailsProperties {
    name: string
    type?: RailwayStationDetailsTypeEnum
    stationCode: string
    address: CustomerAccountAddress
    timezone?: string
}
