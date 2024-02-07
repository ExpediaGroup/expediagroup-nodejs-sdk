[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / AccountTakeoverTransactionDetails

# Class: AccountTakeoverTransactionDetails

The `transaction_type` field value is used as a discriminator, with the following mapping: * `LOGIN`: `LoginTransactionDetails`

## Extended by

- [`LoginTransactionDetails`](LoginTransactionDetails.md)

## Constructors

### new AccountTakeoverTransactionDetails(accountTakeoverTransactionDetails)

> **new AccountTakeoverTransactionDetails**(`accountTakeoverTransactionDetails`): [`AccountTakeoverTransactionDetails`](AccountTakeoverTransactionDetails.md)

#### Parameters

• **accountTakeoverTransactionDetails**: [`AccountTakeoverTransactionDetailsProperties`](../interfaces/AccountTakeoverTransactionDetailsProperties.md)

#### Returns

[`AccountTakeoverTransactionDetails`](AccountTakeoverTransactionDetails.md)

#### Source

models/AccountTakeoverTransactionDetails.ts:47

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `currentUserSession?` | [`CurrentUserSession`](CurrentUserSession.md) | - |
| `transactionDateTime` | `Date` | The local date and time the transaction occured in the Partner\'s system, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. |
| `transactionId` | `string` | Unique identifier to identify a transaction attempt in the Partner\'s system. |
