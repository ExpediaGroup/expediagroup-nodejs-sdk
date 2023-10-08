[API](../../index.md) > [models](../index.md) > ChargebackFeedback

# Class: ChargebackFeedback

Feedback from EG external partners if they receive a chargeback for a false negative recommendation from Fraud Prevention system.

## Extends

- [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md)

## Constructors

### new ChargebackFeedback(chargebackFeedback)

> **new ChargebackFeedback**(`chargebackFeedback`): [`ChargebackFeedback`](ChargebackFeedback.md)

#### Parameters

▪ **chargebackFeedback**: [`ChargebackFeedbackProperties`](../interfaces/ChargebackFeedbackProperties.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).[`constructor`](OrderPurchaseUpdateRequest.md#constructors)

#### Source

models/ChargebackFeedback.ts:41

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `chargebackDetail?` | [`ChargebackDetail`](ChargebackDetail.md) | - | - | models/ChargebackFeedback.ts:36 |
| `public` | `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. | [`OrderPurchaseUpdateRequest`](OrderPurchaseUpdateRequest.md).`riskId` | models/OrderPurchaseUpdateRequest.ts:32 |
| `readonly` | `type` | `"CHARGEBACK_FEEDBACK"` | - | - | models/ChargebackFeedback.ts:39 |
