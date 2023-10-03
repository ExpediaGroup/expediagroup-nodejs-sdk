[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > ModelError

# Class: ModelError

The object used to describe an error, containing both human-readable and machine-readable information.

## Constructors

### constructor()

> **new ModelError**(`error`): [`ModelError`](class.ModelError.md)

#### Parameters

| Parameter | Type                                                                      |
| :-------- | :------------------------------------------------------------------------ |
| `error`   | [`ModelErrorProperties`](../interfaces/interface.ModelErrorProperties.md) |

#### Returns

[`ModelError`](class.ModelError.md)

#### Source

models/ModelError.ts:39

## Properties

| Property  | Type                                                                     | Description                                                                                                    |
| :-------- | :----------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `code`    | [`ModelErrorCodeEnum`](../type-aliases/type-alias.ModelErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string`                                                                 | A human-readable explanation of the error, specific to this error occurrence.                                  |
