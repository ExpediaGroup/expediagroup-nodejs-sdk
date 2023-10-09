[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Verify

# Class: Verify

A verify operation represents the intent to verify the payment associated with this transaction.

## Constructors

### constructor()

> **new Verify**(`verify`): [`Verify`](class.Verify.md)

#### Parameters

| Parameter | Type                                                              |
| :-------- | :---------------------------------------------------------------- |
| `verify`  | [`VerifyProperties`](../interfaces/interface.VerifyProperties.md) |

#### Returns

[`Verify`](class.Verify.md)

#### Source

models/Verify.ts:50

## Properties

| Property   | Type                                                                 |
| :--------- | :------------------------------------------------------------------- |
| `amount`?  | [`Amount`](class.Amount.md)                                          |
| `id`?      | `string`                                                             |
| `outcome`? | [`PaymentOutcome`](class.PaymentOutcome.md)                          |
| `type`?    | [`VerificationType`](../type-aliases/type-alias.VerificationType.md) |
