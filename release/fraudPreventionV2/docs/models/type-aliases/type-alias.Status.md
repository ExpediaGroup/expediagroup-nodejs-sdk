[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Status

# Type alias: Status

> **Status**: `"COMPLETED"` \| `"CHANGE_COMPLETED"` \| `"CANCELLED"` \| `"FAILED"` \| `"CHANGE_FAILED"`

Defines the current state of the Order. Generally, OrderPurchaseScreenRequest is followed by an OrderUpdate reflecting the change in current order status. From `IN_PROGRESS` to any of below possible values: _ `COMPLETED` is used when the order has been processed fully. For example, inventory has been reserved, and the payment has been settled. _ `CHANGE_COMPLETED` is like `COMPLETED` but on a changed order. _ `CANCELLED` is used when the order is cancelled. This could be acustomer initiated cancel or based on Fraud recommendation. _ `FAILED` is used when order failed due to any errors on Partner system. This could be followed by another OrderUpdate call with any `order_status` once the order is recovered, abandoned, or cancelled. _ `CHANGE_FAILED` is like `FAILED` but on a changed order. _ _ `CHANGE_COMPLETED` or `CHANGE_FAILED` are applicable if OrderPurchaseScreen Fraud API was called via a change in order which is through `transaction.transaction_details.order_type` = `CHANGE` _ `COMPLETED` or `CANCELLED` order status indicates the completion of lifecycle on an order.

## Source

models/Status.ts:24
