[API](../../index.md) > [models](../index.md) > OrderUpdate

# Class: OrderUpdate

Order related data that should be updated.

## Extends

- [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md)

## Constructors

### new OrderUpdate(orderUpdate)

> **new OrderUpdate**(`orderUpdate`): [`OrderUpdate`](OrderUpdate.md)

#### Parameters

▪ **orderUpdate**: [`OrderUpdateProperties`](../interfaces/OrderUpdateProperties.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).[`constructor`](OrderPurchaseUpdateRequest.md#constructors)

#### Source

models/OrderUpdate.ts:50

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `acquirerReferenceNumber?` | `string` | A unique number that tags a credit or debit card transaction when it goes from the merchant\'s bank through to the cardholder\'s bank. `acquirer_reference_number` is a required field only if `order_status` = `COMPLETED` Typically, merchants can get this number from their payment processors. This number is used when dealing with disputes/chargebacks on original transactions. | - | models/OrderUpdate.ts:40 |
| `public` | `cancellationReason?` | [`CancellationReason`](CancellationReason.md) | - | - | models/OrderUpdate.ts:45 |
| `public` | `orderStatus` | [`Status`](../type-aliases/Status.md) | - | - | models/OrderUpdate.ts:35 |
| `public` | `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).`riskId` | models/OrderPurchaseUpdateRequest.ts:32 |
| `readonly` | `type` | `"ORDER_UPDATE"` | - | - | models/OrderUpdate.ts:48 |
