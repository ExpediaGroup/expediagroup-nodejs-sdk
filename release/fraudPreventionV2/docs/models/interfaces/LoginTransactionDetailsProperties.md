[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > LoginTransactionDetailsProperties

# Interface: LoginTransactionDetailsProperties

## Extends

- [`AccountTakeoverTransactionDetailsProperties`](AccountTakeoverTransactionDetailsProperties.md)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `authenticationSubType`? | [`LoginTransactionDetailsAuthenticationSubTypeEnum`](../type-aliases/LoginTransactionDetailsAuthenticationSubTypeEnum.md) | - | - | models/LoginTransactionDetails.ts:88 |
| `authenticationType` | [`LoginTransactionDetailsAuthenticationTypeEnum`](../type-aliases/LoginTransactionDetailsAuthenticationTypeEnum.md) | - | - | models/LoginTransactionDetails.ts:87 |
| `currentUserSession`? | [`CurrentUserSession`](../classes/CurrentUserSession.md) | - | [`AccountTakeoverTransactionDetailsProperties`](AccountTakeoverTransactionDetailsProperties.md).`currentUserSession` | models/AccountTakeoverTransactionDetails.ts:63 |
| `failedLoginReason`? | [`LoginTransactionDetailsFailedLoginReasonEnum`](../type-aliases/LoginTransactionDetailsFailedLoginReasonEnum.md) | - | - | models/LoginTransactionDetails.ts:90 |
| `successfulLoginFlag` | `boolean` | - | - | models/LoginTransactionDetails.ts:89 |
| `transactionDateTime` | `Date` | - | [`AccountTakeoverTransactionDetailsProperties`](AccountTakeoverTransactionDetailsProperties.md).`transactionDateTime` | models/AccountTakeoverTransactionDetails.ts:61 |
| `transactionId` | `string` | - | [`AccountTakeoverTransactionDetailsProperties`](AccountTakeoverTransactionDetailsProperties.md).`transactionId` | models/AccountTakeoverTransactionDetails.ts:62 |
