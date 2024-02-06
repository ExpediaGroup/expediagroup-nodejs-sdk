[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / PaymentUpdate

# Class: PaymentUpdate

Payment related data that should be updated.

## Extends

- [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md)

## Constructors

### new PaymentUpdate(paymentUpdate)

> **new PaymentUpdate**(`paymentUpdate`): [`PaymentUpdate`](PaymentUpdate.md)

#### Parameters

• **paymentUpdate**: [`PaymentUpdateProperties`](../interfaces/PaymentUpdateProperties.md)

#### Returns

[`PaymentUpdate`](PaymentUpdate.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).[`constructor`](OrderPurchaseUpdateRequest.md#constructors)

#### Source

models/PaymentUpdate.ts:39

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `merchantOrderCode` | `public` | `string` | Reference code passed to acquiring bank at the time of payment. This code is the key ID that ties back to payments data at the payment level. | - |
| `riskId` | `public` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).`riskId` |
| `type` | `readonly` | `"PAYMENT_UPDATE"` | - | - |
