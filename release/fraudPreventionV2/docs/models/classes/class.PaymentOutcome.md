[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > PaymentOutcome

# Class: PaymentOutcome

## Constructors

### constructor()

> **new PaymentOutcome**(`paymentOutcome`): [`PaymentOutcome`](class.PaymentOutcome.md)

#### Parameters

| Parameter        | Type                                                                              |
| :--------------- | :-------------------------------------------------------------------------------- |
| `paymentOutcome` | [`PaymentOutcomeProperties`](../interfaces/interface.PaymentOutcomeProperties.md) |

#### Returns

[`PaymentOutcome`](class.PaymentOutcome.md)

#### Source

models/PaymentOutcome.ts:39

## Properties

| Property       | Type                                                           | Description                                                                       |
| :------------- | :------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| `code`?        | `string`                                                       | A mnemonic code for the payment processing.                                       |
| `description`? | `string`                                                       | A short description providing additional explanation regarding the mnemonic code. |
| `status`?      | [`PaymentStatus`](../type-aliases/type-alias.PaymentStatus.md) | -                                                                                 |
