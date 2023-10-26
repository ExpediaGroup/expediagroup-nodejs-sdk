[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountTakeoverUnauthorizedError

# Class: AccountTakeoverUnauthorizedError

Indicates that the token sent in the \'Authorization\' header is either invalid or missing. Please check the value in the token field along with the token expiration time before retrying.

## Constructors

### new AccountTakeoverUnauthorizedError(accountTakeoverUnauthorizedError)

> **new AccountTakeoverUnauthorizedError**(`accountTakeoverUnauthorizedError`): [`AccountTakeoverUnauthorizedError`](AccountTakeoverUnauthorizedError.md)

#### Parameters

▪ **accountTakeoverUnauthorizedError**: [`AccountTakeoverUnauthorizedErrorProperties`](../interfaces/AccountTakeoverUnauthorizedErrorProperties.md)

#### Source

models/AccountTakeoverUnauthorizedError.ts:39

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `code` | [`AccountTakeoverUnauthorizedErrorCodeEnum`](../type-aliases/AccountTakeoverUnauthorizedErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. | models/AccountTakeoverUnauthorizedError.ts:32 |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. | models/AccountTakeoverUnauthorizedError.ts:37 |
