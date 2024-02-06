[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / AirProperties

# Interface: AirProperties

## Extends

- [`TravelProductProperties`](TravelProductProperties.md)

## Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `airSegments` | [`AirSegment`](../classes/AirSegment.md)[] | - |
| `arrivalTime` | `Date` | - |
| `departureTime` | `Date` | - |
| `flightType?` | [`AirFlightTypeEnum`](../type-aliases/AirFlightTypeEnum.md) | - |
| `globalDistributionSystemType?` | `string` | - |
| `inventorySource` | [`TravelProductInventorySourceEnum`](../type-aliases/TravelProductInventorySourceEnum.md) | [`TravelProductProperties`](TravelProductProperties.md).`inventorySource` |
| `inventoryType` | `string` | [`TravelProductProperties`](TravelProductProperties.md).`inventoryType` |
| `passengerNameRecord?` | `string` | - |
| `payLater?` | `boolean` | [`TravelProductProperties`](TravelProductProperties.md).`payLater` |
| `price` | [`Amount`](../classes/Amount.md) | [`TravelProductProperties`](TravelProductProperties.md).`price` |
| `travelersReferences?` | `string`[] | [`TravelProductProperties`](TravelProductProperties.md).`travelersReferences` |
