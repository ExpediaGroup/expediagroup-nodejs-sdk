[API](../../index.md) > [models](../index.md) > PaymentUpdate

# Class: PaymentUpdate

Payment related data that should be updated.

## Extends

- [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md)

## Constructors

### new PaymentUpdate(paymentUpdate)

> **new PaymentUpdate**(`paymentUpdate`): [`PaymentUpdate`](PaymentUpdate.md)

#### Parameters

▪ **paymentUpdate**: [`PaymentUpdateProperties`](../interfaces/PaymentUpdateProperties.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).[`constructor`](OrderPurchaseUpdateRequest.md#constructors)

#### Source

models/PaymentUpdate.ts:39

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `merchantOrderCode` | `string` | Reference code passed to acquiring bank at the time of payment. This code is the key ID that ties back to payments data at the payment level. | - | models/PaymentUpdate.ts:34 |
| `public` | `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).`riskId` | models/OrderPurchaseUpdateRequest.ts:32 |
| `readonly` | `type` | `"PAYMENT_UPDATE"` | - | - | models/PaymentUpdate.ts:37 |
