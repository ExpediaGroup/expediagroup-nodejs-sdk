[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountTakeoverError

# Class: AccountTakeoverError

The object used to describe an error, containing both human-readable and machine-readable information.

## Constructors

### new AccountTakeoverError(accountTakeoverError)

> **new AccountTakeoverError**(`accountTakeoverError`): [`AccountTakeoverError`](AccountTakeoverError.md)

#### Parameters

▪ **accountTakeoverError**: [`AccountTakeoverErrorProperties`](../interfaces/AccountTakeoverErrorProperties.md)

#### Source

models/AccountTakeoverError.ts:39

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `code` | [`AccountTakeoverErrorCodeEnum`](../type-aliases/AccountTakeoverErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. | models/AccountTakeoverError.ts:32 |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. | models/AccountTakeoverError.ts:37 |
