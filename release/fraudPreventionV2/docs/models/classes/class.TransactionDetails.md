[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > TransactionDetails

# Class: TransactionDetails

## Constructors

### constructor()

> **new TransactionDetails**(`transactionDetails`): [`TransactionDetails`](class.TransactionDetails.md)

#### Parameters

| Parameter            | Type                                                                                      |
| :------------------- | :---------------------------------------------------------------------------------------- |
| `transactionDetails` | [`TransactionDetailsProperties`](../interfaces/interface.TransactionDetailsProperties.md) |

#### Returns

[`TransactionDetails`](class.TransactionDetails.md)

#### Source

models/TransactionDetails.ts:71

## Properties

| Property             | Type                                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------------------- | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `currentOrderStatus` | [`TransactionDetailsCurrentOrderStatusEnum`](../type-aliases/type-alias.TransactionDetailsCurrentOrderStatusEnum.md) | Status of the order: _ `IN_PROGRESS` is used when order has not processed fully. For example, inventory has not yet been reserved, or payment has not yet been settled. _ `COMPLETED` is used when an order has been processed fully. For example, inventory has been reserved, and the payment has been settled.                                                                                                                                 |
| `orderId`            | `string`                                                                                                             | Unique identifier assigned to the order by the partner. `order_id` is specific to the partner namespace.                                                                                                                                                                                                                                                                                                                                          |
| `orderType`          | [`TransactionDetailsOrderTypeEnum`](../type-aliases/type-alias.TransactionDetailsOrderTypeEnum.md)                   | Type of order. Possible `order_types`. `CREATE` - Initial type of a brand new order. `CHANGE` - If a `OrderPurchaseScreenRequest` has already been submitted for the initial booking with `order_type = CREATE`, but has now been modified and partner wishes to resubmit for Fraud screening then the `order_type = CHANGE`. Examples of changes that are supported are changes made to `check-in/checkout dates` or `price of a TravelProduct`. |
| `payments`           | [`Payment`](class.Payment.md)[]                                                                                      | List of the form(s) of payment being used to purchase the order. One or more forms of payment can be used within an order. Information gathered will be specific to the form of payment.                                                                                                                                                                                                                                                          |
| `travelProducts`     | [`TravelProduct`](class.TravelProduct.md)[]                                                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `travelers`          | [`Traveler`](class.Traveler.md)[]                                                                                    | Individuals who are part of the travel party for the order. At minimum there must be at least `1` traveler.                                                                                                                                                                                                                                                                                                                                       |
