[API](../../index.md) > [models](../index.md) > OrderPurchaseUpdateNotFoundError

# Class: OrderPurchaseUpdateNotFoundError

Indicates that the API cannot find the resource that is either being requested or against which the operation is being performed.

## Constructors

### new OrderPurchaseUpdateNotFoundError(orderPurchaseUpdateNotFoundError)

> **new OrderPurchaseUpdateNotFoundError**(`orderPurchaseUpdateNotFoundError`): [`OrderPurchaseUpdateNotFoundError`](OrderPurchaseUpdateNotFoundError.md)

#### Parameters

▪ **orderPurchaseUpdateNotFoundError**: [`OrderPurchaseUpdateNotFoundErrorProperties`](../interfaces/OrderPurchaseUpdateNotFoundErrorProperties.md)

#### Source

models/OrderPurchaseUpdateNotFoundError.ts:39

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `code` | [`OrderPurchaseUpdateNotFoundErrorCodeEnum`](../type-aliases/OrderPurchaseUpdateNotFoundErrorCodeEnum.md) | Snake cased all caps error code interpreted from the HTTP status code that can programmatically be acted upon. | models/OrderPurchaseUpdateNotFoundError.ts:32 |
| `message` | `string` | A human-readable explanation of the error, specific to this error occurrence. | models/OrderPurchaseUpdateNotFoundError.ts:37 |
