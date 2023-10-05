[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > RetryableOrderPurchaseScreenFailure

# Class: RetryableOrderPurchaseScreenFailure

Indicates that the API is either down for maintenance or overloaded and cannot fulfill the request at the current time. This is a temporary error and retrying the same request after a certain delay could eventually result in success. There will be a Retry-After HTTP header in API response specifying how long to wait to retry the request. If there is no Retry-After HTTP header then retry can happen immediately. If the error persists after retrying with delay, please reach out to \<support team\>.\"

## Constructors

### constructor()

> **new RetryableOrderPurchaseScreenFailure**(`retryableOrderPurchaseScreenFailure`): [`RetryableOrderPurchaseScreenFailure`](class.RetryableOrderPurchaseScreenFailure.md)

#### Parameters

| Parameter                             | Type                                                                                                                        |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------- |
| `retryableOrderPurchaseScreenFailure` | [`RetryableOrderPurchaseScreenFailureProperties`](../interfaces/interface.RetryableOrderPurchaseScreenFailureProperties.md) |

#### Returns

[`RetryableOrderPurchaseScreenFailure`](class.RetryableOrderPurchaseScreenFailure.md)

#### Source

models/RetryableOrderPurchaseScreenFailure.ts:39

## Properties

| Property  | Type                                                                                                                       | Description                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `code`    | [`RetryableOrderPurchaseScreenFailureCodeEnum`](../type-aliases/type-alias.RetryableOrderPurchaseScreenFailureCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string`                                                                                                                   | A human-readable explanation of the error, specific to this error occurrence.                                  |