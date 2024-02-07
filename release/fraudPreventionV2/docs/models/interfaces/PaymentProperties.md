[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / PaymentProperties

# Interface: PaymentProperties

## Extended by

- [`CreditCardProperties`](CreditCardProperties.md)
- [`DirectDebitProperties`](DirectDebitProperties.md)
- [`GiftCardProperties`](GiftCardProperties.md)
- [`InternetBankPaymentProperties`](InternetBankPaymentProperties.md)
- [`PayPalProperties`](PayPalProperties.md)
- [`PointsProperties`](PointsProperties.md)

## Properties

| Property | Type |
| :------ | :------ |
| `authorizedAmount?` | [`Amount`](../classes/Amount.md) |
| `billingAddress` | [`PaymentBillingAddress`](../classes/PaymentBillingAddress.md) |
| `billingEmailAddress` | `string` |
| `billingName` | [`Name`](../classes/Name.md) |
| `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) |
| `extensions?` | `Object` |
| `operations?` | [`Operations`](../classes/Operations.md) |
| `reason?` | [`PaymentReason`](../type-aliases/PaymentReason.md) |
| `threeDigitsSecureCriteria?` | [`PaymentThreeDSCriteria`](../classes/PaymentThreeDSCriteria.md) |
| `verifiedAmount?` | [`Amount`](../classes/Amount.md) |
