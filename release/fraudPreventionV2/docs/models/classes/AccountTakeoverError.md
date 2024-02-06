[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / AccountTakeoverError

# Class: AccountTakeoverError

The object used to describe an error, containing both human-readable and machine-readable information.

## Constructors

### new AccountTakeoverError(accountTakeoverError)

> **new AccountTakeoverError**(`accountTakeoverError`): [`AccountTakeoverError`](AccountTakeoverError.md)

#### Parameters

• **accountTakeoverError**: [`AccountTakeoverErrorProperties`](../interfaces/AccountTakeoverErrorProperties.md)

#### Returns

[`AccountTakeoverError`](AccountTakeoverError.md)

#### Source

models/AccountTakeoverError.ts:39

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `code` | [`AccountTakeoverErrorCodeEnum`](../type-aliases/AccountTakeoverErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. |
