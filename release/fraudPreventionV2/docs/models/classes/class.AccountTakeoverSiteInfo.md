[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountTakeoverSiteInfo

# Class: AccountTakeoverSiteInfo

Information specific to the Partner\'s website through which a transaction was made.

## Constructors

### constructor()

> **new AccountTakeoverSiteInfo**(`accountTakeoverSiteInfo`): [`AccountTakeoverSiteInfo`](class.AccountTakeoverSiteInfo.md)

#### Parameters

| Parameter                 | Type                                                                                                |
| :------------------------ | :-------------------------------------------------------------------------------------------------- |
| `accountTakeoverSiteInfo` | [`AccountTakeoverSiteInfoProperties`](../interfaces/interface.AccountTakeoverSiteInfoProperties.md) |

#### Returns

[`AccountTakeoverSiteInfo`](class.AccountTakeoverSiteInfo.md)

#### Source

models/AccountTakeoverSiteInfo.ts:49

## Properties

| Property         | Type                                                                                                                 | Description                                                                                                                                                                                                                                                                       |
| :--------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brandName`      | `string`                                                                                                             | The trademark brand name that is displayed to a user on the website.                                                                                                                                                                                                              |
| `locale`?        | `string`                                                                                                             | The locale of the website a user is accessing, which is separate from the user configured browser locale, in ISO 639-2 language code format and in ISO 3166-1 country code format.                                                                                                |
| `name`?          | `string`                                                                                                             | Name of the website from which the event is generated.                                                                                                                                                                                                                            |
| `placementName`? | [`AccountTakeoverSiteInfoPlacementNameEnum`](../type-aliases/type-alias.AccountTakeoverSiteInfoPlacementNameEnum.md) | The categorized name of the page where a user initiated event is being evaluated. - `LOGIN` - Applicable if the user initiated this account event from a login web page. - `PASSWORD_RESET` - Applicable if the user initiated this account event from a password reset web page. |
