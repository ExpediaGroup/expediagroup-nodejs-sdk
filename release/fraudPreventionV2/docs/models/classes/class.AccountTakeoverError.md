[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountTakeoverError

# Class: AccountTakeoverError

The object used to describe an error, containing both human-readable and machine-readable information.

## Constructors

### constructor()

> **new AccountTakeoverError**(`accountTakeoverError`): [`AccountTakeoverError`](class.AccountTakeoverError.md)

#### Parameters

| Parameter              | Type                                                                                          |
| :--------------------- | :-------------------------------------------------------------------------------------------- |
| `accountTakeoverError` | [`AccountTakeoverErrorProperties`](../interfaces/interface.AccountTakeoverErrorProperties.md) |

#### Returns

[`AccountTakeoverError`](class.AccountTakeoverError.md)

#### Source

models/AccountTakeoverError.ts:39

## Properties

| Property  | Type                                                                                         | Description                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `code`    | [`AccountTakeoverErrorCodeEnum`](../type-aliases/type-alias.AccountTakeoverErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string`                                                                                     | A human-readable explanation of the error, specific to this error occurrence.                                  |
