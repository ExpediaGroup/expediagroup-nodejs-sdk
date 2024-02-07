[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / OrderUpdate

# Class: OrderUpdate

Order related data that should be updated.

## Extends

- [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md)

## Constructors

### new OrderUpdate(orderUpdate)

> **new OrderUpdate**(`orderUpdate`): [`OrderUpdate`](OrderUpdate.md)

#### Parameters

• **orderUpdate**: [`OrderUpdateProperties`](../interfaces/OrderUpdateProperties.md)

#### Returns

[`OrderUpdate`](OrderUpdate.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).[`constructor`](OrderPurchaseUpdateRequest.md#constructors)

#### Source

models/OrderUpdate.ts:50

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `acquirerReferenceNumber?` | `public` | `string` | A unique number that tags a credit or debit card transaction when it goes from the merchant\'s bank through to the cardholder\'s bank. `acquirer_reference_number` is a required field only if `order_status` = `COMPLETED` Typically, merchants can get this number from their payment processors. This number is used when dealing with disputes/chargebacks on original transactions. | - |
| `cancellationReason?` | `public` | [`CancellationReason`](CancellationReason.md) | - | - |
| `orderStatus` | `public` | [`Status`](../type-aliases/Status.md) | - | - |
| `riskId` | `public` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).`riskId` |
| `type` | `readonly` | `"ORDER_UPDATE"` | - | - |
