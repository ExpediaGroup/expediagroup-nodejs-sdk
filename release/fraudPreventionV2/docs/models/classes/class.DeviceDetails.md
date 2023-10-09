[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > DeviceDetails

# Class: DeviceDetails

## Constructors

### constructor()

> **new DeviceDetails**(`deviceDetails`): [`DeviceDetails`](class.DeviceDetails.md)

#### Parameters

| Parameter       | Type                                                                            |
| :-------------- | :------------------------------------------------------------------------------ |
| `deviceDetails` | [`DeviceDetailsProperties`](../interfaces/interface.DeviceDetailsProperties.md) |

#### Returns

[`DeviceDetails`](class.DeviceDetails.md)

#### Source

models/DeviceDetails.ts:41

## Properties

| Property     | Type     | Description                                               |
| :----------- | :------- | :-------------------------------------------------------- |
| `deviceBox`? | `string` | Device related information retrieved from TrustWidget.    |
| `ipAddress`  | `string` | IP address of the device used for booking.                |
| `source`?    | `string` | Source of the device_box. Default value is `TrustWidget`. |
