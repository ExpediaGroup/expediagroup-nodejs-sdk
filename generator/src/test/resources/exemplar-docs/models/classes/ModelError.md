# Class: ModelError

[models](../index.md).ModelError

The object used the describe an error, containing both human-readable and in a machine-readable information.

## Constructors

### new ModelError(error)

> **new ModelError**(`error`): [`ModelError`](ModelError.md)

#### Parameters

• **error**: [`ModelErrorProperties`](../interfaces/ModelErrorProperties.md)

#### Returns

[`ModelError`](ModelError.md)

#### Source

models/ModelError.ts:50

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `causes?` | [`ErrorCause`](ErrorCause.md)[] | An array of cause objects, that identify the specific causes of the error. | models/ModelError.ts:48 |
| `detail` | `string` | A human-readable explanation of the error, specific to this error occurrence. | models/ModelError.ts:40 |
| `type` | `string` | A URI reference, compliant with the standard EG error type format, which identifies the error type. It provides a machine-readable identifier for the error type. The error type will be aligned with the HTTP status code of the response. The URI can either be absolute or relative to the API\'s base URI. When dereferenced, it can also provide human-readable documentation for the error type. | models/ModelError.ts:35 |
