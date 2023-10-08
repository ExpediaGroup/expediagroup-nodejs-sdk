[API](../../index.md) > [models](../index.md) > Verify

# Class: Verify

A verify operation represents the intent to verify the payment associated with this transaction.

## Constructors

### new Verify(verify)

> **new Verify**(`verify`): [`Verify`](Verify.md)

#### Parameters

▪ **verify**: [`VerifyProperties`](../interfaces/VerifyProperties.md)

#### Source

models/Verify.ts:50

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `amount?` | [`Amount`](Amount.md) | - | models/Verify.ts:41 |
| `id?` | `string` | - | models/Verify.ts:36 |
| `outcome?` | [`PaymentOutcome`](PaymentOutcome.md) | - | models/Verify.ts:46 |
| `type?` | [`VerificationType`](../type-aliases/VerificationType.md) | - | models/Verify.ts:48 |
