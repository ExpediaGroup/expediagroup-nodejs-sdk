[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > HotelProperties

# Interface: HotelProperties

## Extends

- [`TravelProductProperties`](TravelProductProperties.md)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `address` | [`HotelAddress`](../classes/HotelAddress.md) | - | - | models/Hotel.ts:92 |
| `checkinTime` | `Date` | - | - | models/Hotel.ts:93 |
| `checkoutTime` | `Date` | - | - | models/Hotel.ts:94 |
| `hotelId` | `string` | - | - | models/Hotel.ts:88 |
| `hotelName` | `string` | - | - | models/Hotel.ts:90 |
| `inventorySource` | [`TravelProductInventorySourceEnum`](../type-aliases/TravelProductInventorySourceEnum.md) | - | [`TravelProductProperties`](TravelProductProperties.md).`inventorySource` | models/TravelProduct.ts:70 |
| `inventoryType` | `string` | - | [`TravelProductProperties`](TravelProductProperties.md).`inventoryType` | models/TravelProduct.ts:69 |
| `payLater`? | `boolean` | - | [`TravelProductProperties`](TravelProductProperties.md).`payLater` | models/TravelProduct.ts:72 |
| `price` | [`Amount`](../classes/Amount.md) | - | [`TravelProductProperties`](TravelProductProperties.md).`price` | models/TravelProduct.ts:68 |
| `priceWithheld`? | `boolean` | - | - | models/Hotel.ts:89 |
| `roomCount`? | `number` | - | - | models/Hotel.ts:91 |
| `travelersReferences`? | `string`[] | - | [`TravelProductProperties`](TravelProductProperties.md).`travelersReferences` | models/TravelProduct.ts:71 |
