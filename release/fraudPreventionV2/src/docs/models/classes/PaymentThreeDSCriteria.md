[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > PaymentThreeDSCriteria

# Class: PaymentThreeDSCriteria

Payment ThreeDS criteria attributes.

## Constructors

### new PaymentThreeDSCriteria(paymentThreeDSCriteria)

> **new PaymentThreeDSCriteria**(`paymentThreeDSCriteria`): [`PaymentThreeDSCriteria`](PaymentThreeDSCriteria.md)

#### Parameters

▪ **paymentThreeDSCriteria**: [`PaymentThreeDSCriteriaProperties`](../interfaces/PaymentThreeDSCriteriaProperties.md)

#### Source

models/PaymentThreeDSCriteria.ts:39

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `probableFlag?` | `boolean` | This is a flag passed that indicates that this transaction could potentially go through 3DS. | models/PaymentThreeDSCriteria.ts:32 |
| `transactionModel?` | `string` | Model used to process payment transaction. | models/PaymentThreeDSCriteria.ts:37 |
