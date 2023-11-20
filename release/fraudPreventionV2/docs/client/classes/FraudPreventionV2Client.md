[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [client](../index.md) / FraudPreventionV2Client

# Class: FraudPreventionV2Client

## Extends

- [`Client`](../../models/core/classes/Client.md)

## Constructors

### new FraudPreventionV2Client(configurations)

> **new FraudPreventionV2Client**(`configurations`): [`FraudPreventionV2Client`](FraudPreventionV2Client.md)

#### Parameters

▪ **configurations**: [`ClientConfigurations`](../../models/core/interfaces/ClientConfigurations.md)

#### Returns

[`FraudPreventionV2Client`](FraudPreventionV2Client.md)

#### Overrides

Client.constructor

#### Source

client/apis/FraudPreventionV2Client.ts:54

## Methods

### notifyWithAccountUpdate()

> **notifyWithAccountUpdate**(`accountUpdateRequest`, `transactionId`): `Promise`\<[`AccountUpdateResponse`](../../models/classes/AccountUpdateResponse.md)\>

Send an update as a result of an account screen transaction
The Account Update API is called when there is an account lifecycle transition such as a challenge outcome, account restoration, or remediation action completion. For example, if a user\&#39;s account is disabled, deleted, or restored, the Account Update API is called to notify Expedia Group about the change. The Account Update API is also called when a user responds to a login Multi-Factor Authentication based on a Fraud recommendation.

#### Parameters

▪ **accountUpdateRequest**: [`AccountUpdateRequest`](../../models/classes/AccountUpdateRequest.md)

An AccountUpdate request may be of one of the following types &#x60;MULTI_FACTOR_AUTHENTICATION_UPDATE&#x60;, &#x60;REMEDIATION_UPDATE&#x60;.

▪ **transactionId**: `string`= `undefined`

A unique ID to uniquely identify a request/response cycle (optional, defaults to a random generated UUID)`<AccountUpdateResponse>` 

#### Returns

`Promise`\<[`AccountUpdateResponse`](../../models/classes/AccountUpdateResponse.md)\>

Promise

#### Throws

ExpediaGroupApiAccountTakeoverBadRequestError

#### Throws

ExpediaGroupApiAccountTakeoverUnauthorizedError

#### Throws

ExpediaGroupApiForbiddenError

#### Throws

ExpediaGroupApiAccountUpdateNotFoundError

#### Throws

ExpediaGroupApiTooManyRequestsError

#### Throws

ExpediaGroupApiInternalServerError

#### Throws

ExpediaGroupApiBadGatewayError

#### Throws

ExpediaGroupApiServiceUnavailableError

#### Throws

ExpediaGroupApiGatewayTimeoutError

#### Source

client/apis/FraudPreventionV2Client.ts:86

***

### notifyWithOrderUpdate()

> **notifyWithOrderUpdate**(`orderPurchaseUpdateRequest`, `transactionId`): `Promise`\<[`OrderPurchaseUpdateResponse`](../../models/classes/OrderPurchaseUpdateResponse.md)\>

Send an update for a transaction
The Order Purchase Update API is called when the status of the order has changed.  For example, if the customer cancels the reservation, changes reservation in any way, or adds additional products or travelers to the reservation, the Order Purchase Update API is called to notify Expedia Group about the change.  The Order Purchase Update API is also called when the merchant cancels or changes an order based on a Fraud recommendation.

#### Parameters

▪ **orderPurchaseUpdateRequest**: [`OrderPurchaseUpdateRequest`](../../models/classes/OrderPurchaseUpdateRequest.md)

An OrderPurchaseUpdate request may be of one of the following types &#x60;ORDER_UPDATE&#x60;, &#x60;CHARGEBACK_FEEDBACK&#x60;, &#x60;INSULT_FEEDBACK&#x60;, &#x60;REFUND_UPDATE&#x60;, &#x60;PAYMENT_UPDATE&#x60;.

▪ **transactionId**: `string`= `undefined`

A unique ID to uniquely identify a request/response cycle (optional, defaults to a random generated UUID)`<OrderPurchaseUpdateResponse>` 

#### Returns

`Promise`\<[`OrderPurchaseUpdateResponse`](../../models/classes/OrderPurchaseUpdateResponse.md)\>

Promise

#### Throws

ExpediaGroupApiBadRequestError

#### Throws

ExpediaGroupApiUnauthorizedError

#### Throws

ExpediaGroupApiForbiddenError

#### Throws

ExpediaGroupApiOrderPurchaseUpdateNotFoundError

#### Throws

ExpediaGroupApiTooManyRequestsError

#### Throws

ExpediaGroupApiInternalServerError

#### Throws

ExpediaGroupApiBadGatewayError

#### Throws

ExpediaGroupApiRetryableOrderPurchaseUpdateFailure

#### Throws

ExpediaGroupApiGatewayTimeoutError

#### Source

client/apis/FraudPreventionV2Client.ts:129

***

### screenAccount()

> **screenAccount**(`accountScreenRequest`, `transactionId`): `Promise`\<[`AccountScreenResponse`](../../models/classes/AccountScreenResponse.md)\>

Run fraud screening for one transaction
The Account Screen API gives a Fraud recommendation for an account transaction. A recommendation can be ACCEPT, CHALLENGE, or REJECT. A transaction is marked as CHALLENGE whenever there are insufficient signals to recommend ACCEPT or REJECT. These CHALLENGE incidents are manually reviewed, and a corrected recommendation is made asynchronously.

#### Parameters

▪ **accountScreenRequest**: [`AccountScreenRequest`](../../models/classes/AccountScreenRequest.md)

▪ **transactionId**: `string`= `undefined`

A unique ID to uniquely identify a request/response cycle (optional, defaults to a random generated UUID)`<AccountScreenResponse>` 

#### Returns

`Promise`\<[`AccountScreenResponse`](../../models/classes/AccountScreenResponse.md)\>

Promise

#### Throws

ExpediaGroupApiAccountTakeoverBadRequestError

#### Throws

ExpediaGroupApiAccountTakeoverUnauthorizedError

#### Throws

ExpediaGroupApiForbiddenError

#### Throws

ExpediaGroupApiNotFoundError

#### Throws

ExpediaGroupApiTooManyRequestsError

#### Throws

ExpediaGroupApiInternalServerError

#### Throws

ExpediaGroupApiBadGatewayError

#### Throws

ExpediaGroupApiServiceUnavailableError

#### Throws

ExpediaGroupApiGatewayTimeoutError

#### Source

client/apis/FraudPreventionV2Client.ts:172

***

### screenOrder()

> **screenOrder**(`orderPurchaseScreenRequest`, `transactionId`): `Promise`\<[`OrderPurchaseScreenResponse`](../../models/classes/OrderPurchaseScreenResponse.md)\>

Run fraud screening for one transaction
The Order Purchase API gives a Fraud recommendation for a transaction. A recommendation can be Accept, Reject, or Review. A transaction is marked as Review whenever there are insufficient signals to recommend Accept or Reject. These incidents are manually reviewed, and a corrected recommendation is made asynchronously.

#### Parameters

▪ **orderPurchaseScreenRequest**: [`OrderPurchaseScreenRequest`](../../models/classes/OrderPurchaseScreenRequest.md)

▪ **transactionId**: `string`= `undefined`

A unique ID to uniquely identify a request/response cycle (optional, defaults to a random generated UUID)`<OrderPurchaseScreenResponse>` 

#### Returns

`Promise`\<[`OrderPurchaseScreenResponse`](../../models/classes/OrderPurchaseScreenResponse.md)\>

Promise

#### Throws

ExpediaGroupApiBadRequestError

#### Throws

ExpediaGroupApiUnauthorizedError

#### Throws

ExpediaGroupApiForbiddenError

#### Throws

ExpediaGroupApiNotFoundError

#### Throws

ExpediaGroupApiTooManyRequestsError

#### Throws

ExpediaGroupApiInternalServerError

#### Throws

ExpediaGroupApiBadGatewayError

#### Throws

ExpediaGroupApiRetryableOrderPurchaseScreenFailure

#### Throws

ExpediaGroupApiGatewayTimeoutError

#### Source

client/apis/FraudPreventionV2Client.ts:212
