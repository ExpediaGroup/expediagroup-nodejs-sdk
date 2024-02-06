[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / CustomerAccount

# Class: CustomerAccount

## Constructors

### new CustomerAccount(customerAccount)

> **new CustomerAccount**(`customerAccount`): [`CustomerAccount`](CustomerAccount.md)

#### Parameters

• **customerAccount**: [`CustomerAccountProperties`](../interfaces/CustomerAccountProperties.md)

#### Returns

[`CustomerAccount`](CustomerAccount.md)

#### Source

models/CustomerAccount.ts:70

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `accountType` | [`CustomerAccountAccountTypeEnum`](../type-aliases/CustomerAccountAccountTypeEnum.md) | Identifies if the customer account is known to the client. Possible values are:  -`GUEST` - Applicable if the partner maintains record to distinguish whether the transaction was booked via a guest account.  -`STANDARD` - Default account type. |
| `address?` | [`CustomerAccountAddress`](CustomerAccountAddress.md) | - |
| `emailAddress` | `string` | Email address for the account owner. |
| `name` | [`Name`](Name.md) | - |
| `registeredTime?` | `Date` | The local date and time that the customer first registered on the client site, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. |
| `telephones?` | [`Telephone`](Telephone.md)[] | - |
| `userId?` | `string` | Unique account identifier provided by the partner\'s Identity Provider/System assigned to the account owner by the partner. `user_id` is specific to the partner namespace. Used to track repeat purchases by the same user. |
