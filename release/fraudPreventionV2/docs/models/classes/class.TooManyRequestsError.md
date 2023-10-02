[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > TooManyRequestsError

# Class: TooManyRequestsError

Indicates that the API cannot fulfill the request because server resources have been exhausted. Perhaps the client has sent too many requests in a given amount of time or has reached some specific quota. Please check the rate limits for the product and adjust as necessary before retries. If you believe the rate limit was incorrect or if you need a different rate limit, please reach out to the \<support team\> regarding the next steps.

## Constructors

### constructor()

> **new TooManyRequestsError**(`tooManyRequestsError`): [`TooManyRequestsError`](class.TooManyRequestsError.md)

#### Parameters

| Parameter              | Type                                                                                          |
| :--------------------- | :-------------------------------------------------------------------------------------------- |
| `tooManyRequestsError` | [`TooManyRequestsErrorProperties`](../interfaces/interface.TooManyRequestsErrorProperties.md) |

#### Returns

[`TooManyRequestsError`](class.TooManyRequestsError.md)

#### Source

models/TooManyRequestsError.ts:39

## Properties

| Property  | Type                                                                                         | Description                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `code`    | [`TooManyRequestsErrorCodeEnum`](../type-aliases/type-alias.TooManyRequestsErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string`                                                                                     | A human-readable explanation of the error, specific to this error occurrence.                                  |
