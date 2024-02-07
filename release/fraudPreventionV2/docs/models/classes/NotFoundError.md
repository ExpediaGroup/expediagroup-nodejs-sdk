[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / NotFoundError

# Class: NotFoundError

Indicates that the API cannot find the resource that is either being requested or against which the operation is being performed. Please check the request again to make sure that the request is valid.

## Constructors

### new NotFoundError(notFoundError)

> **new NotFoundError**(`notFoundError`): [`NotFoundError`](NotFoundError.md)

#### Parameters

• **notFoundError**: [`NotFoundErrorProperties`](../interfaces/NotFoundErrorProperties.md)

#### Returns

[`NotFoundError`](NotFoundError.md)

#### Source

models/NotFoundError.ts:39

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `code` | [`NotFoundErrorCodeEnum`](../type-aliases/NotFoundErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. |
