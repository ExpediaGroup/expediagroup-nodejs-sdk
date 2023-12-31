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
import { AccountTakeoverName } from './AccountTakeoverName'
import { CustomerAccountAddress } from './CustomerAccountAddress'
import { Telephone } from './Telephone'

import { AccountTakeoverNameMapper } from './AccountTakeoverNameMapper'

import { TelephoneMapper } from './TelephoneMapper'

import { CustomerAccountAddressMapper } from './CustomerAccountAddressMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

/**
 * Information about a user\'s account.
 */
@JsonObject({ constructorParams: [{}] })
export class AccountTakeoverCustomerAccount {
    /**
     * Unique account identifier provided by the Partner\'s Identity Provider/System assigned to the account owner by the partner. `user_id` is specific to the Partner\'s namespace. Used to track repeat account activity by the same user.
     */
    @JsonProperty({ name: 'user_id' })
    userId: string
    /**
     * Identifies the account type of a user\'\'s account. Possible values are: - `INDIVIDUAL` - Applicable if this account is for an individual traveler. - `BUSINESS` - Applicable if this account is for a business or organization account used by suppliers or Partners.
     */
    @JsonProperty({ name: 'account_type' })
    accountType: AccountTakeoverCustomerAccountAccountTypeEnum
    /**
     * Identifies the account role and associated permissions of a user\'\'s account. Possible values are: - `USER`: Basic account with no special privileges. - `MANAGER`: Account with additional privileges, such as the ability to make bookings for others. - `ADMIN`: Account with higher privileges than a manager, including the ability to grant manager access to other users.
     */
    @JsonProperty({ name: 'account_role' })
    accountRole?: AccountTakeoverCustomerAccountAccountRoleEnum
    @JsonProperty({
        name: 'name',
        type: (property) => AccountTakeoverNameMapper.getType(property),
    })
    name?: AccountTakeoverName
    /**
     * Username of the account.
     */
    @JsonProperty({ name: 'username' })
    username: string
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
     * The local date and time that the customer first registered on the Partner\'s site, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.
     */
    @JsonProperty({ name: 'registered_time' })
    registeredTime: Date
    /**
     * Indicator for if this account is an active account or not.
     */
    @JsonProperty({ name: 'active_flag' })
    activeFlag: boolean
    /**
     * Unique loyalty identifier for a user.
     */
    @JsonProperty({ name: 'loyalty_member_id' })
    loyaltyMemberId?: string

    public constructor(
        accountTakeoverCustomerAccount: AccountTakeoverCustomerAccountProperties,
    ) {
        this.userId = accountTakeoverCustomerAccount.userId
        this.accountType = accountTakeoverCustomerAccount.accountType
        this.accountRole = accountTakeoverCustomerAccount.accountRole
        this.name = accountTakeoverCustomerAccount.name
        this.username = accountTakeoverCustomerAccount.username
        this.emailAddress = accountTakeoverCustomerAccount.emailAddress
        this.telephones = accountTakeoverCustomerAccount.telephones
        this.address = accountTakeoverCustomerAccount.address
        this.registeredTime = accountTakeoverCustomerAccount.registeredTime
        this.activeFlag = accountTakeoverCustomerAccount.activeFlag
        this.loyaltyMemberId = accountTakeoverCustomerAccount.loyaltyMemberId
    }
}

export type AccountTakeoverCustomerAccountAccountTypeEnum =
    | 'INDIVIDUAL'
    | 'BUSINESS'
export type AccountTakeoverCustomerAccountAccountRoleEnum =
    | 'USER'
    | 'MANAGER'
    | 'ADMIN'

export interface AccountTakeoverCustomerAccountProperties {
    userId: string
    accountType: AccountTakeoverCustomerAccountAccountTypeEnum
    accountRole?: AccountTakeoverCustomerAccountAccountRoleEnum
    name?: AccountTakeoverName
    username: string
    emailAddress: string
    telephones?: Array<Telephone>
    address?: CustomerAccountAddress
    registeredTime: Date
    activeFlag: boolean
    loyaltyMemberId?: string
}
