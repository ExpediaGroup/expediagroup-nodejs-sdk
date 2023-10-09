[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > CancellationReason

# Class: CancellationReason

Reason of order update cancellation.

## Constructors

### constructor()

> **new CancellationReason**(`cancellationReason`): [`CancellationReason`](class.CancellationReason.md)

#### Parameters

| Parameter            | Type                                                                                      |
| :------------------- | :---------------------------------------------------------------------------------------- |
| `cancellationReason` | [`CancellationReasonProperties`](../interfaces/interface.CancellationReasonProperties.md) |

#### Returns

[`CancellationReason`](class.CancellationReason.md)

#### Source

models/CancellationReason.ts:49

## Properties

| Property                    | Type     | Description                                                               |
| :-------------------------- | :------- | :------------------------------------------------------------------------ |
| `primaryReasonCode`?        | `string` | Primary cancellation reason code.                                         |
| `primaryReasonDescription`? | `string` | Primary cancellation reason code. Required if `order_status = CANCELLED`. |
| `subReasonCode`?            | `string` | Substitute cancellation reason code.                                      |
| `subReasonDescription`?     | `string` | Substitute cancellation reason description.                               |
