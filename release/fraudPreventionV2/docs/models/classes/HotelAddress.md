[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / HotelAddress

# Class: HotelAddress

Address of a hotel.

## Constructors

### new HotelAddress(hotelAddress)

> **new HotelAddress**(`hotelAddress`): [`HotelAddress`](HotelAddress.md)

#### Parameters

▪ **hotelAddress**: [`HotelAddressProperties`](../interfaces/HotelAddressProperties.md)

#### Returns

[`HotelAddress`](HotelAddress.md)

#### Source

models/HotelAddress.ts:61

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `addressLine1` | `string` | Address line 1 of the address provided. | models/HotelAddress.ts:34 |
| `addressLine2`? | `string` | Address line 2 of the address provided. | models/HotelAddress.ts:39 |
| `addressType`? | [`HotelAddressAddressTypeEnum`](../type-aliases/HotelAddressAddressTypeEnum.md) | - | models/HotelAddress.ts:29 |
| `city` | `string` | City of the address provided. | models/HotelAddress.ts:44 |
| `countryCode` | `string` | ISO alpha-3 country code of the address provided. | models/HotelAddress.ts:59 |
| `state` | `string` | The two-characters ISO code for the state or province of the address. | models/HotelAddress.ts:49 |
| `zipCode` | `string` | Zip code of the address provided. | models/HotelAddress.ts:54 |
