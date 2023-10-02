[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > SettledRefundUpdateDetails

# Class: SettledRefundUpdateDetails

Data that describes settled refund that should be updated.

## Constructors

### constructor()

> **new SettledRefundUpdateDetails**(`settledRefundUpdateDetails`): [`SettledRefundUpdateDetails`](class.SettledRefundUpdateDetails.md)

#### Parameters

| Parameter                    | Type                                                                                                      |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------- |
| `settledRefundUpdateDetails` | [`SettledRefundUpdateDetailsProperties`](../interfaces/interface.SettledRefundUpdateDetailsProperties.md) |

#### Returns

[`SettledRefundUpdateDetails`](class.SettledRefundUpdateDetails.md)

#### Source

models/SettledRefundUpdateDetails.ts:57

## Properties

| Property                   | Type                        | Description                                                                                                                                                                                                                                                                                         |
| :------------------------- | :-------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `acquirerReferenceNumber`  | `string`                    | A unique number that tags a credit or debit card transaction when it goes from the merchant\'s bank through to the cardholder\'s bank. Typically, merchants can get this number from their payment processors. This number is used when dealing with disputes/chargebacks on original transactions. |
| `refundDepositDateTime`    | `Date`                      | Date and time when the refund was deposited to the original form of payment.                                                                                                                                                                                                                        |
| `refundSettledAmount`      | [`Amount`](class.Amount.md) | -                                                                                                                                                                                                                                                                                                   |
| `refundSettlementDateTime` | `Date`                      | Date and time when the 3rd party payment processor confirmed that a previously submitted payment refund has settled at the participating financial institutions.                                                                                                                                    |
| `settlementId`             | `string`                    | Unique settlement identifier specific to the payment processor for the settlement transaction generated for a previously submitted payment refund.                                                                                                                                                  |
