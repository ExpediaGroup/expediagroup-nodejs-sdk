[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > BadRequestError

# Class: BadRequestError

Indicates that a bad request occurred. Typically it is an invalid parameter.

## Constructors

### new BadRequestError(badRequestError)

> **new BadRequestError**(`badRequestError`): [`BadRequestError`](BadRequestError.md)

#### Parameters

▪ **badRequestError**: [`BadRequestErrorProperties`](../interfaces/BadRequestErrorProperties.md)

#### Source

models/BadRequestError.ts:47

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `causes?` | [`BadRequestErrorAllOfCauses`](BadRequestErrorAllOfCauses.md)[] | - | models/BadRequestError.ts:45 |
| `code` | [`BadRequestErrorCodeEnum`](../type-aliases/BadRequestErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. | models/BadRequestError.ts:35 |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. | models/BadRequestError.ts:40 |
