[API](../../index.md) > [models](../index.md) > AirSegment

# Class: AirSegment

## Constructors

### new AirSegment(airSegment)

> **new AirSegment**(`airSegment`): [`AirSegment`](AirSegment.md)

#### Parameters

▪ **airSegment**: [`AirSegmentProperties`](../interfaces/AirSegmentProperties.md)

#### Source

models/AirSegment.ts:51

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `airlineCode` | `string` | Airline code of the trip segment | models/AirSegment.ts:29 |
| `arrivalAirportCode` | `string` | Arrival airport of the trip segment | models/AirSegment.ts:39 |
| `arrivalTime?` | `Date` | Local date and time of arrival to destination location, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | models/AirSegment.ts:49 |
| `departureAirportCode` | `string` | Departure airport of the trip segment | models/AirSegment.ts:34 |
| `departureTime?` | `Date` | Local date and time of departure from departure location, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | models/AirSegment.ts:44 |
