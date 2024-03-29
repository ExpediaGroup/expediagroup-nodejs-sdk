[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / RailwayStationDetails

# Class: RailwayStationDetails

## Constructors

### new RailwayStationDetails(railwayStationDetails)

> **new RailwayStationDetails**(`railwayStationDetails`): [`RailwayStationDetails`](RailwayStationDetails.md)

#### Parameters

• **railwayStationDetails**: [`RailwayStationDetailsProperties`](../interfaces/RailwayStationDetailsProperties.md)

#### Returns

[`RailwayStationDetails`](RailwayStationDetails.md)

#### Source

models/RailwayStationDetails.ts:54

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](Address.md) | - |
| `name` | `string` | The popularly known name or title by which the railway station is identified. |
| `stationCode` | `string` | The unique identifier or code assigned to an individual rail station or a pseudo-station representing all the stations within a specific city, from which rail travel originates. |
| `timezone?` | `string` | The timezone associated with the location of the station, specifying the local time offset from Coordinated Universal Time (UTC). |
| `type?` | [`RailwayStationDetailsTypeEnum`](../type-aliases/RailwayStationDetailsTypeEnum.md) | This attribute provides information about the specific classification assigned to the rail station. It helps differentiate between different types of stations, such as major stations (STATION) or stations located within a city (city). |
