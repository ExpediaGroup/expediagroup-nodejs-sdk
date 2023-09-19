[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > BadRequestErrorAllOfCauses

# Class: BadRequestErrorAllOfCauses

## Constructors

### constructor()

> **new BadRequestErrorAllOfCauses**(`badRequestErrorAllOfCauses`): [`BadRequestErrorAllOfCauses`](class.BadRequestErrorAllOfCauses.md)

#### Parameters

| Parameter                    | Type                                                                                                      |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------- |
| `badRequestErrorAllOfCauses` | [`BadRequestErrorAllOfCausesProperties`](../interfaces/interface.BadRequestErrorAllOfCausesProperties.md) |

#### Returns

[`BadRequestErrorAllOfCauses`](class.BadRequestErrorAllOfCauses.md)

#### Source

models/BadRequestErrorAllOfCauses.ts:35

## Properties

| Property   | Type                                                                                                     | Description                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| `code`?    | [`BadRequestErrorAllOfCausesCodeEnum`](../type-aliases/type-alias.BadRequestErrorAllOfCausesCodeEnum.md) | -                                                                                     |
| `field`?   | `string`                                                                                                 | A JSON Path expression indicating which field, in the request body, caused the error. |
| `message`? | `string`                                                                                                 | -                                                                                     |
