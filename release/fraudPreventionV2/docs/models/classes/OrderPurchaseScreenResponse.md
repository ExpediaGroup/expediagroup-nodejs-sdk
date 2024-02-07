[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / OrderPurchaseScreenResponse

# Class: OrderPurchaseScreenResponse

## Constructors

### new OrderPurchaseScreenResponse(orderPurchaseScreenResponse)

> **new OrderPurchaseScreenResponse**(`orderPurchaseScreenResponse`): [`OrderPurchaseScreenResponse`](OrderPurchaseScreenResponse.md)

#### Parameters

• **orderPurchaseScreenResponse**: [`OrderPurchaseScreenResponseProperties`](../interfaces/OrderPurchaseScreenResponseProperties.md)

#### Returns

[`OrderPurchaseScreenResponse`](OrderPurchaseScreenResponse.md)

#### Source

models/OrderPurchaseScreenResponse.ts:34

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `decision?` | [`FraudDecision`](../type-aliases/FraudDecision.md) | - |
| `riskId?` | `string` | Unique identifier assigned to the transaction by Expedia\'s Fraud Prevention Service. |
