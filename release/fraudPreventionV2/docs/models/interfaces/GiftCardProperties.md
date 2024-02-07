[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / GiftCardProperties

# Interface: GiftCardProperties

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
| `cardHolderName` | `string` | - |
| `cardNumber` | `string` | - |
| `extensions?` | `Object` | [`PaymentProperties`](PaymentProperties.md).`extensions` |
| `operations?` | [`Operations`](../classes/Operations.md) | [`PaymentProperties`](PaymentProperties.md).`operations` |
| `pin` | `string` | - |
| `reason?` | [`PaymentReason`](../type-aliases/PaymentReason.md) | [`PaymentProperties`](PaymentProperties.md).`reason` |
| `threeDigitsSecureCriteria?` | [`PaymentThreeDSCriteria`](../classes/PaymentThreeDSCriteria.md) | [`PaymentProperties`](PaymentProperties.md).`threeDigitsSecureCriteria` |
| `verifiedAmount?` | [`Amount`](../classes/Amount.md) | [`PaymentProperties`](PaymentProperties.md).`verifiedAmount` |
