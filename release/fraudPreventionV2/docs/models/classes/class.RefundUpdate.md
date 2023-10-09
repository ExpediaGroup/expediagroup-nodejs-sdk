[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > RefundUpdate

# Class: RefundUpdate

Refund related data. Update should be sent when refund is issued or settled. Amounts should include all fees and taxes.

## Extends

-   [`OrderPurchaseUpdateRequest`](class.OrderPurchaseUpdateRequest.md)

## Constructors

### constructor()

> **new RefundUpdate**(`refundUpdate`): [`RefundUpdate`](class.RefundUpdate.md)

#### Parameters

| Parameter      | Type                                                                          |
| :------------- | :---------------------------------------------------------------------------- |
| `refundUpdate` | [`RefundUpdateProperties`](../interfaces/interface.RefundUpdateProperties.md) |

#### Returns

[`RefundUpdate`](class.RefundUpdate.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](class.OrderPurchaseUpdateRequest.md).[`constructor`](class.OrderPurchaseUpdateRequest.md#constructor)

#### Source

models/RefundUpdate.ts:33

## Properties

| Property          | Type              | Description                                                                                         |
| :---------------- | :---------------- | :-------------------------------------------------------------------------------------------------- |
| `riskId`          | `string`          | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. |
| `readonly` `type` | `"REFUND_UPDATE"` | -                                                                                                   |
