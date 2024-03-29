[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / AirSegment

# Class: AirSegment

## Constructors

### new AirSegment(airSegment)

> **new AirSegment**(`airSegment`): [`AirSegment`](AirSegment.md)

#### Parameters

• **airSegment**: [`AirSegmentProperties`](../interfaces/AirSegmentProperties.md)

#### Returns

[`AirSegment`](AirSegment.md)

#### Source

models/AirSegment.ts:51

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `airlineCode` | `string` | Airline code of the trip segment |
| `arrivalAirportCode` | `string` | Arrival airport of the trip segment |
| `arrivalTime?` | `Date` | Local date and time of arrival to destination location, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. |
| `departureAirportCode` | `string` | Departure airport of the trip segment |
| `departureTime?` | `Date` | Local date and time of departure from departure location, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. |
