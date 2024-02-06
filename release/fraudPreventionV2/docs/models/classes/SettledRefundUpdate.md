[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / SettledRefundUpdate

# Class: SettledRefundUpdate

Data related to the settled refund that should be updated.

## Extends

- [`RefundUpdate`](RefundUpdate.md)

## Constructors

### new SettledRefundUpdate(settledRefundUpdate)

> **new SettledRefundUpdate**(`settledRefundUpdate`): [`SettledRefundUpdate`](SettledRefundUpdate.md)

#### Parameters

• **settledRefundUpdate**: [`SettledRefundUpdateProperties`](../interfaces/SettledRefundUpdateProperties.md)

#### Returns

[`SettledRefundUpdate`](SettledRefundUpdate.md)

#### Overrides

[`RefundUpdate`](RefundUpdate.md).[`constructor`](RefundUpdate.md#constructors)

#### Source

models/SettledRefundUpdate.ts:41

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `refundDetails?` | `public` | [`SettledRefundUpdateDetails`](SettledRefundUpdateDetails.md) | - | - |
| `refundStatus` | `readonly` | `"SETTLED"` | - | - |
| `riskId` | `public` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`RefundUpdate`](RefundUpdate.md).`riskId` |
| `type` | `readonly` | `"REFUND_UPDATE"` | - | [`RefundUpdate`](RefundUpdate.md).`type` |
