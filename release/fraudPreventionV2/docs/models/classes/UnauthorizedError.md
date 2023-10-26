[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > UnauthorizedError

# Class: UnauthorizedError

Indicates that the token sent in the \'Authorization\' header is either invalid or missing. Please check the value in the token field along with the token expiration time before retrying.

## Constructors

### new UnauthorizedError(unauthorizedError)

> **new UnauthorizedError**(`unauthorizedError`): [`UnauthorizedError`](UnauthorizedError.md)

#### Parameters

▪ **unauthorizedError**: [`UnauthorizedErrorProperties`](../interfaces/UnauthorizedErrorProperties.md)

#### Source

models/UnauthorizedError.ts:39

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `code` | [`UnauthorizedErrorCodeEnum`](../type-aliases/UnauthorizedErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. | models/UnauthorizedError.ts:32 |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. | models/UnauthorizedError.ts:37 |
