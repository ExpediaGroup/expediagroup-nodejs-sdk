[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > IssuedRefundUpdateDetails

# Class: IssuedRefundUpdateDetails

Data that describes issued refund that should be updated.

## Constructors

### new IssuedRefundUpdateDetails(issuedRefundUpdateDetails)

> **new IssuedRefundUpdateDetails**(`issuedRefundUpdateDetails`): [`IssuedRefundUpdateDetails`](IssuedRefundUpdateDetails.md)

#### Parameters

▪ **issuedRefundUpdateDetails**: [`IssuedRefundUpdateDetailsProperties`](../interfaces/IssuedRefundUpdateDetailsProperties.md)

#### Source

models/IssuedRefundUpdateDetails.ts:42

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `refundIssuedAmount` | [`Amount`](Amount.md) | - | models/IssuedRefundUpdateDetails.ts:40 |
| `refundIssuedDateTime` | `Date` | Date and time when the 3rd party payment processor confirmed that a previously submitted payment refund has issued at the participating financial institutions. | models/IssuedRefundUpdateDetails.ts:35 |
