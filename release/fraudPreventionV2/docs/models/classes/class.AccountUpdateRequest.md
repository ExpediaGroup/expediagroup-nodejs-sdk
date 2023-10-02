[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountUpdateRequest

# Class: AccountUpdateRequest

The `type` field value is used as a discriminator, with the following mapping: _ `MULTI_FACTOR_AUTHENTICATION_UPDATE`: `MultiFactorAuthenticationUpdate` _ `REMEDIATION_UPDATE`: `RemediationUpdate`

## Extended By

-   [`MultiFactorAuthenticationUpdate`](class.MultiFactorAuthenticationUpdate.md)
-   [`RemediationUpdate`](class.RemediationUpdate.md)

## Constructors

### constructor()

> **new AccountUpdateRequest**(`accountUpdateRequest`): [`AccountUpdateRequest`](class.AccountUpdateRequest.md)

#### Parameters

| Parameter              | Type                                                                                          |
| :--------------------- | :-------------------------------------------------------------------------------------------- |
| `accountUpdateRequest` | [`AccountUpdateRequestProperties`](../interfaces/interface.AccountUpdateRequestProperties.md) |

#### Returns

[`AccountUpdateRequest`](class.AccountUpdateRequest.md)

#### Source

models/AccountUpdateRequest.ts:34

## Properties

| Property | Type     | Description                                                                                   |
| :------- | :------- | :-------------------------------------------------------------------------------------------- |
| `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `AccountScreenResponse`. |
