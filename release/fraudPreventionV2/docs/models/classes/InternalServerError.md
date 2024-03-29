[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / InternalServerError

# Class: InternalServerError

Indicates that the API encountered an unexpected condition that prevented it from fulfilling the request. Sometimes used as a generic catch-allerror type when no other error types can be used. Retrying the same request will usually result in the same error. Please reach out to support team as next step for this error resolution.

## Constructors

### new InternalServerError(internalServerError)

> **new InternalServerError**(`internalServerError`): [`InternalServerError`](InternalServerError.md)

#### Parameters

• **internalServerError**: [`InternalServerErrorProperties`](../interfaces/InternalServerErrorProperties.md)

#### Returns

[`InternalServerError`](InternalServerError.md)

#### Source

models/InternalServerError.ts:39

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `code` | [`InternalServerErrorCodeEnum`](../type-aliases/InternalServerErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. |
