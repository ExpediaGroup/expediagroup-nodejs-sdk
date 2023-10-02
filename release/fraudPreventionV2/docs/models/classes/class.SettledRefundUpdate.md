[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > SettledRefundUpdate

# Class: SettledRefundUpdate

Data related to the settled refund that should be updated.

## Extends

-   [`RefundUpdate`](class.RefundUpdate.md)

## Constructors

### constructor()

> **new SettledRefundUpdate**(`settledRefundUpdate`): [`SettledRefundUpdate`](class.SettledRefundUpdate.md)

#### Parameters

| Parameter             | Type                                                                                        |
| :-------------------- | :------------------------------------------------------------------------------------------ |
| `settledRefundUpdate` | [`SettledRefundUpdateProperties`](../interfaces/interface.SettledRefundUpdateProperties.md) |

#### Returns

[`SettledRefundUpdate`](class.SettledRefundUpdate.md)

#### Overrides

[`RefundUpdate`](class.RefundUpdate.md).[`constructor`](class.RefundUpdate.md#constructor)

#### Source

models/SettledRefundUpdate.ts:41

## Properties

| Property                  | Type                                                                | Description                                                                                         |
| :------------------------ | :------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------- |
| `refundDetails`?          | [`SettledRefundUpdateDetails`](class.SettledRefundUpdateDetails.md) | -                                                                                                   |
| `readonly` `refundStatus` | `"SETTLED"`                                                         | -                                                                                                   |
| `riskId`                  | `string`                                                            | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. |
| `readonly` `type`         | `"REFUND_UPDATE"`                                                   | -                                                                                                   |
