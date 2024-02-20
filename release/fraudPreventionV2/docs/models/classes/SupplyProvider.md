[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / SupplyProvider

# Class: SupplyProvider

## Constructors

### new SupplyProvider(supplyProvider)

> **new SupplyProvider**(`supplyProvider`): [`SupplyProvider`](SupplyProvider.md)

#### Parameters

• **supplyProvider**: [`SupplyProviderProperties`](../interfaces/SupplyProviderProperties.md)

#### Returns

[`SupplyProvider`](SupplyProvider.md)

#### Source

models/SupplyProvider.ts:41

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | This field provides name of the partner involved in offering the activity. |
| `type` | [`SupplyProviderTypeEnum`](../type-aliases/SupplyProviderTypeEnum.md) | This field indicates the nature or relationship of the vendor associated with a particular activity. * `THIRD_PARTY`: This value indicates that the partner integrates with a third-party platform via APIs and ingests activities from them. * `DIRECT`: This value signifies that the partner is a direct entity or provider associated with the organization or platform offering the activity. |
| `vendorName?` | `string` | This field describes the name of the third-party vendor who provided the supply provider or the operating company with the activity. |
