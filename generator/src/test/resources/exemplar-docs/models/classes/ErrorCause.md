[@expediagroup/exemplar-sdk](../../index.md) / [models](../index.md) / ErrorCause

# Class: ErrorCause

The object used to describe a cause for an error, containing both human-readable and in a machine-readable information.

## Constructors

### new ErrorCause(errorCause)

> **new ErrorCause**(`errorCause`): [`ErrorCause`](ErrorCause.md)

#### Parameters

• `errorCause`: [`ErrorCauseProperties`](../interfaces/ErrorCauseProperties.md)

#### Returns

[`ErrorCause`](ErrorCause.md)

#### Source

models/ErrorCause.ts:54

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `detail` | `string` | A human-readable explanation of the cause, specific to this cause occurrence. |
| `location?` | [`ErrorCauseLocationEnum`](../type-aliases/ErrorCauseLocationEnum.md) | The location of the element in the request that identifies this specific cause. When specified, the `name` will be specified and when applicable, the `value` as well. Can be one of: * `header` - When an error has been identified in one of the request headers. * `path` - When an error has been identified in one of the path parameters. * `query` - When an error has been identified in one of the query parameters. * `body` - When an error has been identified in the request body. |
| `name?` | `string` | The name of the element for this cause. When specified, the `location` will be specified and when applicable, the `value` as well. This name is a function of the value of the `location` property:   * When the `location` is set to `header`, this will be the name of the request header (e.g. `Content-Type`).   * When the `location` is set to `path`, this will be the name of the path parameter (e.g. in a path defined as `/users/{user_id}`, the value would be `user_id`).   * When the `location` is set to `query`, this will be the name of the query string parameter (e.g. `offset`).   * When the `location` is set to `body`, this will one of the field names specified in the body of the request.     * For a top level field, it should only be set to the field name (e.g. `firstName`).     * For a field in a nested object, it may contain the path to reach the field (e.g. `address.city`).     * For a field in an object part of collection, it may contain the index in the collection (e.g. `permissions[0].name`). |
| `type` | `string` | A URI reference, compliant with the standard EG error type format, which identifies the cause type. It provides a machine-readable identifier for the cause type. The cause type will be aligned with the error type. The URI can either be absolute or relative to the API\'s base URI. When dereferenced, it provides human-readable documentation for the cause type. |
| `value?` | `string` | A string representation of the erroneous value of the element identified in `name`, perceived to be the cause of the error. When specified, the `location` and `name` should be specified as well. This value may be omitted in cases where it cannot be provided (e.g. missing require field), or the erroneous value cannot be represented as a string. |
