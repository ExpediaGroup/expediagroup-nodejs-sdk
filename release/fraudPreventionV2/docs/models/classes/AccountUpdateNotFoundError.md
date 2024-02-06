[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / AccountUpdateNotFoundError

# Class: AccountUpdateNotFoundError

Indicates that the API cannot find the resource that is either being requested or against which the operation is being performed.

## Constructors

### new AccountUpdateNotFoundError(accountUpdateNotFoundError)

> **new AccountUpdateNotFoundError**(`accountUpdateNotFoundError`): [`AccountUpdateNotFoundError`](AccountUpdateNotFoundError.md)

#### Parameters

• **accountUpdateNotFoundError**: [`AccountUpdateNotFoundErrorProperties`](../interfaces/AccountUpdateNotFoundErrorProperties.md)

#### Returns

[`AccountUpdateNotFoundError`](AccountUpdateNotFoundError.md)

#### Source

models/AccountUpdateNotFoundError.ts:39

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `code` | [`AccountUpdateNotFoundErrorCodeEnum`](../type-aliases/AccountUpdateNotFoundErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. |
