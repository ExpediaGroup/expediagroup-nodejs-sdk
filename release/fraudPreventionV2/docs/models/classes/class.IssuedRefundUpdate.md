[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > IssuedRefundUpdate

# Class: IssuedRefundUpdate

Data related to the issued refund that should be updated.

## Extends

-   [`RefundUpdate`](class.RefundUpdate.md)

## Constructors

### constructor()

> **new IssuedRefundUpdate**(`issuedRefundUpdate`): [`IssuedRefundUpdate`](class.IssuedRefundUpdate.md)

#### Parameters

| Parameter            | Type                                                                                      |
| :------------------- | :---------------------------------------------------------------------------------------- |
| `issuedRefundUpdate` | [`IssuedRefundUpdateProperties`](../interfaces/interface.IssuedRefundUpdateProperties.md) |

#### Returns

[`IssuedRefundUpdate`](class.IssuedRefundUpdate.md)

#### Overrides

[`RefundUpdate`](class.RefundUpdate.md).[`constructor`](class.RefundUpdate.md#constructor)

#### Source

models/IssuedRefundUpdate.ts:41

## Properties

| Property                  | Type                                                              | Description                                                                                         |
| :------------------------ | :---------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| `refundDetails`?          | [`IssuedRefundUpdateDetails`](class.IssuedRefundUpdateDetails.md) | -                                                                                                   |
| `readonly` `refundStatus` | `"ISSUED"`                                                        | -                                                                                                   |
| `riskId`                  | `string`                                                          | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. |
| `readonly` `type`         | `"REFUND_UPDATE"`                                                 | -                                                                                                   |
