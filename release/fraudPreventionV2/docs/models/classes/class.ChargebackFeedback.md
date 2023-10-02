[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > ChargebackFeedback

# Class: ChargebackFeedback

Feedback from EG external partners if they receive a chargeback for a false negative recommendation from Fraud Prevention system.

## Extends

-   [`OrderPurchaseUpdateRequest`](class.OrderPurchaseUpdateRequest.md)

## Constructors

### constructor()

> **new ChargebackFeedback**(`chargebackFeedback`): [`ChargebackFeedback`](class.ChargebackFeedback.md)

#### Parameters

| Parameter            | Type                                                                                      |
| :------------------- | :---------------------------------------------------------------------------------------- |
| `chargebackFeedback` | [`ChargebackFeedbackProperties`](../interfaces/interface.ChargebackFeedbackProperties.md) |

#### Returns

[`ChargebackFeedback`](class.ChargebackFeedback.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](class.OrderPurchaseUpdateRequest.md).[`constructor`](class.OrderPurchaseUpdateRequest.md#constructor)

#### Source

models/ChargebackFeedback.ts:41

## Properties

| Property            | Type                                            | Description                                                                                         |
| :------------------ | :---------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| `chargebackDetail`? | [`ChargebackDetail`](class.ChargebackDetail.md) | -                                                                                                   |
| `riskId`            | `string`                                        | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`. |
| `readonly` `type`   | `"CHARGEBACK_FEEDBACK"`                         | -                                                                                                   |
