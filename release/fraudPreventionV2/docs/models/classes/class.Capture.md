[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Capture

# Class: Capture

Capture operation on the payment. A capture operation represents a notification received usually from a 3rd party payment processor to indicate that the funds placed on hold will be captured and the funds transfer process will occur from the customer\'s funds to the merchant\'s funds.

## Constructors

### constructor()

> **new Capture**(`capture`): [`Capture`](class.Capture.md)

#### Parameters

| Parameter | Type                                                                |
| :-------- | :------------------------------------------------------------------ |
| `capture` | [`CaptureProperties`](../interfaces/interface.CaptureProperties.md) |

#### Returns

[`Capture`](class.Capture.md)

#### Source

models/Capture.ts:47

## Properties

| Property   | Type                                        |
| :--------- | :------------------------------------------ |
| `amount`?  | [`Amount`](class.Amount.md)                 |
| `id`?      | `string`                                    |
| `outcome`? | [`PaymentOutcome`](class.PaymentOutcome.md) |
