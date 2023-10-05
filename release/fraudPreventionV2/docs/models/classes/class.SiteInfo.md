[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > SiteInfo

# Class: SiteInfo

## Constructors

### constructor()

> **new SiteInfo**(`siteInfo`): [`SiteInfo`](class.SiteInfo.md)

#### Parameters

| Parameter  | Type                                                                  |
| :--------- | :-------------------------------------------------------------------- |
| `siteInfo` | [`SiteInfoProperties`](../interfaces/interface.SiteInfoProperties.md) |

#### Returns

[`SiteInfo`](class.SiteInfo.md)

#### Source

models/SiteInfo.ts:36

## Properties

| Property        | Type      | Description                                                                                                               |
| :-------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------ |
| `agentAssisted` | `boolean` | Identifies if an agent assisted in booking travel for the customer. `False` if the order was directly booked by customer. |
| `countryCode`   | `string`  | The alpha-3 ISO code that represents a country name.                                                                      |