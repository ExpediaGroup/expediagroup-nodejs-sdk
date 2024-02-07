[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / ChargebackFeedback

# Class: ChargebackFeedback

Feedback from EG external partners if they receive a chargeback for a false negative recommendation from Fraud Prevention system.

## Extends

- [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md)

## Constructors

### new ChargebackFeedback(chargebackFeedback)

> **new ChargebackFeedback**(`chargebackFeedback`): [`ChargebackFeedback`](ChargebackFeedback.md)

#### Parameters

• **chargebackFeedback**: [`ChargebackFeedbackProperties`](../interfaces/ChargebackFeedbackProperties.md)

#### Returns

[`ChargebackFeedback`](ChargebackFeedback.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).[`constructor`](OrderPurchaseUpdateRequest.md#constructors)

#### Source

models/ChargebackFeedback.ts:41

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chargebackDetail?` | `public` | [`ChargebackDetail`](ChargebackDetail.md) | - | - |
| `riskId` | `public` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).`riskId` |
| `type` | `readonly` | `"CHARGEBACK_FEEDBACK"` | - | - |
