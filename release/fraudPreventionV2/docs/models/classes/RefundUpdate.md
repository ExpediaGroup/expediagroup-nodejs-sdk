[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / RefundUpdate

# Class: RefundUpdate

Refund related data. Update should be sent when refund is issued or settled. Amounts should include all fees and taxes.

## Extends

- [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md)

## Constructors

### new RefundUpdate(refundUpdate)

> **new RefundUpdate**(`refundUpdate`): [`RefundUpdate`](RefundUpdate.md)

#### Parameters

• **refundUpdate**: [`RefundUpdateProperties`](../interfaces/RefundUpdateProperties.md)

#### Returns

[`RefundUpdate`](RefundUpdate.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).[`constructor`](OrderPurchaseUpdateRequest.md#constructors)

#### Source

models/RefundUpdate.ts:33

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `riskId` | `public` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).`riskId` |
| `type` | `readonly` | `"REFUND_UPDATE"` | - | - |
