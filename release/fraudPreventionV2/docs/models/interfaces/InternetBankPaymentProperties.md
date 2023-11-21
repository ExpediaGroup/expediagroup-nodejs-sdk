[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / InternetBankPaymentProperties

# Interface: InternetBankPaymentProperties

## Extends

- [`PaymentProperties`](PaymentProperties.md)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `authorizedAmount`? | [`Amount`](../classes/Amount.md) | - | [`PaymentProperties`](PaymentProperties.md).`authorizedAmount` | models/Payment.ts:166 |
| `bankBranchCode` | `string` | - | - | models/InternetBankPayment.ts:74 |
| `bankId` | `string` | - | - | models/InternetBankPayment.ts:73 |
| `billingAddress` | [`PaymentBillingAddress`](../classes/PaymentBillingAddress.md) | - | [`PaymentProperties`](PaymentProperties.md).`billingAddress` | models/Payment.ts:164 |
| `billingEmailAddress` | `string` | - | [`PaymentProperties`](PaymentProperties.md).`billingEmailAddress` | models/Payment.ts:165 |
| `billingName` | [`Name`](../classes/Name.md) | - | [`PaymentProperties`](PaymentProperties.md).`billingName` | models/Payment.ts:163 |
| `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | - | [`PaymentProperties`](PaymentProperties.md).`brand` | models/Payment.ts:161 |
| `extensions`? | `object` | - | [`PaymentProperties`](PaymentProperties.md).`extensions` | models/Payment.ts:170 |
| `operations`? | [`Operations`](../classes/Operations.md) | - | [`PaymentProperties`](PaymentProperties.md).`operations` | models/Payment.ts:169 |
| `reason`? | [`PaymentReason`](../type-aliases/PaymentReason.md) | - | [`PaymentProperties`](PaymentProperties.md).`reason` | models/Payment.ts:162 |
| `telephones` | [`Telephone`](../classes/Telephone.md)[] | - | - | models/InternetBankPayment.ts:75 |
| `threeDigitsSecureCriteria`? | [`PaymentThreeDSCriteria`](../classes/PaymentThreeDSCriteria.md) | - | [`PaymentProperties`](PaymentProperties.md).`threeDigitsSecureCriteria` | models/Payment.ts:168 |
| `verifiedAmount`? | [`Amount`](../classes/Amount.md) | - | [`PaymentProperties`](PaymentProperties.md).`verifiedAmount` | models/Payment.ts:167 |
