[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / HotelProperties

# Interface: HotelProperties

## Extends

- [`TravelProductProperties`](TravelProductProperties.md)

## Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `address` | [`HotelAddress`](../classes/HotelAddress.md) | - |
| `checkinTime` | `Date` | - |
| `checkoutTime` | `Date` | - |
| `hotelId` | `string` | - |
| `hotelName` | `string` | - |
| `inventorySource` | [`TravelProductInventorySourceEnum`](../type-aliases/TravelProductInventorySourceEnum.md) | [`TravelProductProperties`](TravelProductProperties.md).`inventorySource` |
| `inventoryType` | `string` | [`TravelProductProperties`](TravelProductProperties.md).`inventoryType` |
| `payLater?` | `boolean` | [`TravelProductProperties`](TravelProductProperties.md).`payLater` |
| `price` | [`Amount`](../classes/Amount.md) | [`TravelProductProperties`](TravelProductProperties.md).`price` |
| `priceWithheld?` | `boolean` | - |
| `roomCount?` | `number` | - |
| `travelersReferences?` | `string`[] | [`TravelProductProperties`](TravelProductProperties.md).`travelersReferences` |
