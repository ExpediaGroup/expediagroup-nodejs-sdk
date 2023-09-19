[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > CustomerAccountAddress

# Class: CustomerAccountAddress

## Constructors

### constructor()

> **new CustomerAccountAddress**(`customerAccountAddress`): [`CustomerAccountAddress`](class.CustomerAccountAddress.md)

#### Parameters

| Parameter                | Type                                                                                              |
| :----------------------- | :------------------------------------------------------------------------------------------------ |
| `customerAccountAddress` | [`CustomerAccountAddressProperties`](../interfaces/interface.CustomerAccountAddressProperties.md) |

#### Returns

[`CustomerAccountAddress`](class.CustomerAccountAddress.md)

#### Source

models/CustomerAccountAddress.ts:58

## Properties

| Property        | Type                                                                                                           | Description                                                           |
| :-------------- | :------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| `addressLine1`  | `string`                                                                                                       | Address line 1 of the address provided.                               |
| `addressLine2`? | `string`                                                                                                       | Address line 2 of the address provided.                               |
| `addressType`?  | [`CustomerAccountAddressAddressTypeEnum`](../type-aliases/type-alias.CustomerAccountAddressAddressTypeEnum.md) | -                                                                     |
| `city`          | `string`                                                                                                       | City of the address provided.                                         |
| `countryCode`   | `string`                                                                                                       | ISO alpha-3 country code of the address provided.                     |
| `state`         | `string`                                                                                                       | The two-characters ISO code for the state or province of the address. |
| `zipCode`       | `string`                                                                                                       | Zip code of the address provided.                                     |
