[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > PaymentUpdate

# Class: PaymentUpdate

Payment related data that should be updated.

## Extends

-   [`OrderPurchaseUpdateRequest`](class.OrderPurchaseUpdateRequest.md)

## Constructors

### constructor()

> **new PaymentUpdate**(`paymentUpdate`): [`PaymentUpdate`](class.PaymentUpdate.md)

#### Parameters

| Parameter       | Type                                                                            |
| :-------------- | :------------------------------------------------------------------------------ |
| `paymentUpdate` | [`PaymentUpdateProperties`](../interfaces/interface.PaymentUpdateProperties.md) |

#### Returns

[`PaymentUpdate`](class.PaymentUpdate.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](class.OrderPurchaseUpdateRequest.md).[`constructor`](class.OrderPurchaseUpdateRequest.md#constructor)

#### Source

models/PaymentUpdate.ts:39

## Properties

| Property            | Type               | Description                                                                                                                                   |
| :------------------ | :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `merchantOrderCode` | `string`           | Reference code passed to acquiring bank at the time of payment. This code is the key ID that ties back to payments data at the payment level. |
| `riskId`            | `string`           | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`.                                           |
| `readonly` `type`   | `"PAYMENT_UPDATE"` | -                                                                                                                                             |
