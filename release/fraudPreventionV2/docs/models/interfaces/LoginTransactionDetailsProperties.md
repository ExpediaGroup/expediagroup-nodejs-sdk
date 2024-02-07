[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / LoginTransactionDetailsProperties

# Interface: LoginTransactionDetailsProperties

## Extends

- [`AccountTakeoverTransactionDetailsProperties`](AccountTakeoverTransactionDetailsProperties.md)

## Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `authenticationSubType?` | [`LoginTransactionDetailsAuthenticationSubTypeEnum`](../type-aliases/LoginTransactionDetailsAuthenticationSubTypeEnum.md) | - |
| `authenticationType` | [`LoginTransactionDetailsAuthenticationTypeEnum`](../type-aliases/LoginTransactionDetailsAuthenticationTypeEnum.md) | - |
| `currentUserSession?` | [`CurrentUserSession`](../classes/CurrentUserSession.md) | [`AccountTakeoverTransactionDetailsProperties`](AccountTakeoverTransactionDetailsProperties.md).`currentUserSession` |
| `failedLoginReason?` | [`LoginTransactionDetailsFailedLoginReasonEnum`](../type-aliases/LoginTransactionDetailsFailedLoginReasonEnum.md) | - |
| `successfulLoginFlag` | `boolean` | - |
| `transactionDateTime` | `Date` | [`AccountTakeoverTransactionDetailsProperties`](AccountTakeoverTransactionDetailsProperties.md).`transactionDateTime` |
| `transactionId` | `string` | [`AccountTakeoverTransactionDetailsProperties`](AccountTakeoverTransactionDetailsProperties.md).`transactionId` |
