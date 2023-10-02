[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > OrderPurchaseScreenResponse

# Class: OrderPurchaseScreenResponse

## Constructors

### constructor()

> **new OrderPurchaseScreenResponse**(`orderPurchaseScreenResponse`): [`OrderPurchaseScreenResponse`](class.OrderPurchaseScreenResponse.md)

#### Parameters

| Parameter                     | Type                                                                                                        |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------- |
| `orderPurchaseScreenResponse` | [`OrderPurchaseScreenResponseProperties`](../interfaces/interface.OrderPurchaseScreenResponseProperties.md) |

#### Returns

[`OrderPurchaseScreenResponse`](class.OrderPurchaseScreenResponse.md)

#### Source

models/OrderPurchaseScreenResponse.ts:34

## Properties

| Property    | Type                                                           | Description                                                                           |
| :---------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| `decision`? | [`FraudDecision`](../type-aliases/type-alias.FraudDecision.md) | -                                                                                     |
| `riskId`?   | `string`                                                       | Unique identifier assigned to the transaction by Expedia\'s Fraud Prevention Service. |
