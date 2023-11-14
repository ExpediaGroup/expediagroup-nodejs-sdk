[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / CustomerAccountAddress

# Class: CustomerAccountAddress

## Constructors

### new CustomerAccountAddress(customerAccountAddress)

> **new CustomerAccountAddress**(`customerAccountAddress`): [`CustomerAccountAddress`](CustomerAccountAddress.md)

#### Parameters

▪ **customerAccountAddress**: [`CustomerAccountAddressProperties`](../interfaces/CustomerAccountAddressProperties.md)

#### Returns

[`CustomerAccountAddress`](CustomerAccountAddress.md)

#### Source

models/CustomerAccountAddress.ts:58

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `addressLine1` | `string` | Address line 1 of the address provided. | models/CustomerAccountAddress.ts:31 |
| `addressLine2`? | `string` | Address line 2 of the address provided. | models/CustomerAccountAddress.ts:36 |
| `addressType`? | [`CustomerAccountAddressAddressTypeEnum`](../type-aliases/CustomerAccountAddressAddressTypeEnum.md) | - | models/CustomerAccountAddress.ts:26 |
| `city` | `string` | City of the address provided. | models/CustomerAccountAddress.ts:41 |
| `countryCode` | `string` | ISO alpha-3 country code of the address provided. | models/CustomerAccountAddress.ts:56 |
| `state` | `string` | The two-characters ISO code for the state or province of the address. | models/CustomerAccountAddress.ts:46 |
| `zipCode` | `string` | Zip code of the address provided. | models/CustomerAccountAddress.ts:51 |
