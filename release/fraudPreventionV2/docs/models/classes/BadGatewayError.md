[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / BadGatewayError

# Class: BadGatewayError

Indicates that the server received an invalid response from the upstream server. Causes could be incorrectly configured target server at gateway, EOF exception, incorrectly configured keep-alive timeouts. Please reach out to support team as next step for this error resolution.

## Constructors

### new BadGatewayError(badGatewayError)

> **new BadGatewayError**(`badGatewayError`): [`BadGatewayError`](BadGatewayError.md)

#### Parameters

▪ **badGatewayError**: [`BadGatewayErrorProperties`](../interfaces/BadGatewayErrorProperties.md)

#### Returns

[`BadGatewayError`](BadGatewayError.md)

#### Source

models/BadGatewayError.ts:39

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `code` | [`BadGatewayErrorCodeEnum`](../type-aliases/BadGatewayErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. | models/BadGatewayError.ts:32 |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. | models/BadGatewayError.ts:37 |
