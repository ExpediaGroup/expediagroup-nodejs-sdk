[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > IssuedRefundUpdateDetails

# Class: IssuedRefundUpdateDetails

Data that describes issued refund that should be updated.

## Constructors

### constructor()

> **new IssuedRefundUpdateDetails**(`issuedRefundUpdateDetails`): [`IssuedRefundUpdateDetails`](class.IssuedRefundUpdateDetails.md)

#### Parameters

| Parameter                   | Type                                                                                                    |
| :-------------------------- | :------------------------------------------------------------------------------------------------------ |
| `issuedRefundUpdateDetails` | [`IssuedRefundUpdateDetailsProperties`](../interfaces/interface.IssuedRefundUpdateDetailsProperties.md) |

#### Returns

[`IssuedRefundUpdateDetails`](class.IssuedRefundUpdateDetails.md)

#### Source

models/IssuedRefundUpdateDetails.ts:42

## Properties

| Property               | Type                        | Description                                                                                                                                                     |
| :--------------------- | :-------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `refundIssuedAmount`   | [`Amount`](class.Amount.md) | -                                                                                                                                                               |
| `refundIssuedDateTime` | `Date`                      | Date and time when the 3rd party payment processor confirmed that a previously submitted payment refund has issued at the participating financial institutions. |
