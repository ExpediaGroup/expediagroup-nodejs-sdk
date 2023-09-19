[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AirSegment

# Class: AirSegment

## Constructors

### constructor()

> **new AirSegment**(`airSegment`): [`AirSegment`](class.AirSegment.md)

#### Parameters

| Parameter    | Type                                                                      |
| :----------- | :------------------------------------------------------------------------ |
| `airSegment` | [`AirSegmentProperties`](../interfaces/interface.AirSegmentProperties.md) |

#### Returns

[`AirSegment`](class.AirSegment.md)

#### Source

models/AirSegment.ts:51

## Properties

| Property               | Type     | Description                                                                                                            |
| :--------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------- |
| `airlineCode`          | `string` | Airline code of the trip segment                                                                                       |
| `arrivalAirportCode`   | `string` | Arrival airport of the trip segment                                                                                    |
| `arrivalTime`?         | `Date`   | Local date and time of arrival to destination location, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.   |
| `departureAirportCode` | `string` | Departure airport of the trip segment                                                                                  |
| `departureTime`?       | `Date`   | Local date and time of departure from departure location, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. |
