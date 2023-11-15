[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / MultiFactorAuthenticationUpdate

# Class: MultiFactorAuthenticationUpdate

Information specific to a user\'s response to a Multi-Factor Authentication initiated by the Partner\'s system as a result of a fraud recommendation.

## Extends

- [`AccountUpdateRequest`](AccountUpdateRequest.md)

## Constructors

### new MultiFactorAuthenticationUpdate(multiFactorAuthenticationUpdate)

> **new MultiFactorAuthenticationUpdate**(`multiFactorAuthenticationUpdate`): [`MultiFactorAuthenticationUpdate`](MultiFactorAuthenticationUpdate.md)

#### Parameters

▪ **multiFactorAuthenticationUpdate**: [`MultiFactorAuthenticationUpdateProperties`](../interfaces/MultiFactorAuthenticationUpdateProperties.md)

#### Returns

[`MultiFactorAuthenticationUpdate`](MultiFactorAuthenticationUpdate.md)

#### Overrides

[`AccountUpdateRequest`](AccountUpdateRequest.md).[`constructor`](AccountUpdateRequest.md#constructors)

#### Source

models/MultiFactorAuthenticationUpdate.ts:43

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `multiFactorAuthenticationAttempts` | [`MultiFactorAuthenticationAttempt`](MultiFactorAuthenticationAttempt.md)[] | - | - | models/MultiFactorAuthenticationUpdate.ts:38 |
| `public` | `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `AccountScreenResponse`. | [`AccountUpdateRequest`](AccountUpdateRequest.md).`riskId` | models/AccountUpdateRequest.ts:32 |
| `readonly` | `type` | `"MULTI_FACTOR_AUTHENTICATION_UPDATE"` | - | - | models/MultiFactorAuthenticationUpdate.ts:41 |
