[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / Operations

# Class: Operations

All operations related to a payment throughout its lifespan. An operation represents an event external to Fraud Prevention Service that specifies to perform a payment operation. Possible operation types include:  - `Verify`  - `Authorize`  - `AuthorizeReversal`  - `Capture`  - `Refund`

## Constructors

### new Operations(operations)

> **new Operations**(`operations`): [`Operations`](Operations.md)

#### Parameters

• **operations**: [`OperationsProperties`](../interfaces/OperationsProperties.md)

#### Returns

[`Operations`](Operations.md)

#### Source

models/Operations.ts:68

## Properties

| Property | Type |
| :------ | :------ |
| `authorize?` | [`Authorize`](Authorize.md) |
| `authorizeReversal?` | [`AuthorizeReversal`](AuthorizeReversal.md) |
| `capture?` | [`Capture`](Capture.md) |
| `refunds?` | [`Refund`](Refund.md)[] |
| `verify?` | [`Verify`](Verify.md) |
