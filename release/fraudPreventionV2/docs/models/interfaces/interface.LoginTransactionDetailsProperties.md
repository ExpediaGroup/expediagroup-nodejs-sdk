[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > LoginTransactionDetailsProperties

# Interface: LoginTransactionDetailsProperties

## Extends

-   [`AccountTakeoverTransactionDetailsProperties`](interface.AccountTakeoverTransactionDetailsProperties.md)

## Properties

| Property                 | Type                                                                                                                                 |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `authenticationSubType`? | [`LoginTransactionDetailsAuthenticationSubTypeEnum`](../type-aliases/type-alias.LoginTransactionDetailsAuthenticationSubTypeEnum.md) |
| `authenticationType`     | [`LoginTransactionDetailsAuthenticationTypeEnum`](../type-aliases/type-alias.LoginTransactionDetailsAuthenticationTypeEnum.md)       |
| `currentUserSession`?    | [`CurrentUserSession`](../classes/class.CurrentUserSession.md)                                                                       |
| `failedLoginReason`?     | [`LoginTransactionDetailsFailedLoginReasonEnum`](../type-aliases/type-alias.LoginTransactionDetailsFailedLoginReasonEnum.md)         |
| `successfulLoginFlag`    | `boolean`                                                                                                                            |
| `transactionDateTime`    | `Date`                                                                                                                               |
| `transactionId`          | `string`                                                                                                                             |
