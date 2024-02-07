[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / AccountTakeoverBadRequestError

# Class: AccountTakeoverBadRequestError

Indicates that a bad request occurred. Typically it is an invalid parameter.

## Constructors

### new AccountTakeoverBadRequestError(accountTakeoverBadRequestError)

> **new AccountTakeoverBadRequestError**(`accountTakeoverBadRequestError`): [`AccountTakeoverBadRequestError`](AccountTakeoverBadRequestError.md)

#### Parameters

• **accountTakeoverBadRequestError**: [`AccountTakeoverBadRequestErrorProperties`](../interfaces/AccountTakeoverBadRequestErrorProperties.md)

#### Returns

[`AccountTakeoverBadRequestError`](AccountTakeoverBadRequestError.md)

#### Source

models/AccountTakeoverBadRequestError.ts:48

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `causes?` | [`AccountTakeoverBadRequestErrorAllOfCauses`](AccountTakeoverBadRequestErrorAllOfCauses.md)[] | - |
| `code` | [`AccountTakeoverBadRequestErrorCodeEnum`](../type-aliases/AccountTakeoverBadRequestErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. |
