[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / CreditCardProperties

# Interface: CreditCardProperties

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
| `cardAuthenticationFailureCount`? | `number` | - | - | models/CreditCard.ts:145 |
| `cardAvsResponse`? | `string` | - | - | models/CreditCard.ts:141 |
| `cardCvvResponse`? | `string` | - | - | models/CreditCard.ts:142 |
| `cardNumber` | `string` | - | - | models/CreditCard.ts:136 |
| `cardType` | [`CreditCardCardTypeEnum`](../type-aliases/CreditCardCardTypeEnum.md) | - | - | models/CreditCard.ts:135 |
| `electronicCommerceIndicator`? | `string` | - | - | models/CreditCard.ts:138 |
| `expiryDate` | `Date` | - | - | models/CreditCard.ts:137 |
| `extensions`? | `object` | - | [`PaymentProperties`](PaymentProperties.md).`extensions` | models/Payment.ts:170 |
| `merchantOrderCode`? | `string` | - | - | models/CreditCard.ts:144 |
| `operations`? | [`Operations`](../classes/Operations.md) | - | [`PaymentProperties`](PaymentProperties.md).`operations` | models/Payment.ts:169 |
| `reason`? | [`PaymentReason`](../type-aliases/PaymentReason.md) | - | [`PaymentProperties`](PaymentProperties.md).`reason` | models/Payment.ts:162 |
| `telephones` | [`Telephone`](../classes/Telephone.md)[] | - | - | models/CreditCard.ts:143 |
| `threeDigitsSecureCriteria`? | [`PaymentThreeDSCriteria`](../classes/PaymentThreeDSCriteria.md) | - | [`PaymentProperties`](PaymentProperties.md).`threeDigitsSecureCriteria` | models/Payment.ts:168 |
| `verifiedAmount`? | [`Amount`](../classes/Amount.md) | - | [`PaymentProperties`](PaymentProperties.md).`verifiedAmount` | models/Payment.ts:167 |
| `virtualCreditCardFlag`? | `boolean` | - | - | models/CreditCard.ts:139 |
| `walletType`? | `string` | - | - | models/CreditCard.ts:140 |
