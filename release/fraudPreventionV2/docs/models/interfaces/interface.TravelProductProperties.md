[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > TravelProductProperties

# Interface: TravelProductProperties

## Extended By

-   [`AirProperties`](interface.AirProperties.md)
-   [`CarProperties`](interface.CarProperties.md)
-   [`CruiseProperties`](interface.CruiseProperties.md)
-   [`HotelProperties`](interface.HotelProperties.md)
-   [`InsuranceProperties`](interface.InsuranceProperties.md)
-   [`RailProperties`](interface.RailProperties.md)

## Properties

| Property               | Type                                                                                                 |
| :--------------------- | :--------------------------------------------------------------------------------------------------- |
| `inventorySource`      | [`TravelProductInventorySourceEnum`](../type-aliases/type-alias.TravelProductInventorySourceEnum.md) |
| `inventoryType`        | `string`                                                                                             |
| `payLater`?            | `boolean`                                                                                            |
| `price`                | [`Amount`](../classes/class.Amount.md)                                                               |
| `travelersReferences`? | `string`[]                                                                                           |
