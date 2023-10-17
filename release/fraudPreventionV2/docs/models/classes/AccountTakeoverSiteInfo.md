[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountTakeoverSiteInfo

# Class: AccountTakeoverSiteInfo

Information specific to the Partner\'s website through which a transaction was made.

## Constructors

### new AccountTakeoverSiteInfo(accountTakeoverSiteInfo)

> **new AccountTakeoverSiteInfo**(`accountTakeoverSiteInfo`): [`AccountTakeoverSiteInfo`](AccountTakeoverSiteInfo.md)

#### Parameters

▪ **accountTakeoverSiteInfo**: [`AccountTakeoverSiteInfoProperties`](../interfaces/AccountTakeoverSiteInfoProperties.md)

#### Source

models/AccountTakeoverSiteInfo.ts:49

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `brandName` | `string` | The trademark brand name that is displayed to a user on the website. | models/AccountTakeoverSiteInfo.ts:42 |
| `locale?` | `string` | The locale of the website a user is accessing, which is separate from the user configured browser locale, in ISO 639-2 language code format and in ISO 3166-1 country code format. | models/AccountTakeoverSiteInfo.ts:32 |
| `name?` | `string` | Name of the website from which the event is generated. | models/AccountTakeoverSiteInfo.ts:37 |
| `placementName?` | [`AccountTakeoverSiteInfoPlacementNameEnum`](../type-aliases/AccountTakeoverSiteInfoPlacementNameEnum.md) | The categorized name of the page where a user initiated event is being evaluated. - `LOGIN` - Applicable if the user initiated this account event from a login web page. - `PASSWORD_RESET` - Applicable if the user initiated this account event from a password reset web page. | models/AccountTakeoverSiteInfo.ts:47 |
