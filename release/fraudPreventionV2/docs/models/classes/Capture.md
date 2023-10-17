[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Capture

# Class: Capture

Capture operation on the payment. A capture operation represents a notification received usually from a 3rd party payment processor to indicate that the funds placed on hold will be captured and the funds transfer process will occur from the customer\'s funds to the merchant\'s funds.

## Constructors

### new Capture(capture)

> **new Capture**(`capture`): [`Capture`](Capture.md)

#### Parameters

▪ **capture**: [`CaptureProperties`](../interfaces/CaptureProperties.md)

#### Source

models/Capture.ts:47

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `amount?` | [`Amount`](Amount.md) | - | models/Capture.ts:40 |
| `id?` | `string` | - | models/Capture.ts:35 |
| `outcome?` | [`PaymentOutcome`](PaymentOutcome.md) | - | models/Capture.ts:45 |
