[API](../../index.md) > [models](../index.md) > RetryableOrderPurchaseUpdateFailure

# Class: RetryableOrderPurchaseUpdateFailure

Indicates that the API is either down for maintenance or overloaded and cannot fulfill the request at the current time. This is a temporary error and retrying the same request after a certain delay could eventually result in success. There will be a Retry-After HTTP header in API response specifying how long to wait to retry the request. If there is no Retry-After HTTP header then retry can happen immediately. If the error persists after retrying with delay, please reach out to `<support team>` .\"

## Constructors

### new RetryableOrderPurchaseUpdateFailure(retryableOrderPurchaseUpdateFailure)

> **new RetryableOrderPurchaseUpdateFailure**(`retryableOrderPurchaseUpdateFailure`): [`RetryableOrderPurchaseUpdateFailure`](RetryableOrderPurchaseUpdateFailure.md)

#### Parameters

▪ **retryableOrderPurchaseUpdateFailure**: [`RetryableOrderPurchaseUpdateFailureProperties`](../interfaces/RetryableOrderPurchaseUpdateFailureProperties.md)

#### Source

models/RetryableOrderPurchaseUpdateFailure.ts:39

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `code` | [`RetryableOrderPurchaseUpdateFailureCodeEnum`](../type-aliases/RetryableOrderPurchaseUpdateFailureCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. | models/RetryableOrderPurchaseUpdateFailure.ts:32 |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. | models/RetryableOrderPurchaseUpdateFailure.ts:37 |
