# Class: ExemplarClient

[client](../index.md).ExemplarClient

## Extends

- [`Client`](../../models/core/classes/Client.md)

## Constructors

### new ExemplarClient(configurations)

> **new ExemplarClient**(`configurations`): [`ExemplarClient`](ExemplarClient.md)

#### Parameters

▪ **configurations**: [`ClientConfigurations`](../../models/core/interfaces/ClientConfigurations.md)

#### Returns

[`ExemplarClient`](ExemplarClient.md)

#### Overrides

`Client.constructor`

#### Source

client/apis/ExemplarClient.ts:45

## Methods

### greetings()

> **greetings**(`transactionId`): `Promise`\<[`Greeting`](../../models/classes/Greeting.md)\>

Get a \&quot;Hello $partnerName\&quot; response for an authenticated request

#### Parameters

▪ **transactionId**: `string`= `undefined`

A unique ID to uniquely identify a request/response cycle (optional, defaults to a random generated UUID)`<Greeting>` 

#### Returns

`Promise`\<[`Greeting`](../../models/classes/Greeting.md)\>

Promise

#### Throws

ExpediaGroupApiError

#### Throws

ExpediaGroupApiError

#### Source

client/apis/ExemplarClient.ts:66
