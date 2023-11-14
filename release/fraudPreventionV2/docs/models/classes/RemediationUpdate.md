[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / RemediationUpdate

# Class: RemediationUpdate

Information specific to remediation actions initiated by the Partner\'s system to a user as a result of a fraud recommendation.

## Extends

- [`AccountUpdateRequest`](AccountUpdateRequest.md)

## Constructors

### new RemediationUpdate(remediationUpdate)

> **new RemediationUpdate**(`remediationUpdate`): [`RemediationUpdate`](RemediationUpdate.md)

#### Parameters

▪ **remediationUpdate**: [`RemediationUpdateProperties`](../interfaces/RemediationUpdateProperties.md)

#### Returns

[`RemediationUpdate`](RemediationUpdate.md)

#### Overrides

[`AccountUpdateRequest`](AccountUpdateRequest.md).[`constructor`](AccountUpdateRequest.md#constructors)

#### Source

models/RemediationUpdate.ts:42

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `remediationUpdateActions` | [`RemediationUpdateAction`](RemediationUpdateAction.md)[] | - | - | models/RemediationUpdate.ts:37 |
| `public` | `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `AccountScreenResponse`. | [`AccountUpdateRequest`](AccountUpdateRequest.md).`riskId` | models/AccountUpdateRequest.ts:32 |
| `readonly` | `type` | `"REMEDIATION_UPDATE"` | - | - | models/RemediationUpdate.ts:40 |
