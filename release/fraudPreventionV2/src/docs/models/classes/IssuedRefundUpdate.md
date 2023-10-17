[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > IssuedRefundUpdate

# Class: IssuedRefundUpdate

Data related to the issued refund that should be updated.

## Extends

- [`RefundUpdate`](RefundUpdate.md)

## Constructors

### new IssuedRefundUpdate(issuedRefundUpdate)

> **new IssuedRefundUpdate**(`issuedRefundUpdate`): [`IssuedRefundUpdate`](IssuedRefundUpdate.md)

#### Parameters

▪ **issuedRefundUpdate**: [`IssuedRefundUpdateProperties`](../interfaces/IssuedRefundUpdateProperties.md)

#### Overrides

[`RefundUpdate`](RefundUpdate.md).[`constructor`](RefundUpdate.md#constructors)

#### Source

models/IssuedRefundUpdate.ts:41

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `refundDetails?` | [`IssuedRefundUpdateDetails`](IssuedRefundUpdateDetails.md) | - | - | models/IssuedRefundUpdate.ts:36 |
| `readonly` | `refundStatus` | `"ISSUED"` | - | - | models/IssuedRefundUpdate.ts:39 |
| `public` | `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`RefundUpdate`](RefundUpdate.md).`riskId` | models/OrderPurchaseUpdateRequest.ts:32 |
| `readonly` | `type` | `"REFUND_UPDATE"` | - | [`RefundUpdate`](RefundUpdate.md).`type` | models/RefundUpdate.ts:31 |
