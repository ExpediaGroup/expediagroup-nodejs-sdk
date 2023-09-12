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
import { Telephone } from './Telephone'

import { TelephoneMapper } from './TelephoneMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

/**
 * Information specific to the update event by a user.
 */
@JsonObject({ constructorParams: [{}] })
export class MultiFactorAuthenticationAttempt {
    /**
     * The delivery method of the Multi-Factor Authentication to a user.
     */
    @JsonProperty({ name: 'delivery_method' })
    deliveryMethod: MultiFactorAuthenticationAttemptDeliveryMethodEnum
    /**
     * The status of a user\'\'s response to the Multi-Factor Authentication initiated by the Partner\'\'s system to the user.\' - `SUCCESS` - Applicable if the user successfully passed the challenge. - `ABANDON` - Applicable if the user did not complete the challenge. - `FAILED` - Applicable if the user failed the challenge.
     */
    @JsonProperty({ name: 'status' })
    status: MultiFactorAuthenticationAttemptStatusEnum
    /**
     * The identifier related to a Multi-Factor Authentication attempt by the Partner\'s system to the Multi-Factor Authentication provider.
     */
    @JsonProperty({ name: 'reference_id' })
    referenceId: string
    /**
     * The vendor providing the Multi-Factor Authentication verification.
     */
    @JsonProperty({ name: 'provider_name' })
    providerName: string
    /**
     * The number of attempts a user tried for this Multi-Factor Authentication.
     */
    @JsonProperty({ name: 'attempt_count' })
    attemptCount: number
    /**
     * The local date and time the Multi-Factor Authentication was initiated to a user from the Partner\'s system, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.
     */
    @JsonProperty({ name: 'update_start_date_time' })
    updateStartDateTime?: Date
    /**
     * The local date and time the Multi-Factor Authentication to a user ended in the Partner\'s system, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.
     */
    @JsonProperty({ name: 'update_end_date_time' })
    updateEndDateTime?: Date
    @JsonProperty({
        name: 'telephone',
        type: (property) => TelephoneMapper.getType(property),
    })
    telephone?: Telephone
    /**
     * Email address used for the Multi-Factor Authentication by a user.
     */
    @JsonProperty({ name: 'email_address' })
    emailAddress?: string

    public constructor(
        multiFactorAuthenticationAttempt: MultiFactorAuthenticationAttemptProperties
    ) {
        this.deliveryMethod = multiFactorAuthenticationAttempt.deliveryMethod
        this.status = multiFactorAuthenticationAttempt.status
        this.referenceId = multiFactorAuthenticationAttempt.referenceId
        this.providerName = multiFactorAuthenticationAttempt.providerName
        this.attemptCount = multiFactorAuthenticationAttempt.attemptCount
        this.updateStartDateTime =
            multiFactorAuthenticationAttempt.updateStartDateTime
        this.updateEndDateTime =
            multiFactorAuthenticationAttempt.updateEndDateTime
        this.telephone = multiFactorAuthenticationAttempt.telephone
        this.emailAddress = multiFactorAuthenticationAttempt.emailAddress
    }
}

export type MultiFactorAuthenticationAttemptDeliveryMethodEnum =
    | 'EMAIL'
    | 'SMS'
    | 'VOICE'
    | 'PUSH'
export type MultiFactorAuthenticationAttemptStatusEnum =
    | 'SUCCESS'
    | 'ABANDON'
    | 'FAILED'

export interface MultiFactorAuthenticationAttemptProperties {
    deliveryMethod: MultiFactorAuthenticationAttemptDeliveryMethodEnum
    status: MultiFactorAuthenticationAttemptStatusEnum
    referenceId: string
    providerName: string
    attemptCount: number
    updateStartDateTime?: Date
    updateEndDateTime?: Date
    telephone?: Telephone
    emailAddress?: string
}
