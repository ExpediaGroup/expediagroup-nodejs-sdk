[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / Hotel

# Class: Hotel

The `type` field value is used as a discriminator, with the following mapping: * `CRUISE`: `Cruise` * `AIR`: `Air` * `CAR`: `Car` * `INSURANCE`: `Insurance` * `HOTEL`: `Hotel` * `RAIL`: `Rail`

## Extends

- [`TravelProduct`](TravelProduct.md)

## Constructors

### new Hotel(hotel)

> **new Hotel**(`hotel`): [`Hotel`](Hotel.md)

#### Parameters

▪ **hotel**: [`HotelProperties`](../interfaces/HotelProperties.md)

#### Returns

[`Hotel`](Hotel.md)

#### Overrides

[`TravelProduct`](TravelProduct.md).[`constructor`](TravelProduct.md#constructors)

#### Source

models/Hotel.ts:69

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `address` | [`HotelAddress`](HotelAddress.md) | - | - | models/Hotel.ts:54 |
| `public` | `checkinTime` | `Date` | Local date and time of the hotel check-in, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | - | models/Hotel.ts:59 |
| `public` | `checkoutTime` | `Date` | Local date and time of the hotel check-out, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | - | models/Hotel.ts:64 |
| `public` | `hotelId` | `string` | Unique hotel identifier assigned by the partner. | - | models/Hotel.ts:34 |
| `public` | `hotelName` | `string` | Name of the hotel. | - | models/Hotel.ts:44 |
| `public` | `inventorySource` | [`TravelProductInventorySourceEnum`](../type-aliases/TravelProductInventorySourceEnum.md) | Identifies the business model through which the supply is being sold. Merchant/Agency. * `MERCHANT` is used when Partner is the merchant of record for this order. * `AGENCY` is used when this order is through an agency booking. | [`TravelProduct`](TravelProduct.md).`inventorySource` | models/TravelProduct.ts:44 |
| `public` | `inventoryType` | `string` | Type of inventory. Ensure attributes mentioned in dictionary below are set to corresponding values only. `inventory_type` has the following mapping with TravelProduct `type` attribute: *       inventory_type            :      type * ------------------------------------------------------ *  `Cruise`                       : `CRUISE` *  `Air`                          : `AIR` *  `Car`                          : `CAR` *  `Insurance`                    : `INSURANCE` *  `Hotel`                        : `HOTEL` *  `Rail`                         :  `RAIL` | [`TravelProduct`](TravelProduct.md).`inventoryType` | models/TravelProduct.ts:39 |
| `public` | `payLater`? | `boolean` | The attribute serves as a boolean indicator that significantly influences the handling of payment information during the fraud prevention process: * When \'pay_later\' is set to \'true\':   - This configuration signals that payment information is optional for the booking. Travelers are given the choice to defer payment until they arrive at the rental counter following the completion of the booking.   - It is imperative for partners to explicitly set this attribute to \'true\' when payment information can be optional for a particular booking scenario. * When \'pay_later\' is set to \'false\':   - In this mode, the attribute mandates the inclusion of payment information during the order purchase screen request. Travelers are required to provide payment details.   - Partners must exercise caution and ensure they supply the necessary payment information, as failure to do so in cases where \'pay_later\' is set to \'false\' will result in a \'Bad Request\' error. This error helps maintain the consistency and accuracy of the fraud prevention process and payment handling. | [`TravelProduct`](TravelProduct.md).`payLater` | models/TravelProduct.ts:54 |
| `public` | `price` | [`Amount`](Amount.md) | - | [`TravelProduct`](TravelProduct.md).`price` | models/TravelProduct.ts:34 |
| `public` | `priceWithheld`? | `boolean` | Identifies if the product price was withheld from the customer during the booking process. | - | models/Hotel.ts:39 |
| `public` | `roomCount`? | `number` | Total number of rooms booked within the hotel product collection. | - | models/Hotel.ts:49 |
| `public` | `travelersReferences`? | `string`[] | List of travelerGuids who are part of the traveling party on the order for the product. Information for each product and its required travelers should be provided in the API request. If the product booking does not require accompanying quest information then that does not need to be provided in the API request. Example: * For Air products, all travelers\' details are required to complete the booking. * For Hotel products, typically the details on the person checking-in is required. * For Car products, typically only the primary driver information is required. If multiple traveler details are in the itinerary, this structure allows to fill up traveler details once in the `travelers` section, and then associate individual products to the respective travelers. This association is made using `traveler_id` field. A GUID can be generated for each object in the `travelers` section. The same GUID can be provided in the `traveler_references` below. The `travelers` array should have at least one `traveler` object, and each `traveler` object should have a `traveler_id` which is not necessarily an account id. Example: *   Travelers * ------------ *  A - GUID1 *  B - GUID2 *  C - GUID3 * *   Products * ------------ * Air *   [GUID1, GUID2, GUID3] * Hotel *   [GUID1] * Car *   [GUID3] * Rail *   [GUID2] * The example above demonstrates the association of travelers with various products. * All three travelers (A, B, and C) are associated with the Air product. * Traveler A is associated with the Hotel. * Traveler C is associated with the Car product. * Traveler B is associated with the Rail product. | [`TravelProduct`](TravelProduct.md).`travelersReferences` | models/TravelProduct.ts:49 |
| `readonly` | `type` | `"HOTEL"` | - | - | models/Hotel.ts:67 |
