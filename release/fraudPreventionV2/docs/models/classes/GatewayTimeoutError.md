[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / GatewayTimeoutError

# Class: GatewayTimeoutError

Indicates that the API gateway has issues completing the request on time. Request can be retried if it is idempotent, If the issue persists, please reach out to support. For non-idempotent requests, please reach out to `<support team>`  to know the status of your request before attempting retries.

## Constructors

### new GatewayTimeoutError(gatewayTimeoutError)

> **new GatewayTimeoutError**(`gatewayTimeoutError`): [`GatewayTimeoutError`](GatewayTimeoutError.md)

#### Parameters

▪ **gatewayTimeoutError**: [`GatewayTimeoutErrorProperties`](../interfaces/GatewayTimeoutErrorProperties.md)

#### Returns

[`GatewayTimeoutError`](GatewayTimeoutError.md)

#### Source

models/GatewayTimeoutError.ts:39

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `code` | [`GatewayTimeoutErrorCodeEnum`](../type-aliases/GatewayTimeoutErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. | models/GatewayTimeoutError.ts:32 |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. | models/GatewayTimeoutError.ts:37 |
