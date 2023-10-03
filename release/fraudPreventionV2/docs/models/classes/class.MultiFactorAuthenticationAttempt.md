[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > MultiFactorAuthenticationAttempt

# Class: MultiFactorAuthenticationAttempt

Information specific to the update event by a user.

## Constructors

### constructor()

> **new MultiFactorAuthenticationAttempt**(`multiFactorAuthenticationAttempt`): [`MultiFactorAuthenticationAttempt`](class.MultiFactorAuthenticationAttempt.md)

#### Parameters

| Parameter                          | Type                                                                                                                  |
| :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| `multiFactorAuthenticationAttempt` | [`MultiFactorAuthenticationAttemptProperties`](../interfaces/interface.MultiFactorAuthenticationAttemptProperties.md) |

#### Returns

[`MultiFactorAuthenticationAttempt`](class.MultiFactorAuthenticationAttempt.md)

#### Source

models/MultiFactorAuthenticationAttempt.ts:77

## Properties

| Property               | Type                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                      |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attemptCount`         | `number`                                                                                                                                 | The number of attempts a user tried for this Multi-Factor Authentication.                                                                                                                                                                                                                                                        |
| `deliveryMethod`       | [`MultiFactorAuthenticationAttemptDeliveryMethodEnum`](../type-aliases/type-alias.MultiFactorAuthenticationAttemptDeliveryMethodEnum.md) | The delivery method of the Multi-Factor Authentication to a user.                                                                                                                                                                                                                                                                |
| `emailAddress`?        | `string`                                                                                                                                 | Email address used for the Multi-Factor Authentication by a user.                                                                                                                                                                                                                                                                |
| `providerName`         | `string`                                                                                                                                 | The vendor providing the Multi-Factor Authentication verification.                                                                                                                                                                                                                                                               |
| `referenceId`          | `string`                                                                                                                                 | The identifier related to a Multi-Factor Authentication attempt by the Partner\'s system to the Multi-Factor Authentication provider.                                                                                                                                                                                            |
| `status`               | [`MultiFactorAuthenticationAttemptStatusEnum`](../type-aliases/type-alias.MultiFactorAuthenticationAttemptStatusEnum.md)                 | The status of a user\'\'s response to the Multi-Factor Authentication initiated by the Partner\'\'s system to the user.\' - `SUCCESS` - Applicable if the user successfully passed the challenge. - `ABANDON` - Applicable if the user did not complete the challenge. - `FAILED` - Applicable if the user failed the challenge. |
| `telephone`?           | [`Telephone`](class.Telephone.md)                                                                                                        | -                                                                                                                                                                                                                                                                                                                                |
| `updateEndDateTime`?   | `Date`                                                                                                                                   | The local date and time the Multi-Factor Authentication to a user ended in the Partner\'s system, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.                                                                                                                                                                   |
| `updateStartDateTime`? | `Date`                                                                                                                                   | The local date and time the Multi-Factor Authentication was initiated to a user from the Partner\'s system, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.                                                                                                                                                         |
