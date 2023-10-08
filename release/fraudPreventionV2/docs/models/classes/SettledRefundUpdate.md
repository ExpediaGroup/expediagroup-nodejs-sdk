[API](../../index.md) > [models](../index.md) > SettledRefundUpdate

# Class: SettledRefundUpdate

Data related to the settled refund that should be updated.

## Extends

- [`RefundUpdate`](RefundUpdate.md)

## Constructors

### new SettledRefundUpdate(settledRefundUpdate)

> **new SettledRefundUpdate**(`settledRefundUpdate`): [`SettledRefundUpdate`](SettledRefundUpdate.md)

#### Parameters

▪ **settledRefundUpdate**: [`SettledRefundUpdateProperties`](../interfaces/SettledRefundUpdateProperties.md)

#### Overrides

[`RefundUpdate`](RefundUpdate.md).[`constructor`](RefundUpdate.md#constructors)

#### Source

models/SettledRefundUpdate.ts:41

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `refundDetails?` | [`SettledRefundUpdateDetails`](SettledRefundUpdateDetails.md) | - | - | models/SettledRefundUpdate.ts:36 |
| `readonly` | `refundStatus` | `"SETTLED"` | - | - | models/SettledRefundUpdate.ts:39 |
| `public` | `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`RefundUpdate`](RefundUpdate.md).`riskId` | models/OrderPurchaseUpdateRequest.ts:32 |
| `readonly` | `type` | `"REFUND_UPDATE"` | - | [`RefundUpdate`](RefundUpdate.md).`type` | models/RefundUpdate.ts:31 |
