[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > AccountScreenResponse

# Class: AccountScreenResponse

Response for an account transaction provided by Expedia\'s Fraud Prevention Service.

## Constructors

### constructor()

> **new AccountScreenResponse**(`accountScreenResponse`): [`AccountScreenResponse`](class.AccountScreenResponse.md)

#### Parameters

| Parameter               | Type                                                                                            |
| :---------------------- | :---------------------------------------------------------------------------------------------- |
| `accountScreenResponse` | [`AccountScreenResponseProperties`](../interfaces/interface.AccountScreenResponseProperties.md) |

#### Returns

[`AccountScreenResponse`](class.AccountScreenResponse.md)

#### Source

models/AccountScreenResponse.ts:37

## Properties

| Property    | Type                                                                                         | Description                                                                           |
| :---------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| `decision`? | [`AccountTakeoverFraudDecision`](../type-aliases/type-alias.AccountTakeoverFraudDecision.md) | -                                                                                     |
| `riskId`?   | `string`                                                                                     | Unique identifier assigned to the transaction by Expedia\'s Fraud Prevention Service. |
