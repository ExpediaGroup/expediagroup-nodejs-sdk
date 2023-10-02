[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountTakeoverUnauthorizedError

# Class: AccountTakeoverUnauthorizedError

Indicates that the token sent in the \'Authorization\' header is either invalid or missing. Please check the value in the token field along with the token expiration time before retrying.

## Constructors

### constructor()

> **new AccountTakeoverUnauthorizedError**(`accountTakeoverUnauthorizedError`): [`AccountTakeoverUnauthorizedError`](class.AccountTakeoverUnauthorizedError.md)

#### Parameters

| Parameter                          | Type                                                                                                                  |
| :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| `accountTakeoverUnauthorizedError` | [`AccountTakeoverUnauthorizedErrorProperties`](../interfaces/interface.AccountTakeoverUnauthorizedErrorProperties.md) |

#### Returns

[`AccountTakeoverUnauthorizedError`](class.AccountTakeoverUnauthorizedError.md)

#### Source

models/AccountTakeoverUnauthorizedError.ts:39

## Properties

| Property  | Type                                                                                                                 | Description                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `code`    | [`AccountTakeoverUnauthorizedErrorCodeEnum`](../type-aliases/type-alias.AccountTakeoverUnauthorizedErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string`                                                                                                             | A human-readable explanation of the error, specific to this error occurrence.                                  |
