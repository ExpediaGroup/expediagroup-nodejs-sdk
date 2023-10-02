[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > DirectDebitProperties

# Interface: DirectDebitProperties

## Extends

-   [`PaymentProperties`](interface.PaymentProperties.md)

## Properties

| Property                     | Type                                                                   |
| :--------------------------- | :--------------------------------------------------------------------- |
| `accountNumber`              | `string`                                                               |
| `authorizedAmount`?          | [`Amount`](../classes/class.Amount.md)                                 |
| `billingAddress`             | [`PaymentBillingAddress`](../classes/class.PaymentBillingAddress.md)   |
| `billingEmailAddress`        | `string`                                                               |
| `billingName`                | [`Name`](../classes/class.Name.md)                                     |
| `brand`                      | [`PaymentBrandEnum`](../type-aliases/type-alias.PaymentBrandEnum.md)   |
| `operations`?                | [`Operations`](../classes/class.Operations.md)                         |
| `reason`?                    | [`PaymentReason`](../type-aliases/type-alias.PaymentReason.md)         |
| `routingNumber`              | `string`                                                               |
| `telephones`                 | [`Telephone`](../classes/class.Telephone.md)[]                         |
| `threeDigitsSecureCriteria`? | [`PaymentThreeDSCriteria`](../classes/class.PaymentThreeDSCriteria.md) |
| `verifiedAmount`?            | [`Amount`](../classes/class.Amount.md)                                 |
