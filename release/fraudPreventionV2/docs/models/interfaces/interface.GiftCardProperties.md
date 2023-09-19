[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > GiftCardProperties

# Interface: GiftCardProperties

## Extends

-   [`PaymentProperties`](interface.PaymentProperties.md)

## Properties

| Property                     | Type                                                                   |
| :--------------------------- | :--------------------------------------------------------------------- |
| `authorizedAmount`?          | [`Amount`](../classes/class.Amount.md)                                 |
| `billingAddress`             | [`PaymentBillingAddress`](../classes/class.PaymentBillingAddress.md)   |
| `billingEmailAddress`        | `string`                                                               |
| `billingName`                | [`Name`](../classes/class.Name.md)                                     |
| `brand`                      | [`PaymentBrandEnum`](../type-aliases/type-alias.PaymentBrandEnum.md)   |
| `cardHolderName`             | `string`                                                               |
| `cardNumber`                 | `string`                                                               |
| `operations`?                | [`Operations`](../classes/class.Operations.md)                         |
| `pin`                        | `string`                                                               |
| `reason`?                    | [`PaymentReason`](../type-aliases/type-alias.PaymentReason.md)         |
| `threeDigitsSecureCriteria`? | [`PaymentThreeDSCriteria`](../classes/class.PaymentThreeDSCriteria.md) |
| `verifiedAmount`?            | [`Amount`](../classes/class.Amount.md)                                 |
