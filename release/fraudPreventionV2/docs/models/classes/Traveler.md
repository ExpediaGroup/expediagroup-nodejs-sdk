[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / Traveler

# Class: Traveler

## Constructors

### new Traveler(traveler)

> **new Traveler**(`traveler`): [`Traveler`](Traveler.md)

#### Parameters

• **traveler**: [`TravelerProperties`](../interfaces/TravelerProperties.md)

#### Returns

[`Traveler`](Traveler.md)

#### Source

models/Traveler.ts:71

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `age?` | `number` | Age of the traveler. |
| `birthDate?` | `Date` | Date of birth for traveler, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. |
| `citizenshipCountryCode?` | `string` | The alpha-3 ISO country code of the traveler\'s nationality. |
| `emailAddress?` | `string` | Email address associated with the traveler as supplied by the partner system. |
| `primary` | `boolean` | Indicator for one of the travelers who is the primary traveler. One traveler in each itinerary item must be listed as primary. By default, for a single traveler this should be set to `true`. |
| `telephones?` | [`Telephone`](Telephone.md)[] | - |
| `travelerId?` | `string` | A unique identifier for travelers in the transaction. |
| `travelerName` | [`Name`](Name.md) | - |
