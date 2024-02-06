[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / DirectDebitProperties

# Interface: DirectDebitProperties

## Extends

- [`PaymentProperties`](PaymentProperties.md)

## Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `accountNumber` | `string` | - |
| `authorizedAmount?` | [`Amount`](../classes/Amount.md) | [`PaymentProperties`](PaymentProperties.md).`authorizedAmount` |
| `billingAddress` | [`PaymentBillingAddress`](../classes/PaymentBillingAddress.md) | [`PaymentProperties`](PaymentProperties.md).`billingAddress` |
| `billingEmailAddress` | `string` | [`PaymentProperties`](PaymentProperties.md).`billingEmailAddress` |
| `billingName` | [`Name`](../classes/Name.md) | [`PaymentProperties`](PaymentProperties.md).`billingName` |
| `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | [`PaymentProperties`](PaymentProperties.md).`brand` |
| `extensions?` | `Object` | [`PaymentProperties`](PaymentProperties.md).`extensions` |
| `mandateType?` | [`DirectDebitMandateTypeEnum`](../type-aliases/DirectDebitMandateTypeEnum.md) | - |
| `operations?` | [`Operations`](../classes/Operations.md) | [`PaymentProperties`](PaymentProperties.md).`operations` |
| `reason?` | [`PaymentReason`](../type-aliases/PaymentReason.md) | [`PaymentProperties`](PaymentProperties.md).`reason` |
| `routingNumber?` | `string` | - |
| `telephones` | [`Telephone`](../classes/Telephone.md)[] | - |
| `threeDigitsSecureCriteria?` | [`PaymentThreeDSCriteria`](../classes/PaymentThreeDSCriteria.md) | [`PaymentProperties`](PaymentProperties.md).`threeDigitsSecureCriteria` |
| `verifiedAmount?` | [`Amount`](../classes/Amount.md) | [`PaymentProperties`](PaymentProperties.md).`verifiedAmount` |
