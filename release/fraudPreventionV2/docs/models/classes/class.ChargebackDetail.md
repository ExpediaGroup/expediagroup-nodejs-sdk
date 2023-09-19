[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > ChargebackDetail

# Class: ChargebackDetail

Details related to the chargeback.

## Constructors

### constructor()

> **new ChargebackDetail**(`chargebackDetail`): [`ChargebackDetail`](class.ChargebackDetail.md)

#### Parameters

| Parameter          | Type                                                                                  |
| :----------------- | :------------------------------------------------------------------------------------ |
| `chargebackDetail` | [`ChargebackDetailProperties`](../interfaces/interface.ChargebackDetailProperties.md) |

#### Returns

[`ChargebackDetail`](class.ChargebackDetail.md)

#### Source

models/ChargebackDetail.ts:57

## Properties

| Property                      | Type                                                                                                         | Description                                                                                                                                           |
| :---------------------------- | :----------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bankReasonCode`?             | `string`                                                                                                     | Unique code provided by the acquiring bank for the category of fraud.                                                                                 |
| `chargebackAmount`            | [`Amount`](class.Amount.md)                                                                                  | -                                                                                                                                                     |
| `chargebackReason`            | [`ChargebackDetailChargebackReasonEnum`](../type-aliases/type-alias.ChargebackDetailChargebackReasonEnum.md) | Reason for chargeback which can be `Fraud` or `Non Fraud`.                                                                                            |
| `chargebackReportedDateTime`? | `Date`                                                                                                       | Date and time when the chargeback was reported to the partner, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.                           |
| `chargebackStatus`            | [`ChargebackDetailChargebackStatusEnum`](../type-aliases/type-alias.ChargebackDetailChargebackStatusEnum.md) | Identifies the chargeback status. Possible values are: -`RECEIVED` - The chargeback was received. -`REVERSAL` - The chargeback reversal was received. |
