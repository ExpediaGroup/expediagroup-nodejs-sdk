[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / ActivityProperties

# Interface: ActivityProperties

## Extends

- [`TravelProductProperties`](TravelProductProperties.md)

## Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `activityDescription` | `string` | - |
| `availablePolicy?` | [`AvailablePolicy`](../classes/AvailablePolicy.md) | - |
| `categoryName` | `string` | - |
| `coordinates` | [`Coordinates`](../classes/Coordinates.md) | - |
| `endDateTime?` | `Date` | - |
| `inventorySource` | [`TravelProductInventorySourceEnum`](../type-aliases/TravelProductInventorySourceEnum.md) | [`TravelProductProperties`](TravelProductProperties.md).`inventorySource` |
| `inventoryType` | `string` | [`TravelProductProperties`](TravelProductProperties.md).`inventoryType` |
| `isPassbook?` | `boolean` | - |
| `payLater?` | `boolean` | [`TravelProductProperties`](TravelProductProperties.md).`payLater` |
| `price` | [`Amount`](../classes/Amount.md) | [`TravelProductProperties`](TravelProductProperties.md).`price` |
| `startDateTime?` | `Date` | - |
| `supplyProvider` | [`SupplyProvider`](../classes/SupplyProvider.md) | - |
| `tickets` | [`Ticket`](../classes/Ticket.md)[] | - |
| `travelersReferences?` | `string`[] | [`TravelProductProperties`](TravelProductProperties.md).`travelersReferences` |
