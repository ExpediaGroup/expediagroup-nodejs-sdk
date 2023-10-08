[API](../../index.md) > [models](../index.md) > AirProperties

# Interface: AirProperties

## Extends

- [`TravelProductProperties`](TravelProductProperties.md)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `airSegments` | [`AirSegment`](../classes/AirSegment.md)[] | - | - | models/Air.ts:89 |
| `arrivalTime` | `Date` | - | - | models/Air.ts:88 |
| `departureTime` | `Date` | - | - | models/Air.ts:87 |
| `flightType?` | [`AirFlightTypeEnum`](../type-aliases/AirFlightTypeEnum.md) | - | - | models/Air.ts:90 |
| `globalDistributionSystemType?` | `string` | - | - | models/Air.ts:92 |
| `inventorySource` | [`TravelProductInventorySourceEnum`](../type-aliases/TravelProductInventorySourceEnum.md) | - | [`TravelProductProperties`](TravelProductProperties.md).`inventorySource` | models/TravelProduct.ts:70 |
| `inventoryType` | `string` | - | [`TravelProductProperties`](TravelProductProperties.md).`inventoryType` | models/TravelProduct.ts:69 |
| `passengerNameRecord?` | `string` | - | - | models/Air.ts:91 |
| `payLater?` | `boolean` | - | [`TravelProductProperties`](TravelProductProperties.md).`payLater` | models/TravelProduct.ts:72 |
| `price` | [`Amount`](../classes/Amount.md) | - | [`TravelProductProperties`](TravelProductProperties.md).`price` | models/TravelProduct.ts:68 |
| `travelersReferences?` | `string`[] | - | [`TravelProductProperties`](TravelProductProperties.md).`travelersReferences` | models/TravelProduct.ts:71 |
