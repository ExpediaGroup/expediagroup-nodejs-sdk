[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / Capture

# Class: Capture

Capture operation on the payment. A capture operation represents a notification received usually from a 3rd party payment processor to indicate that the funds placed on hold will be captured and the funds transfer process will occur from the customer\'s funds to the merchant\'s funds.

## Constructors

### new Capture(capture)

> **new Capture**(`capture`): [`Capture`](Capture.md)

#### Parameters

• **capture**: [`CaptureProperties`](../interfaces/CaptureProperties.md)

#### Returns

[`Capture`](Capture.md)

#### Source

models/Capture.ts:47

## Properties

| Property | Type |
| :------ | :------ |
| `amount?` | [`Amount`](Amount.md) |
| `id?` | `string` |
| `outcome?` | [`PaymentOutcome`](PaymentOutcome.md) |
