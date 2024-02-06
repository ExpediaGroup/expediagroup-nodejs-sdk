[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / ChargebackDetail

# Class: ChargebackDetail

Details related to the chargeback.

## Constructors

### new ChargebackDetail(chargebackDetail)

> **new ChargebackDetail**(`chargebackDetail`): [`ChargebackDetail`](ChargebackDetail.md)

#### Parameters

• **chargebackDetail**: [`ChargebackDetailProperties`](../interfaces/ChargebackDetailProperties.md)

#### Returns

[`ChargebackDetail`](ChargebackDetail.md)

#### Source

models/ChargebackDetail.ts:57

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `bankReasonCode?` | `string` | Unique code provided by the acquiring bank for the category of fraud. |
| `chargebackAmount` | [`Amount`](Amount.md) | - |
| `chargebackReason` | [`ChargebackDetailChargebackReasonEnum`](../type-aliases/ChargebackDetailChargebackReasonEnum.md) | Reason for chargeback which can be `Fraud` or `Non Fraud`. |
| `chargebackReportedDateTime?` | `Date` | Date and time when the chargeback was reported to the partner, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. |
| `chargebackStatus` | [`ChargebackDetailChargebackStatusEnum`](../type-aliases/ChargebackDetailChargebackStatusEnum.md) | Identifies the chargeback status. Possible values are: -`RECEIVED` - The chargeback was received. -`REVERSAL` - The chargeback reversal was received. |
