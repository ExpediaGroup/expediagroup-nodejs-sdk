[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountTakeoverName

# Class: AccountTakeoverName

Group of attributes intended to hold information about a customer or traveler\'\'s name for the account.

## Constructors

### constructor()

> **new AccountTakeoverName**(`accountTakeoverName`): [`AccountTakeoverName`](class.AccountTakeoverName.md)

#### Parameters

| Parameter             | Type                                                                                        |
| :-------------------- | :------------------------------------------------------------------------------------------ |
| `accountTakeoverName` | [`AccountTakeoverNameProperties`](../interfaces/interface.AccountTakeoverNameProperties.md) |

#### Returns

[`AccountTakeoverName`](class.AccountTakeoverName.md)

#### Source

models/AccountTakeoverName.ts:54

## Properties

| Property      | Type     | Description                                                                                                                                                                      |
| :------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `firstName`   | `string` | Given, or first name, of the person.                                                                                                                                             |
| `lastName`    | `string` | Surname, or last name, of the person.                                                                                                                                            |
| `middleName`? | `string` | Middle name of the person.                                                                                                                                                       |
| `suffix`?     | `string` | Generational designations (e.g. Sr, Jr, III) or values indicate that the individual holds a position, educational degree, accreditation, office, or honor (e.g. PhD, CCNA, OBE). |
| `title`?      | `string` | Title of the person for name (e.g. Mr., Ms. etc).                                                                                                                                |
