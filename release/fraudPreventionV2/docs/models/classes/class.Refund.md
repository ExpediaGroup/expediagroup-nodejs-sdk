[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Refund

# Class: Refund

Refund operation on the payment. A refund operation represents the intent to refund a previous charge.

## Constructors

### constructor()

> **new Refund**(`refund`): [`Refund`](class.Refund.md)

#### Parameters

| Parameter | Type                                                              |
| :-------- | :---------------------------------------------------------------- |
| `refund`  | [`RefundProperties`](../interfaces/interface.RefundProperties.md) |

#### Returns

[`Refund`](class.Refund.md)

#### Source

models/Refund.ts:47

## Properties

| Property   | Type                                        |
| :--------- | :------------------------------------------ |
| `amount`?  | [`Amount`](class.Amount.md)                 |
| `id`?      | `string`                                    |
| `outcome`? | [`PaymentOutcome`](class.PaymentOutcome.md) |
