[API](../../index.md) > [models](../index.md) > CancellationReason

# Class: CancellationReason

Reason of order update cancellation.

## Constructors

### new CancellationReason(cancellationReason)

> **new CancellationReason**(`cancellationReason`): [`CancellationReason`](CancellationReason.md)

#### Parameters

▪ **cancellationReason**: [`CancellationReasonProperties`](../interfaces/CancellationReasonProperties.md)

#### Source

models/CancellationReason.ts:49

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `primaryReasonCode?` | `string` | Primary cancellation reason code. | models/CancellationReason.ts:32 |
| `primaryReasonDescription?` | `string` | Primary cancellation reason code. Required if `order_status = CANCELLED`. | models/CancellationReason.ts:42 |
| `subReasonCode?` | `string` | Substitute cancellation reason code. | models/CancellationReason.ts:37 |
| `subReasonDescription?` | `string` | Substitute cancellation reason description. | models/CancellationReason.ts:47 |
