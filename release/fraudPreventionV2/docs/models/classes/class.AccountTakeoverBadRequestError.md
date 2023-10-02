[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountTakeoverBadRequestError

# Class: AccountTakeoverBadRequestError

Indicates that a bad request occurred. Typically it is an invalid parameter.

## Constructors

### constructor()

> **new AccountTakeoverBadRequestError**(`accountTakeoverBadRequestError`): [`AccountTakeoverBadRequestError`](class.AccountTakeoverBadRequestError.md)

#### Parameters

| Parameter                        | Type                                                                                                              |
| :------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| `accountTakeoverBadRequestError` | [`AccountTakeoverBadRequestErrorProperties`](../interfaces/interface.AccountTakeoverBadRequestErrorProperties.md) |

#### Returns

[`AccountTakeoverBadRequestError`](class.AccountTakeoverBadRequestError.md)

#### Source

models/AccountTakeoverBadRequestError.ts:48

## Properties

| Property  | Type                                                                                                             | Description                                                                                                    |
| :-------- | :--------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `causes`? | [`AccountTakeoverBadRequestErrorAllOfCauses`](class.AccountTakeoverBadRequestErrorAllOfCauses.md)[]              | -                                                                                                              |
| `code`    | [`AccountTakeoverBadRequestErrorCodeEnum`](../type-aliases/type-alias.AccountTakeoverBadRequestErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string`                                                                                                         | A human-readable explanation of the error, specific to this error occurrence.                                  |
