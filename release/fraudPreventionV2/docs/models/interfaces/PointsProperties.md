[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / PointsProperties

# Interface: PointsProperties

## Extends

- [`PaymentProperties`](PaymentProperties.md)

## Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `accountId` | `string` | - |
| `authorizedAmount?` | [`Amount`](../classes/Amount.md) | [`PaymentProperties`](PaymentProperties.md).`authorizedAmount` |
| `billingAddress` | [`PaymentBillingAddress`](../classes/PaymentBillingAddress.md) | [`PaymentProperties`](PaymentProperties.md).`billingAddress` |
| `billingEmailAddress` | `string` | [`PaymentProperties`](PaymentProperties.md).`billingEmailAddress` |
| `billingName` | [`Name`](../classes/Name.md) | [`PaymentProperties`](PaymentProperties.md).`billingName` |
| `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | [`PaymentProperties`](PaymentProperties.md).`brand` |
| `extensions?` | `Object` | [`PaymentProperties`](PaymentProperties.md).`extensions` |
| `operations?` | [`Operations`](../classes/Operations.md) | [`PaymentProperties`](PaymentProperties.md).`operations` |
| `reason?` | [`PaymentReason`](../type-aliases/PaymentReason.md) | [`PaymentProperties`](PaymentProperties.md).`reason` |
| `threeDigitsSecureCriteria?` | [`PaymentThreeDSCriteria`](../classes/PaymentThreeDSCriteria.md) | [`PaymentProperties`](PaymentProperties.md).`threeDigitsSecureCriteria` |
| `verifiedAmount?` | [`Amount`](../classes/Amount.md) | [`PaymentProperties`](PaymentProperties.md).`verifiedAmount` |
