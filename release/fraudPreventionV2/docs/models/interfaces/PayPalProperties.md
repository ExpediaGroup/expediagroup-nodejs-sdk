[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / PayPalProperties

# Interface: PayPalProperties

## Extends

- [`PaymentProperties`](PaymentProperties.md)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `authorizedAmount`? | [`Amount`](../classes/Amount.md) | - | [`PaymentProperties`](PaymentProperties.md).`authorizedAmount` | models/Payment.ts:166 |
| `billingAddress` | [`PaymentBillingAddress`](../classes/PaymentBillingAddress.md) | - | [`PaymentProperties`](PaymentProperties.md).`billingAddress` | models/Payment.ts:164 |
| `billingEmailAddress` | `string` | - | [`PaymentProperties`](PaymentProperties.md).`billingEmailAddress` | models/Payment.ts:165 |
| `billingName` | [`Name`](../classes/Name.md) | - | [`PaymentProperties`](PaymentProperties.md).`billingName` | models/Payment.ts:163 |
| `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | - | [`PaymentProperties`](PaymentProperties.md).`brand` | models/Payment.ts:161 |
| `extensions`? | `object` | - | [`PaymentProperties`](PaymentProperties.md).`extensions` | models/Payment.ts:170 |
| `merchantOrderCode`? | `string` | - | - | models/PayPal.ts:68 |
| `operations`? | [`Operations`](../classes/Operations.md) | - | [`PaymentProperties`](PaymentProperties.md).`operations` | models/Payment.ts:169 |
| `payerId` | `string` | - | - | models/PayPal.ts:66 |
| `reason`? | [`PaymentReason`](../type-aliases/PaymentReason.md) | - | [`PaymentProperties`](PaymentProperties.md).`reason` | models/Payment.ts:162 |
| `threeDigitsSecureCriteria`? | [`PaymentThreeDSCriteria`](../classes/PaymentThreeDSCriteria.md) | - | [`PaymentProperties`](PaymentProperties.md).`threeDigitsSecureCriteria` | models/Payment.ts:168 |
| `transactionId` | `string` | - | - | models/PayPal.ts:67 |
| `verifiedAmount`? | [`Amount`](../classes/Amount.md) | - | [`PaymentProperties`](PaymentProperties.md).`verifiedAmount` | models/Payment.ts:167 |
