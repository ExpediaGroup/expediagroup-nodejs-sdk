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
import { AccountTakeoverTransactionDetails } from './AccountTakeoverTransactionDetails'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'
import { AccountTakeoverTransactionDetailsProperties } from './AccountTakeoverTransactionDetails'

@JsonObject({ constructorParams: [{}] })
export class LoginTransactionDetails extends AccountTakeoverTransactionDetails {
    /**
     * The type of login authentication method used by a user. For `authentication_type` ensure attributes mentioned in dictionary below are set to corresponding values only. `authentication_type` is an enum value with the following mapping with `authentication_sub_type` attribute: *       authentication_type       :     authentication_sub_type * ------------------------------------------------------------------------------- * `CREDENTIALS`                         : `EMAIL` * `CREDENTIALS`                         : * `PASSWORD_RESET`                      : `EMAIL` * `SINGLE_SIGN_ON`                      : `EMAIL` * `MULTI_FACTOR_AUTHENTICATION`         : `EMAIL` * `MULTI_FACTOR_AUTHENTICATION`         : `PHONE` * `SOCIAL`                              : `GOOGLE` * `SOCIAL`                              : `FACEBOOK` * `SOCIAL`                              : `APPLE`
     */
    @JsonProperty({ name: 'authentication_type' })
    authenticationType: LoginTransactionDetailsAuthenticationTypeEnum
    /**
     * The sub type of login authentication method used by a user. For `authentication_sub_type` ensure attributes mentioned in dictionary below are set to corresponding values only. `authentication_sub_type` is an enum value with the following mapping with `authentication_type` attribute: *       authentication_sub_type   :     authentication_type * ------------------------------------------------------------------------------- * `EMAIL`                               : `CREDENTIALS` * `EMAIL`                               : `PASSWORD_RESET` * `EMAIL`                               : `SINGLE_SIGN_ON` * `EMAIL`                               : `MULTI_FACTOR_AUTHENTICATION` * `PHONE`                               : `MULTI_FACTOR_AUTHENTICATION` * `GOOGLE`                              : `SOCIAL` * `FACEBOOK`                            : `SOCIAL` * `APPLE`                               : `SOCIAL` *                                       : `CREDENTIALS`
     */
    @JsonProperty({ name: 'authentication_sub_type' })
    authenticationSubType?: LoginTransactionDetailsAuthenticationSubTypeEnum
    /**
     * Identifies if a login attempt by a user was successful or not.
     */
    @JsonProperty({ name: 'successful_login_flag' })
    successfulLoginFlag: boolean
    /**
     * The reason for the failed login attempt in the Partner\'\'s system, related to user failure or Partner\'\'s system failure. - `INVALID_CREDENTIALS` - Applicable if the user provided invalid login credentials for this login attempt. - `ACCOUNT_NOT_FOUND` - Applicable if the user attempted to login to an account that doesn\'t exist. - `VERIFICATION_FAILED` - Applicable if the user failed the verification for this login, or any authentication exception occured in the Partner system for this login attempt. - `ACCOUNT_LOCKED` - Applicable if the user attempted to login to an account that is locked.
     */
    @JsonProperty({ name: 'failed_login_reason' })
    failedLoginReason?: LoginTransactionDetailsFailedLoginReasonEnum

    @JsonProperty('type')
    readonly type = 'LOGIN'

    public constructor(
        loginTransactionDetails: LoginTransactionDetailsProperties
    ) {
        super({
            transactionDateTime: loginTransactionDetails.transactionDateTime,
            transactionId: loginTransactionDetails.transactionId,
            currentUserSession: loginTransactionDetails.currentUserSession,
        })
        this.authenticationType = loginTransactionDetails.authenticationType
        this.authenticationSubType =
            loginTransactionDetails.authenticationSubType
        this.successfulLoginFlag = loginTransactionDetails.successfulLoginFlag
        this.failedLoginReason = loginTransactionDetails.failedLoginReason
    }
}

export type LoginTransactionDetailsAuthenticationTypeEnum =
    | 'CREDENTIALS'
    | 'PASSWORD_RESET'
    | 'SOCIAL'
    | 'SINGLE_SIGN_ON'
    | 'MULTI_FACTOR_AUTHENTICATION'
export type LoginTransactionDetailsAuthenticationSubTypeEnum =
    | 'EMAIL'
    | 'PHONE'
    | 'GOOGLE'
    | 'FACEBOOK'
    | 'APPLE'
export type LoginTransactionDetailsFailedLoginReasonEnum =
    | 'INVALID_CREDENTIALS'
    | 'ACCOUNT_NOT_FOUND'
    | 'VERIFICATION_FAILED'
    | 'ACCOUNT_LOCKED'

export interface LoginTransactionDetailsProperties
    extends AccountTakeoverTransactionDetailsProperties {
    authenticationType: LoginTransactionDetailsAuthenticationTypeEnum
    authenticationSubType?: LoginTransactionDetailsAuthenticationSubTypeEnum
    successfulLoginFlag: boolean
    failedLoginReason?: LoginTransactionDetailsFailedLoginReasonEnum
}
