[@expediagroup/exemplar-sdk](../../index.md) / [client](../index.md) / ExemplarClient

# Class: ExemplarClient

Defined in: client/apis/ExemplarClient.ts:37

## Extends

- [`Client`](../core/classes/Client.md)

## Constructors

### Constructor

> **new ExemplarClient**(`configurations`): `ExemplarClient`

Defined in: client/apis/ExemplarClient.ts:45

#### Parameters

##### configurations

[`ClientConfigurations`](../core/interfaces/ClientConfigurations.md)

#### Returns

`ExemplarClient`

#### Overrides

`Client.constructor`

## Methods

### greetings()

> **greetings**(): `Promise`\<[`Greeting`](../../models/classes/Greeting.md)\>

Defined in: client/apis/ExemplarClient.ts:66

Get a \&quot;Hello $partnerName\&quot; response for an authenticated request
<Greeting>

#### Returns

`Promise`\<[`Greeting`](../../models/classes/Greeting.md)\>

Promise

#### Throws

ExpediaGroupApiError

#### Throws

ExpediaGroupApiError
