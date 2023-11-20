[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / AccountTakeoverDeviceDetails

# Class: AccountTakeoverDeviceDetails

Information specific to the Partner\'s device through which a transaction was made.

## Constructors

### new AccountTakeoverDeviceDetails(accountTakeoverDeviceDetails)

> **new AccountTakeoverDeviceDetails**(`accountTakeoverDeviceDetails`): [`AccountTakeoverDeviceDetails`](AccountTakeoverDeviceDetails.md)

#### Parameters

▪ **accountTakeoverDeviceDetails**: [`AccountTakeoverDeviceDetailsProperties`](../interfaces/AccountTakeoverDeviceDetailsProperties.md)

#### Returns

[`AccountTakeoverDeviceDetails`](AccountTakeoverDeviceDetails.md)

#### Source

models/AccountTakeoverDeviceDetails.ts:54

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `deviceBox` | `string` | Device related information retrieved from TrustWidget. | models/AccountTakeoverDeviceDetails.ts:37 |
| `ipAddress` | `string` | IP address of the device used for this event. | models/AccountTakeoverDeviceDetails.ts:42 |
| `source`? | `string` | Source of the device_box. Default value is `TrustWidget`. | models/AccountTakeoverDeviceDetails.ts:32 |
| `type`? | [`AccountTakeoverDeviceDetailsTypeEnum`](../type-aliases/AccountTakeoverDeviceDetailsTypeEnum.md) | The categorized type of device used by a user. Possible values are: - `WEBSITE` - Applicable if the user initiated this event from a web browser on a desktop computer. - `PHONE_WEB` - Applicable if the user initiated this event from a web browser on a phone. - `TABLET_WEB` - Applicable if the user initiated this event from a web browser on a tablet. - `PHONE_APP` - Applicable if the user initiated this event from an app on a phone. - `TABLET_APP` - Applicable if the user initiated this event from an app on a tablet. | models/AccountTakeoverDeviceDetails.ts:52 |
| `userAgent` | `string` | The application type, operating system, software vendor, or software version of the originating request. | models/AccountTakeoverDeviceDetails.ts:47 |
