[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > InsultFeedback

# Class: InsultFeedback

Feedback from EG external partners regarding a false positive recommendation that from Fraud Prevention system gave for their customer.

## Extends

- [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md)

## Constructors

### new InsultFeedback(insultFeedback)

> **new InsultFeedback**(`insultFeedback`): [`InsultFeedback`](InsultFeedback.md)

#### Parameters

▪ **insultFeedback**: [`InsultFeedbackProperties`](../interfaces/InsultFeedbackProperties.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).[`constructor`](OrderPurchaseUpdateRequest.md#constructors)

#### Source

models/InsultFeedback.ts:41

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `insultDetail?` | [`InsultDetail`](InsultDetail.md) | - | - | models/InsultFeedback.ts:36 |
| `public` | `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).`riskId` | models/OrderPurchaseUpdateRequest.ts:32 |
| `readonly` | `type` | `"INSULT_FEEDBACK"` | - | - | models/InsultFeedback.ts:39 |
