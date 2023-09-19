[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > ForbiddenError

# Class: ForbiddenError

Indicates that the API cannot fulfill the request because while the client is correctly authenticated, the client doesn\'t have the permission to execute the specified operation. This error type does not imply that the request is valid, or that the resource against which the operation being performed exists or satisfies other pre-conditions.

## Constructors

### constructor()

> **new ForbiddenError**(`forbiddenError`): [`ForbiddenError`](class.ForbiddenError.md)

#### Parameters

| Parameter        | Type                                                                              |
| :--------------- | :-------------------------------------------------------------------------------- |
| `forbiddenError` | [`ForbiddenErrorProperties`](../interfaces/interface.ForbiddenErrorProperties.md) |

#### Returns

[`ForbiddenError`](class.ForbiddenError.md)

#### Source

models/ForbiddenError.ts:39

## Properties

| Property  | Type                                                                             | Description                                                                                                    |
| :-------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `code`    | [`ForbiddenErrorCodeEnum`](../type-aliases/type-alias.ForbiddenErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string`                                                                         | A human-readable explanation of the error, specific to this error occurrence.                                  |
