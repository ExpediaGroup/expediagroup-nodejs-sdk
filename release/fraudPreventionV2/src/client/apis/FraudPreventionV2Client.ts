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

import {
    AccountScreenRequest,
    AccountScreenResponse,
    AccountUpdateRequest,
    AccountUpdateResponse,
    OrderPurchaseScreenRequest,
    OrderPurchaseScreenResponse,
    OrderPurchaseUpdateRequest,
    OrderPurchaseUpdateResponse,
} from '../../models'

import { platform, release } from 'os'
import { v4 as uuid } from 'uuid'
import {
    Client,
    ClientConfigurations,
    ExpediaGroupError,
    ExpediaGroupServiceError,
    Serializer,
} from '../../core'
import { ErrorObjectMapper } from '../../models/error/ApiError'

/**
 *
 */
export class FraudPreventionV2Client extends Client {
    private static readonly sdkTitle: string =
        'expediagroup-nodejs-sdk-fraudpreventionv2'
    private static readonly nodeVersion: string = process.version
    private static readonly operatingSystemName: string = platform()
    private static readonly operatingSystemVersion: string = release()
    private static readonly userAgent: string = `${this.sdkTitle}/5.0.0 (Node.js ${this.nodeVersion} ${this.operatingSystemName} ${this.operatingSystemVersion})`

    constructor(configurations: ClientConfigurations) {
        super({
            ...configurations,
            userAgent: FraudPreventionV2Client.userAgent,
        })
    }

    private static createHeaders() {
        return {
            'Content-Type': 'application/json',
            'User-Agent': FraudPreventionV2Client.userAgent,
            'transaction-id': uuid(),
            'x-sdk-title': FraudPreventionV2Client.sdkTitle,
        }
    }

    /**
     * Send an update as a result of an account screen transaction
     * The Account Update API is called when there is an account lifecycle transition such as a challenge outcome, account restoration, or remediation action completion. For example, if a user\&#39;s account is disabled, deleted, or restored, the Account Update API is called to notify Expedia Group about the change. The Account Update API is also called when a user responds to a login Multi-Factor Authentication based on a Fraud recommendation.
     * @param accountUpdateRequest An AccountUpdate request may be of one of the following types &#x60;MULTI_FACTOR_AUTHENTICATION_UPDATE&#x60;, &#x60;REMEDIATION_UPDATE&#x60;.
     <AccountUpdateResponse>
     * @throws ExpediaGroupApiAccountTakeoverBadRequestError
     * @throws ExpediaGroupApiAccountTakeoverUnauthorizedError
     * @throws ExpediaGroupApiForbiddenError
     * @throws ExpediaGroupApiAccountUpdateNotFoundError
     * @throws ExpediaGroupApiTooManyRequestsError
     * @throws ExpediaGroupApiInternalServerError
     * @throws ExpediaGroupApiBadGatewayError
     * @throws ExpediaGroupApiServiceUnavailableError
     * @throws ExpediaGroupApiGatewayTimeoutError
     * @return Promise
     */
    notifyWithAccountUpdate(
        accountUpdateRequest: AccountUpdateRequest,
    ): Promise<AccountUpdateResponse> {
        let responsePromise = this.axiosClient
            .request({
                method: 'POST',
                url: 'fraud-prevention/v2/account/update',
                headers: FraudPreventionV2Client.createHeaders(),
                data: Serializer.serialize(accountUpdateRequest),
            })
            .catch((error) => {
                if (error instanceof ExpediaGroupError) throw error
                if (error.response?.status)
                    throw ErrorObjectMapper.process(
                        error,
                        'notifyWithAccountUpdate',
                    )
                throw new ExpediaGroupServiceError(error)
            })
        return responsePromise.then((response) => {
            return Serializer.deserializeObject<AccountUpdateResponse>(
                response.data,
                AccountUpdateResponse,
            ) as AccountUpdateResponse
        })
    }
    /**
     * Send an update for a transaction
     * The Order Purchase Update API is called when the status of the order has changed.  For example, if the customer cancels the reservation, changes reservation in any way, or adds additional products or travelers to the reservation, the Order Purchase Update API is called to notify Expedia Group about the change.  The Order Purchase Update API is also called when the merchant cancels or changes an order based on a Fraud recommendation. 
     * @param orderPurchaseUpdateRequest An OrderPurchaseUpdate request may be of one of the following types &#x60;ORDER_UPDATE&#x60;, &#x60;CHARGEBACK_FEEDBACK&#x60;, &#x60;INSULT_FEEDBACK&#x60;, &#x60;REFUND_UPDATE&#x60;, &#x60;PAYMENT_UPDATE&#x60;. 
     <OrderPurchaseUpdateResponse>
     * @throws ExpediaGroupApiBadRequestError
     * @throws ExpediaGroupApiUnauthorizedError
     * @throws ExpediaGroupApiForbiddenError
     * @throws ExpediaGroupApiOrderPurchaseUpdateNotFoundError
     * @throws ExpediaGroupApiTooManyRequestsError
     * @throws ExpediaGroupApiInternalServerError
     * @throws ExpediaGroupApiBadGatewayError
     * @throws ExpediaGroupApiRetryableOrderPurchaseUpdateFailure
     * @throws ExpediaGroupApiGatewayTimeoutError
     * @return Promise
     */
    notifyWithOrderUpdate(
        orderPurchaseUpdateRequest: OrderPurchaseUpdateRequest,
    ): Promise<OrderPurchaseUpdateResponse> {
        let responsePromise = this.axiosClient
            .request({
                method: 'POST',
                url: 'fraud-prevention/v2/order/purchase/update',
                headers: FraudPreventionV2Client.createHeaders(),
                data: Serializer.serialize(orderPurchaseUpdateRequest),
            })
            .catch((error) => {
                if (error instanceof ExpediaGroupError) throw error
                if (error.response?.status)
                    throw ErrorObjectMapper.process(
                        error,
                        'notifyWithOrderUpdate',
                    )
                throw new ExpediaGroupServiceError(error)
            })
        return responsePromise.then((response) => {
            return Serializer.deserializeObject<OrderPurchaseUpdateResponse>(
                response.data,
                OrderPurchaseUpdateResponse,
            ) as OrderPurchaseUpdateResponse
        })
    }
    /**
     * Run fraud screening for one transaction
     * The Account Screen API gives a Fraud recommendation for an account transaction. A recommendation can be ACCEPT, CHALLENGE, or REJECT. A transaction is marked as CHALLENGE whenever there are insufficient signals to recommend ACCEPT or REJECT. These CHALLENGE incidents are manually reviewed, and a corrected recommendation is made asynchronously.
     * @param accountScreenRequest 
     <AccountScreenResponse>
     * @throws ExpediaGroupApiAccountTakeoverBadRequestError
     * @throws ExpediaGroupApiAccountTakeoverUnauthorizedError
     * @throws ExpediaGroupApiForbiddenError
     * @throws ExpediaGroupApiNotFoundError
     * @throws ExpediaGroupApiTooManyRequestsError
     * @throws ExpediaGroupApiInternalServerError
     * @throws ExpediaGroupApiBadGatewayError
     * @throws ExpediaGroupApiServiceUnavailableError
     * @throws ExpediaGroupApiGatewayTimeoutError
     * @return Promise
     */
    screenAccount(
        accountScreenRequest: AccountScreenRequest,
    ): Promise<AccountScreenResponse> {
        let responsePromise = this.axiosClient
            .request({
                method: 'POST',
                url: 'fraud-prevention/v2/account/screen',
                headers: FraudPreventionV2Client.createHeaders(),
                data: Serializer.serialize(accountScreenRequest),
            })
            .catch((error) => {
                if (error instanceof ExpediaGroupError) throw error
                if (error.response?.status)
                    throw ErrorObjectMapper.process(error, 'screenAccount')
                throw new ExpediaGroupServiceError(error)
            })
        return responsePromise.then((response) => {
            return Serializer.deserializeObject<AccountScreenResponse>(
                response.data,
                AccountScreenResponse,
            ) as AccountScreenResponse
        })
    }
    /**
     * Run fraud screening for one transaction
     * The Order Purchase API gives a Fraud recommendation for a transaction. A recommendation can be Accept, Reject, or Review. A transaction is marked as Review whenever there are insufficient signals to recommend Accept or Reject. These incidents are manually reviewed, and a corrected recommendation is made asynchronously. 
     * @param orderPurchaseScreenRequest 
     <OrderPurchaseScreenResponse>
     * @throws ExpediaGroupApiBadRequestError
     * @throws ExpediaGroupApiUnauthorizedError
     * @throws ExpediaGroupApiForbiddenError
     * @throws ExpediaGroupApiNotFoundError
     * @throws ExpediaGroupApiTooManyRequestsError
     * @throws ExpediaGroupApiInternalServerError
     * @throws ExpediaGroupApiBadGatewayError
     * @throws ExpediaGroupApiRetryableOrderPurchaseScreenFailure
     * @throws ExpediaGroupApiGatewayTimeoutError
     * @return Promise
     */
    screenOrder(
        orderPurchaseScreenRequest: OrderPurchaseScreenRequest,
    ): Promise<OrderPurchaseScreenResponse> {
        let responsePromise = this.axiosClient
            .request({
                method: 'POST',
                url: 'fraud-prevention/v2/order/purchase/screen',
                headers: FraudPreventionV2Client.createHeaders(),
                data: Serializer.serialize(orderPurchaseScreenRequest),
            })
            .catch((error) => {
                if (error instanceof ExpediaGroupError) throw error
                if (error.response?.status)
                    throw ErrorObjectMapper.process(error, 'screenOrder')
                throw new ExpediaGroupServiceError(error)
            })
        return responsePromise.then((response) => {
            return Serializer.deserializeObject<OrderPurchaseScreenResponse>(
                response.data,
                OrderPurchaseScreenResponse,
            ) as OrderPurchaseScreenResponse
        })
    }
}
