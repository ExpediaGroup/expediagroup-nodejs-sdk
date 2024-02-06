[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / AccountUpdateRequest

# Class: AccountUpdateRequest

The `type` field value is used as a discriminator, with the following mapping: * `MULTI_FACTOR_AUTHENTICATION_UPDATE`: `MultiFactorAuthenticationUpdate` * `REMEDIATION_UPDATE`: `RemediationUpdate`

## Extended by

- [`MultiFactorAuthenticationUpdate`](MultiFactorAuthenticationUpdate.md)
- [`RemediationUpdate`](RemediationUpdate.md)

## Constructors

### new AccountUpdateRequest(accountUpdateRequest)

> **new AccountUpdateRequest**(`accountUpdateRequest`): [`AccountUpdateRequest`](AccountUpdateRequest.md)

#### Parameters

• **accountUpdateRequest**: [`AccountUpdateRequestProperties`](../interfaces/AccountUpdateRequestProperties.md)

#### Returns

[`AccountUpdateRequest`](AccountUpdateRequest.md)

#### Source

models/AccountUpdateRequest.ts:34

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `AccountScreenResponse`. |
