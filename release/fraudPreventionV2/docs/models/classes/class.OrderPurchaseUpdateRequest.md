[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > OrderPurchaseUpdateRequest

# Class: OrderPurchaseUpdateRequest

The `type` field value is used as a discriminator, with the following mapping: _ `ORDER_UPDATE`: `OrderUpdate` _ `CHARGEBACK_FEEDBACK`: `ChargebackFeedback` _ `INSULT_FEEDBACK`: `InsultFeedback` _ `REFUND_UPDATE`: `RefundUpdate` \* `PAYMENT_UPDATE`: `PaymentUpdate`

## Extended By

-   [`ChargebackFeedback`](class.ChargebackFeedback.md)
-   [`InsultFeedback`](class.InsultFeedback.md)
-   [`OrderUpdate`](class.OrderUpdate.md)
-   [`PaymentUpdate`](class.PaymentUpdate.md)
-   [`RefundUpdate`](class.RefundUpdate.md)

## Constructors

### constructor()

> **new OrderPurchaseUpdateRequest**(`orderPurchaseUpdateRequest`): [`OrderPurchaseUpdateRequest`](class.OrderPurchaseUpdateRequest.md)

#### Parameters

| Parameter                    | Type                                                                                                      |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------- |
| `orderPurchaseUpdateRequest` | [`OrderPurchaseUpdateRequestProperties`](../interfaces/interface.OrderPurchaseUpdateRequestProperties.md) |

#### Returns

[`OrderPurchaseUpdateRequest`](class.OrderPurchaseUpdateRequest.md)

#### Source

models/OrderPurchaseUpdateRequest.ts:34

## Properties

| Property | Type     | Description                                                                                         |
| :------- | :------- | :-------------------------------------------------------------------------------------------------- |
| `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. |
