[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / BadRequestErrorAllOfCauses

# Class: BadRequestErrorAllOfCauses

## Constructors

### new BadRequestErrorAllOfCauses(badRequestErrorAllOfCauses)

> **new BadRequestErrorAllOfCauses**(`badRequestErrorAllOfCauses`): [`BadRequestErrorAllOfCauses`](BadRequestErrorAllOfCauses.md)

#### Parameters

• **badRequestErrorAllOfCauses**: [`BadRequestErrorAllOfCausesProperties`](../interfaces/BadRequestErrorAllOfCausesProperties.md)

#### Returns

[`BadRequestErrorAllOfCauses`](BadRequestErrorAllOfCauses.md)

#### Source

models/BadRequestErrorAllOfCauses.ts:35

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `code?` | [`BadRequestErrorAllOfCausesCodeEnum`](../type-aliases/BadRequestErrorAllOfCausesCodeEnum.md) | - |
| `field?` | `string` | A JSON Path expression indicating which field, in the request body, caused the error. |
| `message?` | `string` | - |
