[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > CustomerAccount

# Class: CustomerAccount

## Constructors

### new CustomerAccount(customerAccount)

> **new CustomerAccount**(`customerAccount`): [`CustomerAccount`](CustomerAccount.md)

#### Parameters

▪ **customerAccount**: [`CustomerAccountProperties`](../interfaces/CustomerAccountProperties.md)

#### Source

models/CustomerAccount.ts:70

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `accountType` | [`CustomerAccountAccountTypeEnum`](../type-aliases/CustomerAccountAccountTypeEnum.md) | Identifies if the customer account is known to the client. Possible values are:  -`GUEST` - Applicable if the partner maintains record to distinguish whether the transaction was booked via a guest account.  -`STANDARD` - Default account type. | models/CustomerAccount.ts:43 |
| `address`? | [`CustomerAccountAddress`](CustomerAccountAddress.md) | - | models/CustomerAccount.ts:63 |
| `emailAddress` | `string` | Email address for the account owner. | models/CustomerAccount.ts:53 |
| `name` | [`Name`](Name.md) | - | models/CustomerAccount.ts:48 |
| `registeredTime`? | `Date` | The local date and time that the customer first registered on the client site, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | models/CustomerAccount.ts:68 |
| `telephones`? | [`Telephone`](Telephone.md)[] | - | models/CustomerAccount.ts:58 |
| `userId`? | `string` | Unique account identifier provided by the partner\'s Identity Provider/System assigned to the account owner by the partner. `user_id` is specific to the partner namespace. Used to track repeat purchases by the same user. | models/CustomerAccount.ts:38 |
