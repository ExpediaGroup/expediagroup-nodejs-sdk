[API](../../index.md) > [models](../index.md) > RefundUpdate

# Class: RefundUpdate

Refund related data. Update should be sent when refund is issued or settled. Amounts should include all fees and taxes.

## Extends

- [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md)

## Constructors

### new RefundUpdate(refundUpdate)

> **new RefundUpdate**(`refundUpdate`): [`RefundUpdate`](RefundUpdate.md)

#### Parameters

▪ **refundUpdate**: [`RefundUpdateProperties`](../interfaces/RefundUpdateProperties.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).[`constructor`](OrderPurchaseUpdateRequest.md#constructors)

#### Source

models/RefundUpdate.ts:33

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).`riskId` | models/OrderPurchaseUpdateRequest.ts:32 |
| `readonly` | `type` | `"REFUND_UPDATE"` | - | - | models/RefundUpdate.ts:31 |
