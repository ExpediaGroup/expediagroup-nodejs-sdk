[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / ModelError

# Class: ModelError

The object used to describe an error, containing both human-readable and machine-readable information.

## Constructors

### new ModelError(error)

> **new ModelError**(`error`): [`ModelError`](ModelError.md)

#### Parameters

• **error**: [`ModelErrorProperties`](../interfaces/ModelErrorProperties.md)

#### Returns

[`ModelError`](ModelError.md)

#### Source

models/ModelError.ts:39

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `code` | [`ModelErrorCodeEnum`](../type-aliases/ModelErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. |
