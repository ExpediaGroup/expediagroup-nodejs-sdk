[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Amount

# Class: Amount

## Constructors

### constructor()

> **new Amount**(`amount`): [`Amount`](class.Amount.md)

#### Parameters

| Parameter | Type                                                              |
| :-------- | :---------------------------------------------------------------- |
| `amount`  | [`AmountProperties`](../interfaces/interface.AmountProperties.md) |

#### Returns

[`Amount`](class.Amount.md)

#### Source

models/Amount.ts:36

## Properties

| Property       | Type     | Description                                                                                            |
| :------------- | :------- | :----------------------------------------------------------------------------------------------------- |
| `currencyCode` | `string` | The ISO alpha-3 country code for the amount currency.                                                  |
| `value`        | `number` | The amount required in payment for the product/order in local currency (including any taxes and fees). |
