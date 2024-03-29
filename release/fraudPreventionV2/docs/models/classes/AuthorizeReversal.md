[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / AuthorizeReversal

# Class: AuthorizeReversal

Authorize Reversal operation on the payment. An authorize reversal operation represents a notification received usually from a 3rd party payment processor to indicate that an authorization hold should be released as a result of a sale being partially or completely cancelled.

## Constructors

### new AuthorizeReversal(authorizeReversal)

> **new AuthorizeReversal**(`authorizeReversal`): [`AuthorizeReversal`](AuthorizeReversal.md)

#### Parameters

• **authorizeReversal**: [`AuthorizeReversalProperties`](../interfaces/AuthorizeReversalProperties.md)

#### Returns

[`AuthorizeReversal`](AuthorizeReversal.md)

#### Source

models/AuthorizeReversal.ts:47

## Properties

| Property | Type |
| :------ | :------ |
| `amount?` | [`Amount`](Amount.md) |
| `id?` | `string` |
| `outcome?` | [`PaymentOutcome`](PaymentOutcome.md) |
