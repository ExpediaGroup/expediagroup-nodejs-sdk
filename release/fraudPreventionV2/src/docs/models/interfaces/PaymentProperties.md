[API](../../index.md) > [models](../index.md) > PaymentProperties

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
| `authorizedAmount?` | [`Amount`](../classes/Amount.md) | - | models/Payment.ts:155 |
| `billingAddress` | [`PaymentBillingAddress`](../classes/PaymentBillingAddress.md) | - | models/Payment.ts:153 |
| `billingEmailAddress` | `string` | - | models/Payment.ts:154 |
| `billingName` | [`Name`](../classes/Name.md) | - | models/Payment.ts:152 |
| `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | - | models/Payment.ts:150 |
| `operations?` | [`Operations`](../classes/Operations.md) | - | models/Payment.ts:158 |
| `reason?` | [`PaymentReason`](../type-aliases/PaymentReason.md) | - | models/Payment.ts:151 |
| `threeDigitsSecureCriteria?` | [`PaymentThreeDSCriteria`](../classes/PaymentThreeDSCriteria.md) | - | models/Payment.ts:157 |
| `verifiedAmount?` | [`Amount`](../classes/Amount.md) | - | models/Payment.ts:156 |
