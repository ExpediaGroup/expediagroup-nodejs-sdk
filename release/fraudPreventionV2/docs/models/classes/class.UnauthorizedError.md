[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > UnauthorizedError

# Class: UnauthorizedError

Indicates that the token sent in the \'Authorization\' header is either invalid or missing. Please check the value in the token field along with the token expiration time before retrying.

## Constructors

### constructor()

> **new UnauthorizedError**(`unauthorizedError`): [`UnauthorizedError`](class.UnauthorizedError.md)

#### Parameters

| Parameter           | Type                                                                                    |
| :------------------ | :-------------------------------------------------------------------------------------- |
| `unauthorizedError` | [`UnauthorizedErrorProperties`](../interfaces/interface.UnauthorizedErrorProperties.md) |

#### Returns

[`UnauthorizedError`](class.UnauthorizedError.md)

#### Source

models/UnauthorizedError.ts:39

## Properties

| Property  | Type                                                                                   | Description                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `code`    | [`UnauthorizedErrorCodeEnum`](../type-aliases/type-alias.UnauthorizedErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string`                                                                               | A human-readable explanation of the error, specific to this error occurrence.                                  |
