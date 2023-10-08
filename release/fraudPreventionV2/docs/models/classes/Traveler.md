[API](../../index.md) > [models](../index.md) > Traveler

# Class: Traveler

## Constructors

### new Traveler(traveler)

> **new Traveler**(`traveler`): [`Traveler`](Traveler.md)

#### Parameters

▪ **traveler**: [`TravelerProperties`](../interfaces/TravelerProperties.md)

#### Source

models/Traveler.ts:71

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `age?` | `number` | Age of the traveler. | models/Traveler.ts:54 |
| `birthDate?` | `Date` | Date of birth for traveler, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | models/Traveler.ts:59 |
| `citizenshipCountryCode?` | `string` | The alpha-3 ISO country code of the traveler\'s nationality. | models/Traveler.ts:64 |
| `emailAddress?` | `string` | Email address associated with the traveler as supplied by the partner system. | models/Traveler.ts:39 |
| `primary` | `boolean` | Indicator for one of the travelers who is the primary traveler. One traveler in each itinerary item must be listed as primary. By default, for a single traveler this should be set to `true`. | models/Traveler.ts:49 |
| `telephones?` | [`Telephone`](Telephone.md)[] | - | models/Traveler.ts:44 |
| `travelerId?` | `string` | A unique identifier for travelers in the transaction. | models/Traveler.ts:69 |
| `travelerName` | [`Name`](Name.md) | - | models/Traveler.ts:34 |
