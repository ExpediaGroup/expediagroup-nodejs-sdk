[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > MultiFactorAuthenticationUpdate

# Class: MultiFactorAuthenticationUpdate

Information specific to a user\'s response to a Multi-Factor Authentication initiated by the Partner\'s system as a result of a fraud recommendation.

## Extends

-   [`AccountUpdateRequest`](class.AccountUpdateRequest.md)

## Constructors

### constructor()

> **new MultiFactorAuthenticationUpdate**(`multiFactorAuthenticationUpdate`): [`MultiFactorAuthenticationUpdate`](class.MultiFactorAuthenticationUpdate.md)

#### Parameters

| Parameter                         | Type                                                                                                                |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| `multiFactorAuthenticationUpdate` | [`MultiFactorAuthenticationUpdateProperties`](../interfaces/interface.MultiFactorAuthenticationUpdateProperties.md) |

#### Returns

[`MultiFactorAuthenticationUpdate`](class.MultiFactorAuthenticationUpdate.md)

#### Overrides

[`AccountUpdateRequest`](class.AccountUpdateRequest.md).[`constructor`](class.AccountUpdateRequest.md#constructor)

#### Source

models/MultiFactorAuthenticationUpdate.ts:43

## Properties

| Property                            | Type                                                                              | Description                                                                                   |
| :---------------------------------- | :-------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| `multiFactorAuthenticationAttempts` | [`MultiFactorAuthenticationAttempt`](class.MultiFactorAuthenticationAttempt.md)[] | -                                                                                             |
| `riskId`                            | `string`                                                                          | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `AccountScreenResponse`. |
| `readonly` `type`                   | `"MULTI_FACTOR_AUTHENTICATION_UPDATE"`                                            | -                                                                                             |
