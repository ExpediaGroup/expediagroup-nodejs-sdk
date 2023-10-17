[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > SettledRefundUpdateDetails

# Class: SettledRefundUpdateDetails

Data that describes settled refund that should be updated.

## Constructors

### new SettledRefundUpdateDetails(settledRefundUpdateDetails)

> **new SettledRefundUpdateDetails**(`settledRefundUpdateDetails`): [`SettledRefundUpdateDetails`](SettledRefundUpdateDetails.md)

#### Parameters

▪ **settledRefundUpdateDetails**: [`SettledRefundUpdateDetailsProperties`](../interfaces/SettledRefundUpdateDetailsProperties.md)

#### Source

models/SettledRefundUpdateDetails.ts:57

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `acquirerReferenceNumber` | `string` | A unique number that tags a credit or debit card transaction when it goes from the merchant\'s bank through to the cardholder\'s bank. Typically, merchants can get this number from their payment processors. This number is used when dealing with disputes/chargebacks on original transactions. | models/SettledRefundUpdateDetails.ts:45 |
| `refundDepositDateTime` | `Date` | Date and time when the refund was deposited to the original form of payment. | models/SettledRefundUpdateDetails.ts:40 |
| `refundSettledAmount` | [`Amount`](Amount.md) | - | models/SettledRefundUpdateDetails.ts:55 |
| `refundSettlementDateTime` | `Date` | Date and time when the 3rd party payment processor confirmed that a previously submitted payment refund has settled at the participating financial institutions. | models/SettledRefundUpdateDetails.ts:35 |
| `settlementId` | `string` | Unique settlement identifier specific to the payment processor for the settlement transaction generated for a previously submitted payment refund. | models/SettledRefundUpdateDetails.ts:50 |
