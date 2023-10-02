[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > HotelProperties

# Interface: HotelProperties

## Extends

-   [`TravelProductProperties`](interface.TravelProductProperties.md)

## Properties

| Property               | Type                                                                                                 |
| :--------------------- | :--------------------------------------------------------------------------------------------------- |
| `address`              | [`HotelAllOfAddress`](../classes/class.HotelAllOfAddress.md)                                         |
| `checkinTime`          | `Date`                                                                                               |
| `checkoutTime`         | `Date`                                                                                               |
| `hotelId`              | `string`                                                                                             |
| `hotelName`            | `string`                                                                                             |
| `inventorySource`      | [`TravelProductInventorySourceEnum`](../type-aliases/type-alias.TravelProductInventorySourceEnum.md) |
| `inventoryType`        | `string`                                                                                             |
| `payLater`?            | `boolean`                                                                                            |
| `price`                | [`Amount`](../classes/class.Amount.md)                                                               |
| `priceWithheld`?       | `boolean`                                                                                            |
| `roomCount`?           | `number`                                                                                             |
| `travelersReferences`? | `string`[]                                                                                           |
