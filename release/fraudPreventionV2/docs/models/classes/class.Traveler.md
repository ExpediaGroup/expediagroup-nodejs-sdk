[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Traveler

# Class: Traveler

## Constructors

### constructor()

> **new Traveler**(`traveler`): [`Traveler`](class.Traveler.md)

#### Parameters

| Parameter  | Type                                                                  |
| :--------- | :-------------------------------------------------------------------- |
| `traveler` | [`TravelerProperties`](../interfaces/interface.TravelerProperties.md) |

#### Returns

[`Traveler`](class.Traveler.md)

#### Source

models/Traveler.ts:71

## Properties

| Property                  | Type                                | Description                                                                                                                                                                                    |
| :------------------------ | :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `age`?                    | `number`                            | Age of the traveler.                                                                                                                                                                           |
| `birthDate`?              | `Date`                              | Date of birth for traveler, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.                                                                                                       |
| `citizenshipCountryCode`? | `string`                            | The alpha-3 ISO country code of the traveler\'s nationality.                                                                                                                                   |
| `emailAddress`?           | `string`                            | Email address associated with the traveler as supplied by the partner system.                                                                                                                  |
| `primary`                 | `boolean`                           | Indicator for one of the travelers who is the primary traveler. One traveler in each itinerary item must be listed as primary. By default, for a single traveler this should be set to `true`. |
| `telephones`?             | [`Telephone`](class.Telephone.md)[] | -                                                                                                                                                                                              |
| `travelerId`?             | `string`                            | A unique identifier for travelers in the transaction.                                                                                                                                          |
| `travelerName`            | [`Name`](class.Name.md)             | -                                                                                                                                                                                              |
