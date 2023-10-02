[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > RemediationUpdate

# Class: RemediationUpdate

Information specific to remediation actions initiated by the Partner\'s system to a user as a result of a fraud recommendation.

## Extends

-   [`AccountUpdateRequest`](class.AccountUpdateRequest.md)

## Constructors

### constructor()

> **new RemediationUpdate**(`remediationUpdate`): [`RemediationUpdate`](class.RemediationUpdate.md)

#### Parameters

| Parameter           | Type                                                                                    |
| :------------------ | :-------------------------------------------------------------------------------------- |
| `remediationUpdate` | [`RemediationUpdateProperties`](../interfaces/interface.RemediationUpdateProperties.md) |

#### Returns

[`RemediationUpdate`](class.RemediationUpdate.md)

#### Overrides

[`AccountUpdateRequest`](class.AccountUpdateRequest.md).[`constructor`](class.AccountUpdateRequest.md#constructor)

#### Source

models/RemediationUpdate.ts:42

## Properties

| Property                   | Type                                                            | Description                                                                                   |
| :------------------------- | :-------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| `remediationUpdateActions` | [`RemediationUpdateAction`](class.RemediationUpdateAction.md)[] | -                                                                                             |
| `riskId`                   | `string`                                                        | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `AccountScreenResponse`. |
| `readonly` `type`          | `"REMEDIATION_UPDATE"`                                          | -                                                                                             |
