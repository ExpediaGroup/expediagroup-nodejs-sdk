[API](../../index.md) > [models](../index.md) > LoginTransactionDetails

# Class: LoginTransactionDetails

The `transaction_type` field value is used as a discriminator, with the following mapping: * `LOGIN`: `LoginTransactionDetails`

## Extends

- [`AccountTakeoverTransactionDetails`](AccountTakeoverTransactionDetails.md)

## Constructors

### new LoginTransactionDetails(loginTransactionDetails)

> **new LoginTransactionDetails**(`loginTransactionDetails`): [`LoginTransactionDetails`](LoginTransactionDetails.md)

#### Parameters

▪ **loginTransactionDetails**: [`LoginTransactionDetailsProperties`](../interfaces/LoginTransactionDetailsProperties.md)

#### Overrides

[`AccountTakeoverTransactionDetails`](AccountTakeoverTransactionDetails.md).[`constructor`](AccountTakeoverTransactionDetails.md#constructors)

#### Source

models/LoginTransactionDetails.ts:51

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `authenticationSubType?` | [`LoginTransactionDetailsAuthenticationSubTypeEnum`](../type-aliases/LoginTransactionDetailsAuthenticationSubTypeEnum.md) | The sub type of login authentication method used by a user. For `authentication_sub_type` ensure attributes mentioned in dictionary below are set to corresponding values only. `authentication_sub_type` is an enum value with the following mapping with `authentication_type` attribute: *       authentication_sub_type   :     authentication_type * ------------------------------------------------------------------------------- * `EMAIL`                               : `CREDENTIALS` * `EMAIL`                               : `PASSWORD_RESET` * `EMAIL`                               : `SINGLE_SIGN_ON` * `EMAIL`                               : `MULTI_FACTOR_AUTHENTICATION` * `PHONE`                               : `MULTI_FACTOR_AUTHENTICATION` * `GOOGLE`                              : `SOCIAL` * `FACEBOOK`                            : `SOCIAL` * `APPLE`                               : `SOCIAL` *                                       : `CREDENTIALS` | - | models/LoginTransactionDetails.ts:36 |
| `public` | `authenticationType` | [`LoginTransactionDetailsAuthenticationTypeEnum`](../type-aliases/LoginTransactionDetailsAuthenticationTypeEnum.md) | The type of login authentication method used by a user. For `authentication_type` ensure attributes mentioned in dictionary below are set to corresponding values only. `authentication_type` is an enum value with the following mapping with `authentication_sub_type` attribute: *       authentication_type       :     authentication_sub_type * ------------------------------------------------------------------------------- * `CREDENTIALS`                         : `EMAIL` * `CREDENTIALS`                         : * `PASSWORD_RESET`                      : `EMAIL` * `SINGLE_SIGN_ON`                      : `EMAIL` * `MULTI_FACTOR_AUTHENTICATION`         : `EMAIL` * `MULTI_FACTOR_AUTHENTICATION`         : `PHONE` * `SOCIAL`                              : `GOOGLE` * `SOCIAL`                              : `FACEBOOK` * `SOCIAL`                              : `APPLE` | - | models/LoginTransactionDetails.ts:31 |
| `public` | `currentUserSession?` | [`CurrentUserSession`](CurrentUserSession.md) | - | [`AccountTakeoverTransactionDetails`](AccountTakeoverTransactionDetails.md).`currentUserSession` | models/AccountTakeoverTransactionDetails.ts:45 |
| `public` | `failedLoginReason?` | [`LoginTransactionDetailsFailedLoginReasonEnum`](../type-aliases/LoginTransactionDetailsFailedLoginReasonEnum.md) | The reason for the failed login attempt in the Partner\'\'s system, related to user failure or Partner\'\'s system failure. - `INVALID_CREDENTIALS` - Applicable if the user provided invalid login credentials for this login attempt. - `ACCOUNT_NOT_FOUND` - Applicable if the user attempted to login to an account that doesn\'t exist. - `VERIFICATION_FAILED` - Applicable if the user failed the verification for this login, or any authentication exception occured in the Partner system for this login attempt. - `ACCOUNT_LOCKED` - Applicable if the user attempted to login to an account that is locked. | - | models/LoginTransactionDetails.ts:46 |
| `public` | `successfulLoginFlag` | `boolean` | Identifies if a login attempt by a user was successful or not. | - | models/LoginTransactionDetails.ts:41 |
| `public` | `transactionDateTime` | `Date` | The local date and time the transaction occured in the Partner\'s system, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | [`AccountTakeoverTransactionDetails`](AccountTakeoverTransactionDetails.md).`transactionDateTime` | models/AccountTakeoverTransactionDetails.ts:35 |
| `public` | `transactionId` | `string` | Unique identifier to identify a transaction attempt in the Partner\'s system. | [`AccountTakeoverTransactionDetails`](AccountTakeoverTransactionDetails.md).`transactionId` | models/AccountTakeoverTransactionDetails.ts:40 |
| `readonly` | `type` | `"LOGIN"` | - | - | models/LoginTransactionDetails.ts:49 |
