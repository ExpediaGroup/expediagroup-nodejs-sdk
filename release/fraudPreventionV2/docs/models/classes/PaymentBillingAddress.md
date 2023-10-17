[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > PaymentBillingAddress

# Class: PaymentBillingAddress

## Constructors

### new PaymentBillingAddress(paymentBillingAddress)

> **new PaymentBillingAddress**(`paymentBillingAddress`): [`PaymentBillingAddress`](PaymentBillingAddress.md)

#### Parameters

▪ **paymentBillingAddress**: [`PaymentBillingAddressProperties`](../interfaces/PaymentBillingAddressProperties.md)

#### Source

models/PaymentBillingAddress.ts:58

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `addressLine1` | `string` | Address line 1 of the address provided. | models/PaymentBillingAddress.ts:31 |
| `addressLine2?` | `string` | Address line 2 of the address provided. | models/PaymentBillingAddress.ts:36 |
| `addressType?` | [`PaymentBillingAddressAddressTypeEnum`](../type-aliases/PaymentBillingAddressAddressTypeEnum.md) | - | models/PaymentBillingAddress.ts:26 |
| `city` | `string` | City of the address provided. | models/PaymentBillingAddress.ts:41 |
| `countryCode` | `string` | ISO alpha-3 country code of the address provided. | models/PaymentBillingAddress.ts:56 |
| `state?` | `string` | The two-characters ISO code for the state or province of the address. | models/PaymentBillingAddress.ts:46 |
| `zipCode` | `string` | Zip code of the address provided. | models/PaymentBillingAddress.ts:51 |
