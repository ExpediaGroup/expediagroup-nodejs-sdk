[API](../../index.md) > [models](../index.md) > CruiseProperties

# Interface: CruiseProperties

## Extends

- [`TravelProductProperties`](TravelProductProperties.md)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `arrivalTime` | `Date` | - | - | models/Cruise.ts:74 |
| `departureTime` | `Date` | - | - | models/Cruise.ts:73 |
| `disembarkationPort` | `string` | - | - | models/Cruise.ts:76 |
| `embarkationPort` | `string` | - | - | models/Cruise.ts:75 |
| `inventorySource` | [`TravelProductInventorySourceEnum`](../type-aliases/TravelProductInventorySourceEnum.md) | - | [`TravelProductProperties`](TravelProductProperties.md).`inventorySource` | models/TravelProduct.ts:70 |
| `inventoryType` | `string` | - | [`TravelProductProperties`](TravelProductProperties.md).`inventoryType` | models/TravelProduct.ts:69 |
| `payLater?` | `boolean` | - | [`TravelProductProperties`](TravelProductProperties.md).`payLater` | models/TravelProduct.ts:72 |
| `price` | [`Amount`](../classes/Amount.md) | - | [`TravelProductProperties`](TravelProductProperties.md).`price` | models/TravelProduct.ts:68 |
| `shipName` | `string` | - | - | models/Cruise.ts:77 |
| `travelersReferences?` | `string`[] | - | [`TravelProductProperties`](TravelProductProperties.md).`travelersReferences` | models/TravelProduct.ts:71 |
