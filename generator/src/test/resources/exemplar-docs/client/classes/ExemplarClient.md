[@expediagroup/exemplar-sdk](../../index.md) / [client](../index.md) / ExemplarClient

# Class: ExemplarClient

## Extends

- [`Client`](../core/classes/Client.md)

## Constructors

### new ExemplarClient(configurations)

> **new ExemplarClient**(`configurations`): [`ExemplarClient`](ExemplarClient.md)

#### Parameters

• **configurations**: [`ClientConfigurations`](../core/interfaces/ClientConfigurations.md)

#### Returns

[`ExemplarClient`](ExemplarClient.md)

#### Overrides

`Client.constructor`

#### Source

client/apis/ExemplarClient.ts:45

## Methods

### greetings()

> **greetings**(): `Promise`\<[`Greeting`](../../models/classes/Greeting.md)\>

Get a \&quot;Hello $partnerName\&quot; response for an authenticated request
`<Greeting>`

#### Returns

`Promise`\<[`Greeting`](../../models/classes/Greeting.md)\>

Promise

#### Throws

ExpediaGroupApiError

#### Throws

ExpediaGroupApiError

#### Source

client/apis/ExemplarClient.ts:66
