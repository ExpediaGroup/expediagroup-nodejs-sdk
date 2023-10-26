[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > DeviceDetails

# Class: DeviceDetails

## Constructors

### new DeviceDetails(deviceDetails)

> **new DeviceDetails**(`deviceDetails`): [`DeviceDetails`](DeviceDetails.md)

#### Parameters

▪ **deviceDetails**: [`DeviceDetailsProperties`](../interfaces/DeviceDetailsProperties.md)

#### Source

models/DeviceDetails.ts:41

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `deviceBox`? | `string` | Device related information retrieved from TrustWidget. | models/DeviceDetails.ts:34 |
| `ipAddress` | `string` | IP address of the device used for booking. | models/DeviceDetails.ts:39 |
| `source`? | `string` | Source of the device_box. Default value is `TrustWidget`. | models/DeviceDetails.ts:29 |
