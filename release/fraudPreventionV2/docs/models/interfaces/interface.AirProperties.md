[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AirProperties

# Interface: AirProperties

## Extends

-   [`TravelProductProperties`](interface.TravelProductProperties.md)

## Properties

| Property                        | Type                                                                                                 |
| :------------------------------ | :--------------------------------------------------------------------------------------------------- |
| `airSegments`                   | [`AirSegment`](../classes/class.AirSegment.md)[]                                                     |
| `arrivalTime`                   | `Date`                                                                                               |
| `departureTime`                 | `Date`                                                                                               |
| `flightType`?                   | [`AirFlightTypeEnum`](../type-aliases/type-alias.AirFlightTypeEnum.md)                               |
| `globalDistributionSystemType`? | `string`                                                                                             |
| `inventorySource`               | [`TravelProductInventorySourceEnum`](../type-aliases/type-alias.TravelProductInventorySourceEnum.md) |
| `inventoryType`                 | `string`                                                                                             |
| `passengerNameRecord`?          | `string`                                                                                             |
| `price`                         | [`Amount`](../classes/class.Amount.md)                                                               |
| `travelersReferences`           | `string`[]                                                                                           |
