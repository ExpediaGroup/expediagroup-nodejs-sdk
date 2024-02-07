[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / InsultFeedback

# Class: InsultFeedback

Feedback from EG external partners regarding a false positive recommendation that from Fraud Prevention system gave for their customer.

## Extends

- [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md)

## Constructors

### new InsultFeedback(insultFeedback)

> **new InsultFeedback**(`insultFeedback`): [`InsultFeedback`](InsultFeedback.md)

#### Parameters

• **insultFeedback**: [`InsultFeedbackProperties`](../interfaces/InsultFeedbackProperties.md)

#### Returns

[`InsultFeedback`](InsultFeedback.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).[`constructor`](OrderPurchaseUpdateRequest.md#constructors)

#### Source

models/InsultFeedback.ts:41

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `insultDetail?` | `public` | [`InsultDetail`](InsultDetail.md) | - | - |
| `riskId` | `public` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).`riskId` |
| `type` | `readonly` | `"INSULT_FEEDBACK"` | - | - |
