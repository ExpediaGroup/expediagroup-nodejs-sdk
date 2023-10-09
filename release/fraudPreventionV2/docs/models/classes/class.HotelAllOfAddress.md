[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > HotelAllOfAddress

# Class: HotelAllOfAddress

## Constructors

### constructor()

> **new HotelAllOfAddress**(`hotelAllOfAddress`): [`HotelAllOfAddress`](class.HotelAllOfAddress.md)

#### Parameters

| Parameter           | Type                                                                                    |
| :------------------ | :-------------------------------------------------------------------------------------- |
| `hotelAllOfAddress` | [`HotelAllOfAddressProperties`](../interfaces/interface.HotelAllOfAddressProperties.md) |

#### Returns

[`HotelAllOfAddress`](class.HotelAllOfAddress.md)

#### Source

models/HotelAllOfAddress.ts:58

## Properties

| Property        | Type                                                                                                 | Description                                                           |
| :-------------- | :--------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| `addressLine1`  | `string`                                                                                             | Address line 1 of the address provided.                               |
| `addressLine2`? | `string`                                                                                             | Address line 2 of the address provided.                               |
| `addressType`?  | [`HotelAllOfAddressAddressTypeEnum`](../type-aliases/type-alias.HotelAllOfAddressAddressTypeEnum.md) | -                                                                     |
| `city`          | `string`                                                                                             | City of the address provided.                                         |
| `countryCode`   | `string`                                                                                             | ISO alpha-3 country code of the address provided.                     |
| `state`         | `string`                                                                                             | The two-characters ISO code for the state or province of the address. |
| `zipCode`       | `string`                                                                                             | Zip code of the address provided.                                     |
