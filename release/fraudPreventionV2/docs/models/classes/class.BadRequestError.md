[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > BadRequestError

# Class: BadRequestError

Indicates that a bad request occurred. Typically it is an invalid parameter.

## Constructors

### constructor()

> **new BadRequestError**(`badRequestError`): [`BadRequestError`](class.BadRequestError.md)

#### Parameters

| Parameter         | Type                                                                                |
| :---------------- | :---------------------------------------------------------------------------------- |
| `badRequestError` | [`BadRequestErrorProperties`](../interfaces/interface.BadRequestErrorProperties.md) |

#### Returns

[`BadRequestError`](class.BadRequestError.md)

#### Source

models/BadRequestError.ts:47

## Properties

| Property  | Type                                                                               | Description                                                                                                    |
| :-------- | :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `causes`? | [`BadRequestErrorAllOfCauses`](class.BadRequestErrorAllOfCauses.md)[]              | -                                                                                                              |
| `code`    | [`BadRequestErrorCodeEnum`](../type-aliases/type-alias.BadRequestErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string`                                                                           | A human-readable explanation of the error, specific to this error occurrence.                                  |
