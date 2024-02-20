[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / DelayedFulfillment

# Class: DelayedFulfillment

This field holds details about activity\'s capabilities and execution details related to inventory hold functionality.

## Constructors

### new DelayedFulfillment(delayedFulfillment)

> **new DelayedFulfillment**(`delayedFulfillment`): [`DelayedFulfillment`](DelayedFulfillment.md)

#### Parameters

• **delayedFulfillment**: [`DelayedFulfillmentProperties`](../interfaces/DelayedFulfillmentProperties.md)

#### Returns

[`DelayedFulfillment`](DelayedFulfillment.md)

#### Source

models/DelayedFulfillment.ts:49

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `holdDurationUnitOfMeasure?` | `string` | This field indicates the unit of duration of the hold on an activity. |
| `holdDurationValue?` | `number` | This field indicates the duration of the hold on an activity. |
| `isAvailable?` | `boolean` | This field indicates if the fulfillment of an activity is possible or not. |
| `isDelayedCustomerConfirmation?` | `boolean` | This field indicates whether customer order confirmation can be delayed. Customer will receive ticket number, voucher ID or any other type of confirmation until transaction is successfully completed or approved by an analyst during the review process. |
