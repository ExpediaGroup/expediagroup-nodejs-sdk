[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Address

# Class: Address

## Constructors

### constructor()

> **new Address**(`address`): [`Address`](class.Address.md)

#### Parameters

| Parameter | Type                                                                |
| :-------- | :------------------------------------------------------------------ |
| `address` | [`AddressProperties`](../interfaces/interface.AddressProperties.md) |

#### Returns

[`Address`](class.Address.md)

#### Source

models/Address.ts:58

## Properties

| Property        | Type                                                                             | Description                                                           |
| :-------------- | :------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| `addressLine1`? | `string`                                                                         | Address line 1 of the address provided.                               |
| `addressLine2`? | `string`                                                                         | Address line 2 of the address provided.                               |
| `addressType`?  | [`AddressAddressTypeEnum`](../type-aliases/type-alias.AddressAddressTypeEnum.md) | -                                                                     |
| `city`?         | `string`                                                                         | City of the address provided.                                         |
| `countryCode`?  | `string`                                                                         | ISO alpha-3 country code of the address provided.                     |
| `state`?        | `string`                                                                         | The two-characters ISO code for the state or province of the address. |
| `zipCode`?      | `string`                                                                         | Zip code of the address provided.                                     |
