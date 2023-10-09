[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountTransaction

# Class: AccountTransaction

Information for an account transaction.

## Constructors

### constructor()

> **new AccountTransaction**(`accountTransaction`): [`AccountTransaction`](class.AccountTransaction.md)

#### Parameters

| Parameter            | Type                                                                                      |
| :------------------- | :---------------------------------------------------------------------------------------- |
| `accountTransaction` | [`AccountTransactionProperties`](../interfaces/interface.AccountTransactionProperties.md) |

#### Returns

[`AccountTransaction`](class.AccountTransaction.md)

#### Source

models/AccountTransaction.ts:63

## Properties

| Property             | Type                                                                              |
| :------------------- | :-------------------------------------------------------------------------------- |
| `customerAccount`    | [`AccountTakeoverCustomerAccount`](class.AccountTakeoverCustomerAccount.md)       |
| `deviceDetails`      | [`AccountTakeoverDeviceDetails`](class.AccountTakeoverDeviceDetails.md)           |
| `siteInfo`           | [`AccountTakeoverSiteInfo`](class.AccountTakeoverSiteInfo.md)                     |
| `transactionDetails` | [`AccountTakeoverTransactionDetails`](class.AccountTakeoverTransactionDetails.md) |
