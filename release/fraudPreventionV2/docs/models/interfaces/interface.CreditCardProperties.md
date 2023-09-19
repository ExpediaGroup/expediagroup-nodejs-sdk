[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > CreditCardProperties

# Interface: CreditCardProperties

## Extends

-   [`PaymentProperties`](interface.PaymentProperties.md)

## Properties

| Property                          | Type                                                                             |
| :-------------------------------- | :------------------------------------------------------------------------------- |
| `authorizedAmount`?               | [`Amount`](../classes/class.Amount.md)                                           |
| `billingAddress`                  | [`PaymentBillingAddress`](../classes/class.PaymentBillingAddress.md)             |
| `billingEmailAddress`             | `string`                                                                         |
| `billingName`                     | [`Name`](../classes/class.Name.md)                                               |
| `brand`                           | [`PaymentBrandEnum`](../type-aliases/type-alias.PaymentBrandEnum.md)             |
| `cardAuthenticationFailureCount`? | `number`                                                                         |
| `cardAvsResponse`?                | `string`                                                                         |
| `cardCvvResponse`?                | `string`                                                                         |
| `cardNumber`                      | `string`                                                                         |
| `cardType`                        | [`CreditCardCardTypeEnum`](../type-aliases/type-alias.CreditCardCardTypeEnum.md) |
| `electronicCommerceIndicator`?    | `string`                                                                         |
| `expiryDate`                      | `Date`                                                                           |
| `merchantOrderCode`?              | `string`                                                                         |
| `operations`?                     | [`Operations`](../classes/class.Operations.md)                                   |
| `reason`?                         | [`PaymentReason`](../type-aliases/type-alias.PaymentReason.md)                   |
| `telephones`                      | [`Telephone`](../classes/class.Telephone.md)[]                                   |
| `threeDigitsSecureCriteria`?      | [`PaymentThreeDSCriteria`](../classes/class.PaymentThreeDSCriteria.md)           |
| `verifiedAmount`?                 | [`Amount`](../classes/class.Amount.md)                                           |
| `virtualCreditCardFlag`?          | `boolean`                                                                        |
| `walletType`?                     | `string`                                                                         |
