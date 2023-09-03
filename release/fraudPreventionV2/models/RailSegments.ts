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
import { RailSegmentsOperatingCompany } from './RailSegmentsOperatingCompany'
import { RailwayStationDetails } from './RailwayStationDetails'

import { RailwayStationDetailsMapper } from './RailwayStationDetailsMapper'

import { RailSegmentsOperatingCompanyMapper } from './RailSegmentsOperatingCompanyMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

@JsonObject({ constructorParams: [{}] })
export class RailSegments {
    /**
     * The local date and time of the scheduled departure from the departure station, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.
     */
    @JsonProperty({ name: 'departure_time' })
    departureTime: Date
    /**
     * The local date and time of the scheduled arrival at the destination station, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.
     */
    @JsonProperty({ name: 'arrival_time' })
    arrivalTime: Date
    @JsonProperty({
        name: 'departure_station',
        type: (property) => RailwayStationDetailsMapper.getType(property),
    })
    departureStation: RailwayStationDetails
    @JsonProperty({
        name: 'arrival_station',
        type: (property) => RailwayStationDetailsMapper.getType(property),
    })
    arrivalStation: RailwayStationDetails
    /**
     * This attribute represents the specific transportation method by which the passenger is traveling. It captures the mode of transportation used during the Rail product journey, Possible values are:     - `BUS` - The Rail product includes bus transportation for certain segments of the itinerary.     - `FERRY` - The Rail product involves ferry transportation as part of the journey.     - `PUBLIC_TRANSPORT` - The Rail product represents the use of public transportation modes for the journey.     - `TRAM` - The Rail product includes tram transportation as part of the journey.     - `RAIL` - The Rail product specifically utilizes train transportation for the journey.     - `TRANSFER` - The Rail product involves transfers between different modes of transportation.     - `OTHER` - The Rail product utilizes transportation methods not covered by the aforementioned categories.
     */
    @JsonProperty({ name: 'transportation_method' })
    transportationMethod: RailSegmentsTransportationMethodEnum
    @JsonProperty({
        name: 'operating_company',
        type: (property) =>
            RailSegmentsOperatingCompanyMapper.getType(property),
    })
    operatingCompany?: RailSegmentsOperatingCompany

    public constructor(railSegments: RailSegmentsProperties) {
        this.departureTime = railSegments.departureTime
        this.arrivalTime = railSegments.arrivalTime
        this.departureStation = railSegments.departureStation
        this.arrivalStation = railSegments.arrivalStation
        this.transportationMethod = railSegments.transportationMethod
        this.operatingCompany = railSegments.operatingCompany
    }
}

export type RailSegmentsTransportationMethodEnum =
    | 'BUS'
    | 'FERRY'
    | 'PUBLIC_TRANSPORT'
    | 'RAIL'
    | 'TRAM'
    | 'TRANSFER'
    | 'OTHERS'

export interface RailSegmentsProperties {
    departureTime: Date
    arrivalTime: Date
    departureStation: RailwayStationDetails
    arrivalStation: RailwayStationDetails
    transportationMethod: RailSegmentsTransportationMethodEnum
    operatingCompany?: RailSegmentsOperatingCompany
}
