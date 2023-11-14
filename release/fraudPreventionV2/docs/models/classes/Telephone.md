[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / Telephone

# Class: Telephone

Group of attributes intended to hold information about phone number associated with the transaction.  A user can have one to many phone numbers (home, work, mobile, etc.).

## Constructors

### new Telephone(telephone)

> **new Telephone**(`telephone`): [`Telephone`](Telephone.md)

#### Parameters

▪ **telephone**: [`TelephoneProperties`](../interfaces/TelephoneProperties.md)

#### Returns

[`Telephone`](Telephone.md)

#### Source

models/Telephone.ts:70

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `areaCode` | `string` | A number prefixed to an individual telephone number: used in making long-distance calls.  Does not include symbols, spaces, or leading zeros. | models/Telephone.ts:43 |
| `countryAccessCode` | `string` | Numeric digit between 1 to 3 characters used to represent the country code for international dialing.  Does not include symbols, spaces, or leading zeros. | models/Telephone.ts:38 |
| `extensionNumber`? | `string` | The number used to reach an individual once a phone connection is established.  Does not include symbols, spaces, or leading zeros. | models/Telephone.ts:53 |
| `lastVerifiedDateTime`? | `Date` | Local date and time user validated possession of their phone number via a text or voice multi factor authentication challenge, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | models/Telephone.ts:63 |
| `phoneNumber` | `string` | A number that is dialed on a telephone, without the country or area codes, to reach a particular person, business, etc.  Does not include symbols, spaces, or leading zeros. | models/Telephone.ts:48 |
| `platformType`? | [`TelephonePlatformType`](../type-aliases/TelephonePlatformType.md) | - | models/Telephone.ts:33 |
| `preferenceRank`? | `number` | Ranking of order of user preference for contact via text (if type is Mobile) or voice.  `0` means no preference.  `1` is the primary phone, `2` is the secondary phone, etc. | models/Telephone.ts:58 |
| `type`? | [`TelephoneType`](../type-aliases/TelephoneType.md) | - | models/Telephone.ts:31 |
| `verifiedFlag`? | `boolean` | Flag indicating whether user passed validation of possession of their phone number via a text or voice multi factor authentication challenge. | models/Telephone.ts:68 |
