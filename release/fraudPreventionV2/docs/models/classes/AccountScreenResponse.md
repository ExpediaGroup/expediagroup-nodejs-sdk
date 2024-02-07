[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / AccountScreenResponse

# Class: AccountScreenResponse

Response for an account transaction provided by Expedia\'s Fraud Prevention Service.

## Constructors

### new AccountScreenResponse(accountScreenResponse)

> **new AccountScreenResponse**(`accountScreenResponse`): [`AccountScreenResponse`](AccountScreenResponse.md)

#### Parameters

• **accountScreenResponse**: [`AccountScreenResponseProperties`](../interfaces/AccountScreenResponseProperties.md)

#### Returns

[`AccountScreenResponse`](AccountScreenResponse.md)

#### Source

models/AccountScreenResponse.ts:37

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `decision?` | [`AccountTakeoverFraudDecision`](../type-aliases/AccountTakeoverFraudDecision.md) | - |
| `riskId?` | `string` | Unique identifier assigned to the transaction by Expedia\'s Fraud Prevention Service. |
