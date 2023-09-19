[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Operations

# Class: Operations

All operations related to a payment throughout its lifespan. An operation represents an event external to Fraud Prevention Service that specifies to perform a payment operation. Possible operation types include: - `Verify` - `Authorize` - `AuthorizeReversal` - `Capture` - `Refund`

## Constructors

### constructor()

> **new Operations**(`operations`): [`Operations`](class.Operations.md)

#### Parameters

| Parameter    | Type                                                                      |
| :----------- | :------------------------------------------------------------------------ |
| `operations` | [`OperationsProperties`](../interfaces/interface.OperationsProperties.md) |

#### Returns

[`Operations`](class.Operations.md)

#### Source

models/Operations.ts:68

## Properties

| Property             | Type                                              |
| :------------------- | :------------------------------------------------ |
| `authorize`?         | [`Authorize`](class.Authorize.md)                 |
| `authorizeReversal`? | [`AuthorizeReversal`](class.AuthorizeReversal.md) |
| `capture`?           | [`Capture`](class.Capture.md)                     |
| `refunds`?           | [`Refund`](class.Refund.md)[]                     |
| `verify`?            | [`Verify`](class.Verify.md)                       |
