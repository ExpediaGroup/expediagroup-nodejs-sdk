[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > ChallengeDetail

# Class: ChallengeDetail

Information related to challenges initiated by the Partner\'s system to a user before calling Expedia\'s Fraud Prevention Service.

## Constructors

### constructor()

> **new ChallengeDetail**(`challengeDetail`): [`ChallengeDetail`](class.ChallengeDetail.md)

#### Parameters

| Parameter         | Type                                                                                |
| :---------------- | :---------------------------------------------------------------------------------- |
| `challengeDetail` | [`ChallengeDetailProperties`](../interfaces/interface.ChallengeDetailProperties.md) |

#### Returns

[`ChallengeDetail`](class.ChallengeDetail.md)

#### Source

models/ChallengeDetail.ts:44

## Properties

| Property        | Type                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                            |
| :-------------- | :------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayedFlag` | `boolean`                                                                              | Indicates that there was a challenge initiated by the Partner\'s system to a user before calling Expedia\'s Fraud Prevention Service.                                                                                                                                                                                                                                                                  |
| `status`        | [`ChallengeDetailStatusEnum`](../type-aliases/type-alias.ChallengeDetailStatusEnum.md) | The status of the challenge served by the Partner\'\'s system to a user before calling Expedia\'\'s Fraud Prevention Service. - `SUCCESS` - Applicable if the user successfully passed the challenge. - `FAILED` - Applicable if the user failed the challenge.                                                                                                                                        |
| `type`          | [`ChallengeDetailTypeEnum`](../type-aliases/type-alias.ChallengeDetailTypeEnum.md)     | The kind of challenge served by the Partner\'\'s system to a user prior to calling Expedia\'\'s Fraud Prevention Service. - `CAPTCHA` - Applicable if the challenge served by the Partner\'\'s system was a Captcha challenge. - `TWO_FACTOR` - Applicable if the challenge served by the Partner\'\'s system was a two-factor challenge including (Email verification, One Time Password, Okta, etc). |
