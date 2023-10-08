[API](../../index.md) > [models](../index.md) > TooManyRequestsError

# Class: TooManyRequestsError

Indicates that the API cannot fulfill the request because server resources have been exhausted. Perhaps the client has sent too many requests in a given amount of time or has reached some specific quota. Please check the rate limits for the product and adjust as necessary before retries. If you believe the rate limit was incorrect or if you need a different rate limit, please reach out to the `<support team>`  regarding the next steps.

## Constructors

### new TooManyRequestsError(tooManyRequestsError)

> **new TooManyRequestsError**(`tooManyRequestsError`): [`TooManyRequestsError`](TooManyRequestsError.md)

#### Parameters

▪ **tooManyRequestsError**: [`TooManyRequestsErrorProperties`](../interfaces/TooManyRequestsErrorProperties.md)

#### Source

models/TooManyRequestsError.ts:39

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `code` | [`TooManyRequestsErrorCodeEnum`](../type-aliases/TooManyRequestsErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. | models/TooManyRequestsError.ts:32 |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. | models/TooManyRequestsError.ts:37 |
