[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > PaymentBillingAddress

# Class: PaymentBillingAddress

## Constructors

### constructor()

> **new PaymentBillingAddress**(`paymentBillingAddress`): [`PaymentBillingAddress`](class.PaymentBillingAddress.md)

#### Parameters

| Parameter               | Type                                                                                            |
| :---------------------- | :---------------------------------------------------------------------------------------------- |
| `paymentBillingAddress` | [`PaymentBillingAddressProperties`](../interfaces/interface.PaymentBillingAddressProperties.md) |

#### Returns

[`PaymentBillingAddress`](class.PaymentBillingAddress.md)

#### Source

models/PaymentBillingAddress.ts:58

## Properties

| Property        | Type                                                                                                         | Description                                                           |
| :-------------- | :----------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| `addressLine1`  | `string`                                                                                                     | Address line 1 of the address provided.                               |
| `addressLine2`? | `string`                                                                                                     | Address line 2 of the address provided.                               |
| `addressType`?  | [`PaymentBillingAddressAddressTypeEnum`](../type-aliases/type-alias.PaymentBillingAddressAddressTypeEnum.md) | -                                                                     |
| `city`          | `string`                                                                                                     | City of the address provided.                                         |
| `countryCode`   | `string`                                                                                                     | ISO alpha-3 country code of the address provided.                     |
| `state`?        | `string`                                                                                                     | The two-characters ISO code for the state or province of the address. |
| `zipCode`       | `string`                                                                                                     | Zip code of the address provided.                                     |
