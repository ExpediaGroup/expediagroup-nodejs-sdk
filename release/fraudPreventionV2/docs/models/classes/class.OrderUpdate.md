[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > OrderUpdate

# Class: OrderUpdate

Order related data that should be updated.

## Extends

-   [`OrderPurchaseUpdateRequest`](class.OrderPurchaseUpdateRequest.md)

## Constructors

### constructor()

> **new OrderUpdate**(`orderUpdate`): [`OrderUpdate`](class.OrderUpdate.md)

#### Parameters

| Parameter     | Type                                                                        |
| :------------ | :-------------------------------------------------------------------------- |
| `orderUpdate` | [`OrderUpdateProperties`](../interfaces/interface.OrderUpdateProperties.md) |

#### Returns

[`OrderUpdate`](class.OrderUpdate.md)

#### Overrides

[`OrderPurchaseUpdateRequest`](class.OrderPurchaseUpdateRequest.md).[`constructor`](class.OrderPurchaseUpdateRequest.md#constructor)

#### Source

models/OrderUpdate.ts:50

## Properties

| Property                   | Type                                                | Description                                                                                                                                                                                                                                                                                                                                                                              |
| :------------------------- | :-------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `acquirerReferenceNumber`? | `string`                                            | A unique number that tags a credit or debit card transaction when it goes from the merchant\'s bank through to the cardholder\'s bank. `acquirer_reference_number` is a required field only if `order_status` = `COMPLETED` Typically, merchants can get this number from their payment processors. This number is used when dealing with disputes/chargebacks on original transactions. |
| `cancellationReason`?      | [`CancellationReason`](class.CancellationReason.md) | -                                                                                                                                                                                                                                                                                                                                                                                        |
| `orderStatus`              | [`Status`](../type-aliases/type-alias.Status.md)    | -                                                                                                                                                                                                                                                                                                                                                                                        |
| `riskId`                   | `string`                                            | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `OrderPurchaseScreenResponse`.                                                                                                                                                                                                                                                                                      |
| `readonly` `type`          | `"ORDER_UPDATE"`                                    | -                                                                                                                                                                                                                                                                                                                                                                                        |
