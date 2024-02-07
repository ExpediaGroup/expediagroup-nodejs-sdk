[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / PaymentThreeDSCriteria

# Class: PaymentThreeDSCriteria

Payment ThreeDS criteria attributes.

## Constructors

### new PaymentThreeDSCriteria(paymentThreeDSCriteria)

> **new PaymentThreeDSCriteria**(`paymentThreeDSCriteria`): [`PaymentThreeDSCriteria`](PaymentThreeDSCriteria.md)

#### Parameters

• **paymentThreeDSCriteria**: [`PaymentThreeDSCriteriaProperties`](../interfaces/PaymentThreeDSCriteriaProperties.md)

#### Returns

[`PaymentThreeDSCriteria`](PaymentThreeDSCriteria.md)

#### Source

models/PaymentThreeDSCriteria.ts:39

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `probableFlag?` | `boolean` | This is a flag passed that indicates that this transaction could potentially go through 3DS. |
| `transactionModel?` | `string` | Model used to process payment transaction. |
