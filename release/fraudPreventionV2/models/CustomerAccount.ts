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
import { Name } from './Name'
import { Telephone } from './Telephone'

import { NameMapper } from './NameMapper'

import { TelephoneMapper } from './TelephoneMapper'

import { CustomerAccountAddressMapper } from './CustomerAccountAddressMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

@JsonObject({ constructorParams: [{}] })
export class CustomerAccount {
    /**
     * Unique account identifier provided by the partner\'s Identity Provider/System assigned to the account owner by the partner. `user_id` is specific to the partner namespace. Used to track repeat purchases by the same user.
     */
    @JsonProperty({ name: 'user_id' })
    userId?: string
    /**
     * Identifies if the customer account is known to the client. Possible values are:  -`GUEST` - Applicable if the partner maintains record to distinguish whether the transaction was booked via a guest account.  -`STANDARD` - Default account type.
     */
    @JsonProperty({ name: 'account_type' })
    accountType: CustomerAccountAccountTypeEnum
    @JsonProperty({
        name: 'name',
        type: (property) => NameMapper.getType(property),
    })
    name: Name
    /**
     * Email address for the account owner.
     */
    @JsonProperty({ name: 'email_address' })
    emailAddress: string
    @JsonProperty({
        name: 'telephones',
        type: (property) => TelephoneMapper.getType(property),
    })
    telephones?: Array<Telephone>
    @JsonProperty({
        name: 'address',
        type: (property) => CustomerAccountAddressMapper.getType(property),
    })
    address?: CustomerAccountAddress
    /**
     * The local date and time that the customer first registered on the client site, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.
     */
    @JsonProperty({ name: 'registered_time' })
    registeredTime?: Date

    public constructor(customerAccount: CustomerAccountProperties) {
        this.userId = customerAccount.userId
        this.accountType = customerAccount.accountType
        this.name = customerAccount.name
        this.emailAddress = customerAccount.emailAddress
        this.telephones = customerAccount.telephones
        this.address = customerAccount.address
        this.registeredTime = customerAccount.registeredTime
    }
}

export type CustomerAccountAccountTypeEnum = 'GUEST' | 'STANDARD'

export interface CustomerAccountProperties {
    userId?: string
    accountType: CustomerAccountAccountTypeEnum
    name: Name
    emailAddress: string
    telephones?: Array<Telephone>
    address?: CustomerAccountAddress
    registeredTime?: Date
}
