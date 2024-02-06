[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / CreditCardProperties

# Interface: CreditCardProperties

## Extends

- [`PaymentProperties`](PaymentProperties.md)

## Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `authorizedAmount?` | [`Amount`](../classes/Amount.md) | [`PaymentProperties`](PaymentProperties.md).`authorizedAmount` |
| `billingAddress` | [`PaymentBillingAddress`](../classes/PaymentBillingAddress.md) | [`PaymentProperties`](PaymentProperties.md).`billingAddress` |
| `billingEmailAddress` | `string` | [`PaymentProperties`](PaymentProperties.md).`billingEmailAddress` |
| `billingName` | [`Name`](../classes/Name.md) | [`PaymentProperties`](PaymentProperties.md).`billingName` |
| `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | [`PaymentProperties`](PaymentProperties.md).`brand` |
| `cardAuthenticationFailureCount?` | `number` | - |
| `cardAvsResponse?` | `string` | - |
| `cardCvvResponse?` | `string` | - |
| `cardNumber` | `string` | - |
| `cardType` | [`CreditCardCardTypeEnum`](../type-aliases/CreditCardCardTypeEnum.md) | - |
| `electronicCommerceIndicator?` | `string` | - |
| `expiryDate` | `Date` | - |
| `extensions?` | `Object` | [`PaymentProperties`](PaymentProperties.md).`extensions` |
| `merchantOrderCode?` | `string` | - |
| `operations?` | [`Operations`](../classes/Operations.md) | [`PaymentProperties`](PaymentProperties.md).`operations` |
| `reason?` | [`PaymentReason`](../type-aliases/PaymentReason.md) | [`PaymentProperties`](PaymentProperties.md).`reason` |
| `telephones` | [`Telephone`](../classes/Telephone.md)[] | - |
| `threeDigitsSecureCriteria?` | [`PaymentThreeDSCriteria`](../classes/PaymentThreeDSCriteria.md) | [`PaymentProperties`](PaymentProperties.md).`threeDigitsSecureCriteria` |
| `verifiedAmount?` | [`Amount`](../classes/Amount.md) | [`PaymentProperties`](PaymentProperties.md).`verifiedAmount` |
| `virtualCreditCardFlag?` | `boolean` | - |
| `walletType?` | `string` | - |
