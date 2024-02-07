[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / DeviceDetails

# Class: DeviceDetails

## Constructors

### new DeviceDetails(deviceDetails)

> **new DeviceDetails**(`deviceDetails`): [`DeviceDetails`](DeviceDetails.md)

#### Parameters

• **deviceDetails**: [`DeviceDetailsProperties`](../interfaces/DeviceDetailsProperties.md)

#### Returns

[`DeviceDetails`](DeviceDetails.md)

#### Source

models/DeviceDetails.ts:41

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `deviceBox?` | `string` | Device related information retrieved from TrustWidget. |
| `ipAddress` | `string` | IP address of the device used for booking. |
| `source?` | `string` | Source of the device_box. Default value is `TrustWidget`. |
