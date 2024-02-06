[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / AccountTakeoverCustomerAccount

# Class: AccountTakeoverCustomerAccount

Information about a user\'s account.

## Constructors

### new AccountTakeoverCustomerAccount(accountTakeoverCustomerAccount)

> **new AccountTakeoverCustomerAccount**(`accountTakeoverCustomerAccount`): [`AccountTakeoverCustomerAccount`](AccountTakeoverCustomerAccount.md)

#### Parameters

• **accountTakeoverCustomerAccount**: [`AccountTakeoverCustomerAccountProperties`](../interfaces/AccountTakeoverCustomerAccountProperties.md)

#### Returns

[`AccountTakeoverCustomerAccount`](AccountTakeoverCustomerAccount.md)

#### Source

models/AccountTakeoverCustomerAccount.ts:93

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `accountRole?` | [`AccountTakeoverCustomerAccountAccountRoleEnum`](../type-aliases/AccountTakeoverCustomerAccountAccountRoleEnum.md) | Identifies the account role and associated permissions of a user\'\'s account. Possible values are: - `USER`: Basic account with no special privileges. - `MANAGER`: Account with additional privileges, such as the ability to make bookings for others. - `ADMIN`: Account with higher privileges than a manager, including the ability to grant manager access to other users. |
| `accountType` | [`AccountTakeoverCustomerAccountAccountTypeEnum`](../type-aliases/AccountTakeoverCustomerAccountAccountTypeEnum.md) | Identifies the account type of a user\'\'s account. Possible values are: - `INDIVIDUAL` - Applicable if this account is for an individual traveler. - `BUSINESS` - Applicable if this account is for a business or organization account used by suppliers or Partners. |
| `activeFlag` | `boolean` | Indicator for if this account is an active account or not. |
| `address?` | [`CustomerAccountAddress`](CustomerAccountAddress.md) | - |
| `emailAddress` | `string` | Email address for the account owner. |
| `loyaltyMemberId?` | `string` | Unique loyalty identifier for a user. |
| `name?` | [`AccountTakeoverName`](AccountTakeoverName.md) | - |
| `registeredTime` | `Date` | The local date and time that the customer first registered on the Partner\'s site, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. |
| `telephones?` | [`Telephone`](Telephone.md)[] | - |
| `userId` | `string` | Unique account identifier provided by the Partner\'s Identity Provider/System assigned to the account owner by the partner. `user_id` is specific to the Partner\'s namespace. Used to track repeat account activity by the same user. |
| `username` | `string` | Username of the account. |
