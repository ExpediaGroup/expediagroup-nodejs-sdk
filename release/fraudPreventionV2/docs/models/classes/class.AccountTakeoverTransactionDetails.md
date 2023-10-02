[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountTakeoverTransactionDetails

# Class: AccountTakeoverTransactionDetails

The `transaction_type` field value is used as a discriminator, with the following mapping: \* `LOGIN`: `LoginTransactionDetails`

## Extended By

-   [`LoginTransactionDetails`](class.LoginTransactionDetails.md)

## Constructors

### constructor()

> **new AccountTakeoverTransactionDetails**(`accountTakeoverTransactionDetails`): [`AccountTakeoverTransactionDetails`](class.AccountTakeoverTransactionDetails.md)

#### Parameters

| Parameter                           | Type                                                                                                                    |
| :---------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| `accountTakeoverTransactionDetails` | [`AccountTakeoverTransactionDetailsProperties`](../interfaces/interface.AccountTakeoverTransactionDetailsProperties.md) |

#### Returns

[`AccountTakeoverTransactionDetails`](class.AccountTakeoverTransactionDetails.md)

#### Source

models/AccountTakeoverTransactionDetails.ts:47

## Properties

| Property              | Type                                                | Description                                                                                                                            |
| :-------------------- | :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `currentUserSession`? | [`CurrentUserSession`](class.CurrentUserSession.md) | -                                                                                                                                      |
| `transactionDateTime` | `Date`                                              | The local date and time the transaction occured in the Partner\'s system, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. |
| `transactionId`       | `string`                                            | Unique identifier to identify a transaction attempt in the Partner\'s system.                                                          |
