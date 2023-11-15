[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / MultiFactorAuthenticationAttempt

# Class: MultiFactorAuthenticationAttempt

Information specific to the update event by a user.

## Constructors

### new MultiFactorAuthenticationAttempt(multiFactorAuthenticationAttempt)

> **new MultiFactorAuthenticationAttempt**(`multiFactorAuthenticationAttempt`): [`MultiFactorAuthenticationAttempt`](MultiFactorAuthenticationAttempt.md)

#### Parameters

▪ **multiFactorAuthenticationAttempt**: [`MultiFactorAuthenticationAttemptProperties`](../interfaces/MultiFactorAuthenticationAttemptProperties.md)

#### Returns

[`MultiFactorAuthenticationAttempt`](MultiFactorAuthenticationAttempt.md)

#### Source

models/MultiFactorAuthenticationAttempt.ts:77

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `attemptCount` | `number` | The number of attempts a user tried for this Multi-Factor Authentication. | models/MultiFactorAuthenticationAttempt.ts:55 |
| `deliveryMethod` | [`MultiFactorAuthenticationAttemptDeliveryMethodEnum`](../type-aliases/MultiFactorAuthenticationAttemptDeliveryMethodEnum.md) | The delivery method of the Multi-Factor Authentication to a user. | models/MultiFactorAuthenticationAttempt.ts:35 |
| `emailAddress`? | `string` | Email address used for the Multi-Factor Authentication by a user. | models/MultiFactorAuthenticationAttempt.ts:75 |
| `providerName` | `string` | The vendor providing the Multi-Factor Authentication verification. | models/MultiFactorAuthenticationAttempt.ts:50 |
| `referenceId` | `string` | The identifier related to a Multi-Factor Authentication attempt by the Partner\'s system to the Multi-Factor Authentication provider. | models/MultiFactorAuthenticationAttempt.ts:45 |
| `status` | [`MultiFactorAuthenticationAttemptStatusEnum`](../type-aliases/MultiFactorAuthenticationAttemptStatusEnum.md) | The status of a user\'\'s response to the Multi-Factor Authentication initiated by the Partner\'\'s system to the user.\' - `SUCCESS` - Applicable if the user successfully passed the challenge. - `ABANDON` - Applicable if the user did not complete the challenge. - `FAILED` - Applicable if the user failed the challenge. | models/MultiFactorAuthenticationAttempt.ts:40 |
| `telephone`? | [`Telephone`](Telephone.md) | - | models/MultiFactorAuthenticationAttempt.ts:70 |
| `updateEndDateTime`? | `Date` | The local date and time the Multi-Factor Authentication to a user ended in the Partner\'s system, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | models/MultiFactorAuthenticationAttempt.ts:65 |
| `updateStartDateTime`? | `Date` | The local date and time the Multi-Factor Authentication was initiated to a user from the Partner\'s system, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | models/MultiFactorAuthenticationAttempt.ts:60 |
