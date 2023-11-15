[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / PaymentProperties

# Interface: PaymentProperties

## Extended By

- [`CreditCardProperties`](CreditCardProperties.md)
- [`DirectDebitProperties`](DirectDebitProperties.md)
- [`GiftCardProperties`](GiftCardProperties.md)
- [`InternetBankPaymentProperties`](InternetBankPaymentProperties.md)
- [`PayPalProperties`](PayPalProperties.md)
- [`PointsProperties`](PointsProperties.md)

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `authorizedAmount`? | [`Amount`](../classes/Amount.md) | - | models/Payment.ts:160 |
| `billingAddress` | [`PaymentBillingAddress`](../classes/PaymentBillingAddress.md) | - | models/Payment.ts:158 |
| `billingEmailAddress` | `string` | - | models/Payment.ts:159 |
| `billingName` | [`Name`](../classes/Name.md) | - | models/Payment.ts:157 |
| `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | - | models/Payment.ts:155 |
| `operations`? | [`Operations`](../classes/Operations.md) | - | models/Payment.ts:163 |
| `reason`? | [`PaymentReason`](../type-aliases/PaymentReason.md) | - | models/Payment.ts:156 |
| `threeDigitsSecureCriteria`? | [`PaymentThreeDSCriteria`](../classes/PaymentThreeDSCriteria.md) | - | models/Payment.ts:162 |
| `verifiedAmount`? | [`Amount`](../classes/Amount.md) | - | models/Payment.ts:161 |
