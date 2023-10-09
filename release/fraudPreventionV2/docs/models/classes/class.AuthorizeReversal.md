[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AuthorizeReversal

# Class: AuthorizeReversal

Authorize Reversal operation on the payment. An authorize reversal operation represents a notification received usually from a 3rd party payment processor to indicate that an authorization hold should be released as a result of a sale being partially or completely cancelled.

## Constructors

### constructor()

> **new AuthorizeReversal**(`authorizeReversal`): [`AuthorizeReversal`](class.AuthorizeReversal.md)

#### Parameters

| Parameter           | Type                                                                                    |
| :------------------ | :-------------------------------------------------------------------------------------- |
| `authorizeReversal` | [`AuthorizeReversalProperties`](../interfaces/interface.AuthorizeReversalProperties.md) |

#### Returns

[`AuthorizeReversal`](class.AuthorizeReversal.md)

#### Source

models/AuthorizeReversal.ts:47

## Properties

| Property   | Type                                        |
| :--------- | :------------------------------------------ |
| `amount`?  | [`Amount`](class.Amount.md)                 |
| `id`?      | `string`                                    |
| `outcome`? | [`PaymentOutcome`](class.PaymentOutcome.md) |
