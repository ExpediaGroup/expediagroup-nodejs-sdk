[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / OrderPurchaseUpdateRequest

# Class: OrderPurchaseUpdateRequest

The `type` field value is used as a discriminator, with the following mapping: * `ORDER_UPDATE`: `OrderUpdate` * `CHARGEBACK_FEEDBACK`: `ChargebackFeedback` * `INSULT_FEEDBACK`: `InsultFeedback` * `REFUND_UPDATE`: `RefundUpdate` * `PAYMENT_UPDATE`: `PaymentUpdate`

## Extended By

- [`ChargebackFeedback`](ChargebackFeedback.md)
- [`InsultFeedback`](InsultFeedback.md)
- [`OrderUpdate`](OrderUpdate.md)
- [`PaymentUpdate`](PaymentUpdate.md)
- [`RefundUpdate`](RefundUpdate.md)

## Constructors

### new OrderPurchaseUpdateRequest(orderPurchaseUpdateRequest)

> **new OrderPurchaseUpdateRequest**(`orderPurchaseUpdateRequest`): [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md)

#### Parameters

▪ **orderPurchaseUpdateRequest**: [`OrderPurchaseUpdateRequestProperties`](../interfaces/OrderPurchaseUpdateRequestProperties.md)

#### Returns

[`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md)

#### Source

models/OrderPurchaseUpdateRequest.ts:34

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | models/OrderPurchaseUpdateRequest.ts:32 |
