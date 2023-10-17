[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > RailSegments

# Class: RailSegments

## Constructors

### new RailSegments(railSegments)

> **new RailSegments**(`railSegments`): [`RailSegments`](RailSegments.md)

#### Parameters

▪ **railSegments**: [`RailSegmentsProperties`](../interfaces/RailSegmentsProperties.md)

#### Source

models/RailSegments.ts:63

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `arrivalStation` | [`RailwayStationDetails`](RailwayStationDetails.md) | - | models/RailSegments.ts:50 |
| `arrivalTime` | `Date` | The local date and time of the scheduled arrival at the destination station, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | models/RailSegments.ts:40 |
| `departureStation` | [`RailwayStationDetails`](RailwayStationDetails.md) | - | models/RailSegments.ts:45 |
| `departureTime` | `Date` | The local date and time of the scheduled departure from the departure station, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | models/RailSegments.ts:35 |
| `operatingCompany?` | [`RailSegmentsOperatingCompany`](RailSegmentsOperatingCompany.md) | - | models/RailSegments.ts:61 |
| `transportationMethod` | [`RailSegmentsTransportationMethodEnum`](../type-aliases/RailSegmentsTransportationMethodEnum.md) | This attribute represents the specific transportation method by which the passenger is traveling. It captures the mode of transportation used during the Rail product journey, Possible values are:     - `BUS` - The Rail product includes bus transportation for certain segments of the itinerary.     - `FERRY` - The Rail product involves ferry transportation as part of the journey.     - `PUBLIC_TRANSPORT` - The Rail product represents the use of public transportation modes for the journey.     - `TRAM` - The Rail product includes tram transportation as part of the journey.     - `RAIL` - The Rail product specifically utilizes train transportation for the journey.     - `TRANSFER` - The Rail product involves transfers between different modes of transportation.     - `OTHER` - The Rail product utilizes transportation methods not covered by the aforementioned categories. | models/RailSegments.ts:55 |
