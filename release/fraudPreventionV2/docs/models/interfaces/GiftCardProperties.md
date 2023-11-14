[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / GiftCardProperties

# Interface: GiftCardProperties

## Extends

- [`PaymentProperties`](PaymentProperties.md)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `authorizedAmount`? | [`Amount`](../classes/Amount.md) | - | [`PaymentProperties`](PaymentProperties.md).`authorizedAmount` | models/Payment.ts:160 |
| `billingAddress` | [`PaymentBillingAddress`](../classes/PaymentBillingAddress.md) | - | [`PaymentProperties`](PaymentProperties.md).`billingAddress` | models/Payment.ts:158 |
| `billingEmailAddress` | `string` | - | [`PaymentProperties`](PaymentProperties.md).`billingEmailAddress` | models/Payment.ts:159 |
| `billingName` | [`Name`](../classes/Name.md) | - | [`PaymentProperties`](PaymentProperties.md).`billingName` | models/Payment.ts:157 |
| `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | - | [`PaymentProperties`](PaymentProperties.md).`brand` | models/Payment.ts:155 |
| `cardHolderName` | `string` | - | - | models/GiftCard.ts:66 |
| `cardNumber` | `string` | - | - | models/GiftCard.ts:65 |
| `operations`? | [`Operations`](../classes/Operations.md) | - | [`PaymentProperties`](PaymentProperties.md).`operations` | models/Payment.ts:163 |
| `pin` | `string` | - | - | models/GiftCard.ts:67 |
| `reason`? | [`PaymentReason`](../type-aliases/PaymentReason.md) | - | [`PaymentProperties`](PaymentProperties.md).`reason` | models/Payment.ts:156 |
| `threeDigitsSecureCriteria`? | [`PaymentThreeDSCriteria`](../classes/PaymentThreeDSCriteria.md) | - | [`PaymentProperties`](PaymentProperties.md).`threeDigitsSecureCriteria` | models/Payment.ts:162 |
| `verifiedAmount`? | [`Amount`](../classes/Amount.md) | - | [`PaymentProperties`](PaymentProperties.md).`verifiedAmount` | models/Payment.ts:161 |
