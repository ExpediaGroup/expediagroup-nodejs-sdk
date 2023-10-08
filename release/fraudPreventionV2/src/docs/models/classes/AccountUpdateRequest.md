[API](../../index.md) > [models](../index.md) > AccountUpdateRequest

# Class: AccountUpdateRequest

The `type` field value is used as a discriminator, with the following mapping: * `MULTI_FACTOR_AUTHENTICATION_UPDATE`: `MultiFactorAuthenticationUpdate` * `REMEDIATION_UPDATE`: `RemediationUpdate`

## Extended By

- [`MultiFactorAuthenticationUpdate`](MultiFactorAuthenticationUpdate.md)
- [`RemediationUpdate`](RemediationUpdate.md)

## Constructors

### new AccountUpdateRequest(accountUpdateRequest)

> **new AccountUpdateRequest**(`accountUpdateRequest`): [`AccountUpdateRequest`](AccountUpdateRequest.md)

#### Parameters

▪ **accountUpdateRequest**: [`AccountUpdateRequestProperties`](../interfaces/AccountUpdateRequestProperties.md)

#### Source

models/AccountUpdateRequest.ts:34

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `riskId` | `string` | The `risk_id` provided by Expedia\'s Fraud Prevention Service in the `AccountScreenResponse`. | models/AccountUpdateRequest.ts:32 |
