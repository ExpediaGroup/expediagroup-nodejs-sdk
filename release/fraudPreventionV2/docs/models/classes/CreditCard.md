[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > CreditCard

# Class: CreditCard

The `method` field value is used as a discriminator, with the following mapping: * `CREDIT_CARD`: `CreditCard` * `PAYPAL`: `PayPal` * `POINTS`: `Points` * `GIFT_CARD`: `GiftCard` * `INTERNET_BANK_PAYMENT`: `InternetBankPayment` * `DIRECT_DEBIT`: `DirectDebit`

## Extends

- [`Payment`](Payment.md)

## Constructors

### new CreditCard(creditCard)

> **new CreditCard**(`creditCard`): [`CreditCard`](CreditCard.md)

#### Parameters

▪ **creditCard**: [`CreditCardProperties`](../interfaces/CreditCardProperties.md)

#### Overrides

[`Payment`](Payment.md).[`constructor`](Payment.md#constructors)

#### Source

models/CreditCard.ts:92

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `authorizedAmount`? | [`Amount`](Amount.md) | - | [`Payment`](Payment.md).`authorizedAmount` | models/Payment.ts:70 |
| `public` | `billingAddress` | [`PaymentBillingAddress`](PaymentBillingAddress.md) | - | [`Payment`](Payment.md).`billingAddress` | models/Payment.ts:60 |
| `public` | `billingEmailAddress` | `string` | Email address associated with the payment. | [`Payment`](Payment.md).`billingEmailAddress` | models/Payment.ts:65 |
| `public` | `billingName` | [`Name`](Name.md) | - | [`Payment`](Payment.md).`billingName` | models/Payment.ts:55 |
| `public` | `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | The `brand` field value is the payment brand used for payment on this transaction. For credit card payment method ensure attributes mentioned in dictionary below are set to corresponding values only. Ensure to comply with the naming standards provided in below dictionary. For example, some Payment processors use “Japan Credit Bureau” but “JCB” should be used when calling Fraud API. Incorrect `brand` - `card_type` combination will result in data quality issues and result in degraded risk recommendation. \'brand\' is an enum value with the following mapping with CreditCard \'card_type\' attribute: *       brand                 :      card_type * ------------------------------------------------------- * `AMERICAN_EXPRESS`          : `AMERICAN_EXPRESS` * `DINERS_CLUB_INTERNATIONAL` : `DINERS_CLUB` * `BC_CARD`                   : `DINERS_CLUB` * `DISCOVER`                  : `DISCOVER` * `BC_CARD`                   : `DISCOVER` * `DINERS_CLUB_INTERNATIONAL` : `DISCOVER` * `JCB`                       : `DISCOVER` * `JCB`                       : `JCB` * `MASTER_CARD`               : `MASTER_CARD` * `MAESTRO`                   : `MASTER_CARD` * `POSTEPAY_MASTERCARD`       : `MASTER_CARD` * `SOLO`                      : `SOLO` * `SWITCH`                    : `SWITCH` * `MAESTRO`                   : `MAESTRO` * `CHINA_UNION_PAY`           : `CHINA_UNION_PAY` * `UATP`                      : `UATP` * `UATP_SUPPLY`               : `UATP` * `AIR_PLUS`                  : `UATP` * `UA_PASS_PLUS`              : `UATP` * `VISA`                      : `VISA` * `VISA_DELTA`                : `VISA` * `VISA_ELECTRON`             : `VISA` * `CARTA_SI`                  : `VISA` * `CARTE_BLEUE`               : `VISA` * `VISA_DANKORT`              : `VISA` * `POSTEPAY_VISA_ELECTRON`    : `VISA` * `PAYPAL`                    :  \'brand\' with \'Points\' payment_type is an enum value with following: * `EXPEDIA_REWARDS` * `AMEX_POINTS` * `BANK_OF_AMERICA_REWARDS` * `DISCOVER_POINTS` * `MASTER_CARD_POINTS` * `CITI_THANK_YOU_POINTS` * `MERRILL_LYNCH_REWARDS` * `WELLS_FARGO_POINTS` * `DELTA_SKY_MILES` * `UNITED_POINTS` * `DISCOVER_MILES` * `ALASKA_MILES` * `RBC_REWARDS` * `BILT_REWARDS` * `ORBUCKS` * `CHEAP_CASH` * `BONUS_PLUS` * `ULTIMATE_REWARDS`  \'brand\' with \'GiftCard\' payment_type is an enum value with following: * `GIFT_CARD`  \'brand\' with \'InternetBankPayment\' payment_type is an enum value with following: * `IBP` * `LOCAL_DEBIT_CARD` * `SOFORT` * `YANDEX` * `WEB_MONEY` * `QIWI` * `BITCOIN`  \'brand\' with \'DirectDebit\' payment_type is an enum value with following: * `ELV` * `INTER_COMPANY` | [`Payment`](Payment.md).`brand` | models/Payment.ts:48 |
| `public` | `cardAuthenticationFailureCount`? | `number` | Total authentication failure count for given card. | - | models/CreditCard.ts:87 |
| `public` | `cardAvsResponse`? | `string` | A field used to confirm if the address provided at the time of purchase matches what the bank has on file for the Credit Card. | - | models/CreditCard.ts:64 |
| `public` | `cardCvvResponse`? | `string` | A field used to confirm the Card Verification Value on the Credit Card matches the Credit Card used at the time of purchase. | - | models/CreditCard.ts:69 |
| `public` | `cardNumber` | `string` | All the digits (unencrypted) of the credit card number associated with the payment. | - | models/CreditCard.ts:39 |
| `public` | `cardType` | [`CreditCardCardTypeEnum`](../type-aliases/CreditCardCardTypeEnum.md) | The \'card_type\' field value is an enum value which is associated with the payment method of the specific payment instrument. For credit card payment method ensure attributes mentioned in dictionary below are set to corresponding values only. Ensure to comply with the naming standards provided in below dictionary. For example, some Payment processors use “Japan Credit Bureau” but “JCB” should be used when calling Fraud API. Incorrect `card_type` - `brand` combination will result in data quality issues and result in degraded risk recommendation. \'card_type\' is an enum value with the following mapping with Payment `brand` attribute: *       card_type            :          brand * -------------------------------------------------------- * `AMERICAN_EXPRESS`         : `AMERICAN_EXPRESS` * `DINERS_CLUB`              : `DINERS_CLUB_INTERNATIONAL` * `DINERS_CLUB`              : `BC_CARD` * `DISCOVER`                 : `DISCOVER` * `DISCOVER`                 : `BC_CARD` * `DISCOVER`                 : `DINERS_CLUB_INTERNATIONAL` * `DISCOVER`                 : `JCB` * `JCB`                      : `JCB` * `MASTER_CARD`              : `MASTER_CARD` * `MASTER_CARD`              : `MAESTRO` * `MASTER_CARD`              : `POSTEPAY_MASTERCARD` * `SOLO`                     : `SOLO` * `SWITCH`                   : `SWITCH` * `MAESTRO`                  : `MAESTRO` * `CHINA_UNION_PAY`          : `CHINA_UNION_PAY` * `UATP`                     : `UATP` * `UATP`                     : `UATP_SUPPLY` * `UATP`                     : `AIR_PLUS` * `UATP`                     : `UA_PASS_PLUS` * `VISA`                     : `VISA` * `VISA`                     : `VISA_DELTA` * `VISA`                     : `VISA_ELECTRON` * `VISA`                     : `CARTA_SI` * `VISA`                     : `CARTE_BLEUE` * `VISA`                     : `VISA_DANKORT` * `VISA`                     : `POSTEPAY_VISA_ELECTRON` | - | models/CreditCard.ts:34 |
| `public` | `electronicCommerceIndicator`? | `string` | Electronic Commerce Indicator, a two or three digit number usually returned by a 3rd party payment processor in regards to the authentication used when gathering the cardholder\'s payment credentials. | - | models/CreditCard.ts:49 |
| `public` | `expiryDate` | `Date` | Expiration date of the credit card used for payment, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | - | models/CreditCard.ts:44 |
| `public` | `merchantOrderCode`? | `string` | Reference code passed to acquiring bank at the time of payment. This code is the key ID that ties back to payments data at the payment level. | - | models/CreditCard.ts:82 |
| `readonly` | `method` | `"CREDIT_CARD"` | - | - | models/CreditCard.ts:90 |
| `public` | `operations`? | [`Operations`](Operations.md) | - | [`Payment`](Payment.md).`operations` | models/Payment.ts:85 |
| `public` | `reason`? | [`PaymentReason`](../type-aliases/PaymentReason.md) | - | [`Payment`](Payment.md).`reason` | models/Payment.ts:50 |
| `public` | `telephones` | [`Telephone`](Telephone.md)[] | Telephone(s) associated with card holder and credit card. | - | models/CreditCard.ts:77 |
| `public` | `threeDigitsSecureCriteria`? | [`PaymentThreeDSCriteria`](PaymentThreeDSCriteria.md) | - | [`Payment`](Payment.md).`threeDigitsSecureCriteria` | models/Payment.ts:80 |
| `public` | `verifiedAmount`? | [`Amount`](Amount.md) | - | [`Payment`](Payment.md).`verifiedAmount` | models/Payment.ts:75 |
| `public` | `virtualCreditCardFlag`? | `boolean` | A flag to indicate that the bank card being used for the charge is a virtual credit card. | - | models/CreditCard.ts:54 |
| `public` | `walletType`? | `string` | If a virtual/digital form of payment was used, the type of digital wallet should be specified here. Possible `wallet_type`\'s include: `Google` or `ApplePay`. | - | models/CreditCard.ts:59 |
