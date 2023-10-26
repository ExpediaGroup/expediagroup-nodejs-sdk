[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Operations

# Class: Operations

All operations related to a payment throughout its lifespan. An operation represents an event external to Fraud Prevention Service that specifies to perform a payment operation. Possible operation types include:  - `Verify`  - `Authorize`  - `AuthorizeReversal`  - `Capture`  - `Refund`

## Constructors

### new Operations(operations)

> **new Operations**(`operations`): [`Operations`](Operations.md)

#### Parameters

▪ **operations**: [`OperationsProperties`](../interfaces/OperationsProperties.md)

#### Source

models/Operations.ts:68

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `authorize`? | [`Authorize`](Authorize.md) | - | models/Operations.ts:51 |
| `authorizeReversal`? | [`AuthorizeReversal`](AuthorizeReversal.md) | - | models/Operations.ts:56 |
| `capture`? | [`Capture`](Capture.md) | - | models/Operations.ts:61 |
| `refunds`? | [`Refund`](Refund.md)[] | - | models/Operations.ts:66 |
| `verify`? | [`Verify`](Verify.md) | - | models/Operations.ts:46 |
