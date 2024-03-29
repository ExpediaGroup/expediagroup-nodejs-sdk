[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / CurrentUserSession

# Class: CurrentUserSession

The current user session prior to this transaction, which contains details related to any challenge initiated by the Partner\'\'s system to a user before calling Expedia\'\'s Fraud Prevention Service. An example is if the Partner\'\'s system sent a Captcha challenge to the user before calling Expedia\'\'s Fraud Prevention Service.

## Constructors

### new CurrentUserSession(currentUserSession)

> **new CurrentUserSession**(`currentUserSession`): [`CurrentUserSession`](CurrentUserSession.md)

#### Parameters

• **currentUserSession**: [`CurrentUserSessionProperties`](../interfaces/CurrentUserSessionProperties.md)

#### Returns

[`CurrentUserSession`](CurrentUserSession.md)

#### Source

models/CurrentUserSession.ts:47

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `challengeDetail?` | [`ChallengeDetail`](ChallengeDetail.md) | - |
| `sessionId?` | `string` | Unique identifier for a user\'s session on their device |
| `startDateTime?` | `Date` | The local date and time a user\'s session started, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. |
