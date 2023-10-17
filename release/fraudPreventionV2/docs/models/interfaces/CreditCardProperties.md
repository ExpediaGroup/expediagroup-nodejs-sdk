[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > CreditCardProperties

# Interface: CreditCardProperties

## Extends

- [`PaymentProperties`](PaymentProperties.md)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `authorizedAmount?` | [`Amount`](../classes/Amount.md) | - | [`PaymentProperties`](PaymentProperties.md).`authorizedAmount` | models/Payment.ts:159 |
| `billingAddress` | [`PaymentBillingAddress`](../classes/PaymentBillingAddress.md) | - | [`PaymentProperties`](PaymentProperties.md).`billingAddress` | models/Payment.ts:157 |
| `billingEmailAddress` | `string` | - | [`PaymentProperties`](PaymentProperties.md).`billingEmailAddress` | models/Payment.ts:158 |
| `billingName` | [`Name`](../classes/Name.md) | - | [`PaymentProperties`](PaymentProperties.md).`billingName` | models/Payment.ts:156 |
| `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | - | [`PaymentProperties`](PaymentProperties.md).`brand` | models/Payment.ts:154 |
| `cardAuthenticationFailureCount?` | `number` | - | - | models/CreditCard.ts:143 |
| `cardAvsResponse?` | `string` | - | - | models/CreditCard.ts:139 |
| `cardCvvResponse?` | `string` | - | - | models/CreditCard.ts:140 |
| `cardNumber` | `string` | - | - | models/CreditCard.ts:134 |
| `cardType` | [`CreditCardCardTypeEnum`](../type-aliases/CreditCardCardTypeEnum.md) | - | - | models/CreditCard.ts:133 |
| `electronicCommerceIndicator?` | `string` | - | - | models/CreditCard.ts:136 |
| `expiryDate` | `Date` | - | - | models/CreditCard.ts:135 |
| `merchantOrderCode?` | `string` | - | - | models/CreditCard.ts:142 |
| `operations?` | [`Operations`](../classes/Operations.md) | - | [`PaymentProperties`](PaymentProperties.md).`operations` | models/Payment.ts:162 |
| `reason?` | [`PaymentReason`](../type-aliases/PaymentReason.md) | - | [`PaymentProperties`](PaymentProperties.md).`reason` | models/Payment.ts:155 |
| `telephones` | [`Telephone`](../classes/Telephone.md)[] | - | - | models/CreditCard.ts:141 |
| `threeDigitsSecureCriteria?` | [`PaymentThreeDSCriteria`](../classes/PaymentThreeDSCriteria.md) | - | [`PaymentProperties`](PaymentProperties.md).`threeDigitsSecureCriteria` | models/Payment.ts:161 |
| `verifiedAmount?` | [`Amount`](../classes/Amount.md) | - | [`PaymentProperties`](PaymentProperties.md).`verifiedAmount` | models/Payment.ts:160 |
| `virtualCreditCardFlag?` | `boolean` | - | - | models/CreditCard.ts:137 |
| `walletType?` | `string` | - | - | models/CreditCard.ts:138 |
