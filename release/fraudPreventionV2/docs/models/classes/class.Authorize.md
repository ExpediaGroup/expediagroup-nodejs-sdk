[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Authorize

# Class: Authorize

Authorize operation on the payment. An authorize operation represents placing the funds on hold with the specified form of payment.

## Constructors

### constructor()

> **new Authorize**(`authorize`): [`Authorize`](class.Authorize.md)

#### Parameters

| Parameter   | Type                                                                    |
| :---------- | :---------------------------------------------------------------------- |
| `authorize` | [`AuthorizeProperties`](../interfaces/interface.AuthorizeProperties.md) |

#### Returns

[`Authorize`](class.Authorize.md)

#### Source

models/Authorize.ts:47

## Properties

| Property   | Type                                        |
| :--------- | :------------------------------------------ |
| `amount`?  | [`Amount`](class.Amount.md)                 |
| `id`?      | `string`                                    |
| `outcome`? | [`PaymentOutcome`](class.PaymentOutcome.md) |
