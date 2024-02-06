[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / IssuedRefundUpdate

# Class: IssuedRefundUpdate

Data related to the issued refund that should be updated.

## Extends

- [`RefundUpdate`](RefundUpdate.md)

## Constructors

### new IssuedRefundUpdate(issuedRefundUpdate)

> **new IssuedRefundUpdate**(`issuedRefundUpdate`): [`IssuedRefundUpdate`](IssuedRefundUpdate.md)

#### Parameters

• **issuedRefundUpdate**: [`IssuedRefundUpdateProperties`](../interfaces/IssuedRefundUpdateProperties.md)

#### Returns

[`IssuedRefundUpdate`](IssuedRefundUpdate.md)

#### Overrides

[`RefundUpdate`](RefundUpdate.md).[`constructor`](RefundUpdate.md#constructors)

#### Source

models/IssuedRefundUpdate.ts:41

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `refundDetails?` | `public` | [`IssuedRefundUpdateDetails`](IssuedRefundUpdateDetails.md) | - | - |
| `refundStatus` | `readonly` | `"ISSUED"` | - | - |
| `riskId` | `public` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`RefundUpdate`](RefundUpdate.md).`riskId` |
| `type` | `readonly` | `"REFUND_UPDATE"` | - | [`RefundUpdate`](RefundUpdate.md).`type` |
