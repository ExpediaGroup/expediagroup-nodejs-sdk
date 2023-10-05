[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > OrderPurchaseUpdateNotFoundError

# Class: OrderPurchaseUpdateNotFoundError

Indicates that the API cannot find the resource that is either being requested or against which the operation is being performed.

## Constructors

### constructor()

> **new OrderPurchaseUpdateNotFoundError**(`orderPurchaseUpdateNotFoundError`): [`OrderPurchaseUpdateNotFoundError`](class.OrderPurchaseUpdateNotFoundError.md)

#### Parameters

| Parameter                          | Type                                                                                                                  |
| :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| `orderPurchaseUpdateNotFoundError` | [`OrderPurchaseUpdateNotFoundErrorProperties`](../interfaces/interface.OrderPurchaseUpdateNotFoundErrorProperties.md) |

#### Returns

[`OrderPurchaseUpdateNotFoundError`](class.OrderPurchaseUpdateNotFoundError.md)

#### Source

models/OrderPurchaseUpdateNotFoundError.ts:39

## Properties

| Property  | Type                                                                                                                 | Description                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `code`    | [`OrderPurchaseUpdateNotFoundErrorCodeEnum`](../type-aliases/type-alias.OrderPurchaseUpdateNotFoundErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. |
| `message` | `string`                                                                                                             | A human-readable explanation of the error, specific to this error occurrence.                                  |