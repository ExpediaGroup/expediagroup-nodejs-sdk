[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > OrderPurchaseScreenResponse

# Class: OrderPurchaseScreenResponse

## Constructors

### new OrderPurchaseScreenResponse(orderPurchaseScreenResponse)

> **new OrderPurchaseScreenResponse**(`orderPurchaseScreenResponse`): [`OrderPurchaseScreenResponse`](OrderPurchaseScreenResponse.md)

#### Parameters

▪ **orderPurchaseScreenResponse**: [`OrderPurchaseScreenResponseProperties`](../interfaces/OrderPurchaseScreenResponseProperties.md)

#### Source

models/OrderPurchaseScreenResponse.ts:34

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `decision?` | [`FraudDecision`](../type-aliases/FraudDecision.md) | - | models/OrderPurchaseScreenResponse.ts:32 |
| `riskId?` | `string` | Unique identifier assigned to the transaction by Expedia\'s Fraud Prevention Service. | models/OrderPurchaseScreenResponse.ts:30 |
