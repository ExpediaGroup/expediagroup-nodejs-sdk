[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > GatewayTimeoutError

# Class: GatewayTimeoutError

Indicates that the API gateway has issues completing the request on time. Request can be retried if it is idempotent, If the issue persists, please reach out to support. For non-idempotent requests, please reach out to \<support team\> to know the status of your request before attempting retries.

## Constructors

### constructor()

> **new GatewayTimeoutError**(`gatewayTimeoutError`): [`GatewayTimeoutError`](class.GatewayTimeoutError.md)

#### Parameters

| Parameter             | Type                                                                                        |
| :-------------------- | :------------------------------------------------------------------------------------------ |
| `gatewayTimeoutError` | [`GatewayTimeoutErrorProperties`](../interfaces/interface.GatewayTimeoutErrorProperties.md) |

#### Returns

[`GatewayTimeoutError`](class.GatewayTimeoutError.md)

#### Source

models/GatewayTimeoutError.ts:39

## Properties

| Property  | Type                                                                                       | Description                                                                                                    |
| :-------- | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `code`    | [`GatewayTimeoutErrorCodeEnum`](../type-aliases/type-alias.GatewayTimeoutErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string`                                                                                   | A human-readable explanation of the error, specific to this error occurrence.                                  |
