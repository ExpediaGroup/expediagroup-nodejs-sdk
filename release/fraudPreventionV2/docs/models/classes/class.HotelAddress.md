[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > HotelAddress

# Class: HotelAddress

Address of a hotel.

## Constructors

### constructor()

> **new HotelAddress**(`hotelAddress`): [`HotelAddress`](class.HotelAddress.md)

#### Parameters

| Parameter      | Type                                                                          |
| :------------- | :---------------------------------------------------------------------------- |
| `hotelAddress` | [`HotelAddressProperties`](../interfaces/interface.HotelAddressProperties.md) |

#### Returns

[`HotelAddress`](class.HotelAddress.md)

#### Source

models/HotelAddress.ts:61

## Properties

| Property        | Type                                                                                       | Description                                                           |
| :-------------- | :----------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| `addressLine1`  | `string`                                                                                   | Address line 1 of the address provided.                               |
| `addressLine2`? | `string`                                                                                   | Address line 2 of the address provided.                               |
| `addressType`?  | [`HotelAddressAddressTypeEnum`](../type-aliases/type-alias.HotelAddressAddressTypeEnum.md) | -                                                                     |
| `city`          | `string`                                                                                   | City of the address provided.                                         |
| `countryCode`   | `string`                                                                                   | ISO alpha-3 country code of the address provided.                     |
| `state`         | `string`                                                                                   | The two-characters ISO code for the state or province of the address. |
| `zipCode`       | `string`                                                                                   | Zip code of the address provided.                                     |
