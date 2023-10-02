[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > PaymentThreeDSCriteria

# Class: PaymentThreeDSCriteria

Payment ThreeDS criteria attributes.

## Constructors

### constructor()

> **new PaymentThreeDSCriteria**(`paymentThreeDSCriteria`): [`PaymentThreeDSCriteria`](class.PaymentThreeDSCriteria.md)

#### Parameters

| Parameter                | Type                                                                                              |
| :----------------------- | :------------------------------------------------------------------------------------------------ |
| `paymentThreeDSCriteria` | [`PaymentThreeDSCriteriaProperties`](../interfaces/interface.PaymentThreeDSCriteriaProperties.md) |

#### Returns

[`PaymentThreeDSCriteria`](class.PaymentThreeDSCriteria.md)

#### Source

models/PaymentThreeDSCriteria.ts:39

## Properties

| Property            | Type      | Description                                                                                  |
| :------------------ | :-------- | :------------------------------------------------------------------------------------------- |
| `probableFlag`?     | `boolean` | This is a flag passed that indicates that this transaction could potentially go through 3DS. |
| `transactionModel`? | `string`  | Model used to process payment transaction.                                                   |
