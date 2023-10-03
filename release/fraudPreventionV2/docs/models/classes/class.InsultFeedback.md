[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > InsultFeedback

# Class: InsultFeedback

Feedback from EG external partners regarding a false positive recommendation that from Fraud Prevention system gave for their customer.

## Extends

-   [`OrderPurchaseUpdateRequest`](class.OrderPurchaseUpdateRequest.md)

## Constructors

### constructor()

> **new InsultFeedback**(`insultFeedback`): [`InsultFeedback`](class.InsultFeedback.md)

#### Parameters

| Parameter        | Type                                                                              |
| :--------------- | :-------------------------------------------------------------------------------- |
| `insultFeedback` | [`InsultFeedbackProperties`](../interfaces/interface.InsultFeedbackProperties.md) |

#### Returns

[`InsultFeedback`](class.InsultFeedback.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](class.OrderPurchaseUpdateRequest.md).[`constructor`](class.OrderPurchaseUpdateRequest.md#constructor)

#### Source

models/InsultFeedback.ts:41

## Properties

| Property          | Type                                    | Description                                                                                         |
| :---------------- | :-------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| `insultDetail`?   | [`InsultDetail`](class.InsultDetail.md) | -                                                                                                   |
| `riskId`          | `string`                                | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. |
| `readonly` `type` | `"INSULT_FEEDBACK"`                     | -                                                                                                   |
