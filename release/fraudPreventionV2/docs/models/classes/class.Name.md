[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Name

# Class: Name

Group of attributes intended to hold information about a customer or traveler\'s name for the order.

## Constructors

### constructor()

> **new Name**(`name`): [`Name`](class.Name.md)

#### Parameters

| Parameter | Type                                                          |
| :-------- | :------------------------------------------------------------ |
| `name`    | [`NameProperties`](../interfaces/interface.NameProperties.md) |

#### Returns

[`Name`](class.Name.md)

#### Source

models/Name.ts:54

## Properties

| Property      | Type     | Description                                                                                                                                                                      |
| :------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `firstName`   | `string` | Given, or first name, of the person.                                                                                                                                             |
| `lastName`    | `string` | Surname, or last name, of the person.                                                                                                                                            |
| `middleName`? | `string` | Middle name of the person.                                                                                                                                                       |
| `suffix`?     | `string` | Generational designations (e.g. Sr, Jr, III) or values that indicate the individual holds a position, educational degree, accreditation, office, or honor (e.g. PhD, CCNA, OBE). |
| `title`?      | `string` | Title of the person for name (e.g. Mr., Ms. etc).                                                                                                                                |
