[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountTakeoverTransactionDetails

# Class: AccountTakeoverTransactionDetails

The `transaction_type` field value is used as a discriminator, with the following mapping: * `LOGIN`: `LoginTransactionDetails`

## Extended By

- [`LoginTransactionDetails`](LoginTransactionDetails.md)

## Constructors

### new AccountTakeoverTransactionDetails(accountTakeoverTransactionDetails)

> **new AccountTakeoverTransactionDetails**(`accountTakeoverTransactionDetails`): [`AccountTakeoverTransactionDetails`](AccountTakeoverTransactionDetails.md)

#### Parameters

▪ **accountTakeoverTransactionDetails**: [`AccountTakeoverTransactionDetailsProperties`](../interfaces/AccountTakeoverTransactionDetailsProperties.md)

#### Source

models/AccountTakeoverTransactionDetails.ts:47

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `currentUserSession?` | [`CurrentUserSession`](CurrentUserSession.md) | - | models/AccountTakeoverTransactionDetails.ts:45 |
| `transactionDateTime` | `Date` | The local date and time the transaction occured in the Partner\'s system, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | models/AccountTakeoverTransactionDetails.ts:35 |
| `transactionId` | `string` | Unique identifier to identify a transaction attempt in the Partner\'s system. | models/AccountTakeoverTransactionDetails.ts:40 |
