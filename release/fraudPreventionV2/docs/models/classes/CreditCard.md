[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / CreditCard

# Class: CreditCard

The `method` field value is used as a discriminator, with the following mapping: * `CREDIT_CARD`: `CreditCard` * `PAYPAL`: `PayPal` * `POINTS`: `Points` * `GIFT_CARD`: `GiftCard` * `INTERNET_BANK_PAYMENT`: `InternetBankPayment` * `DIRECT_DEBIT`: `DirectDebit`

## Extends

- [`Payment`](Payment.md)

## Constructors

### new CreditCard(creditCard)

> **new CreditCard**(`creditCard`): [`CreditCard`](CreditCard.md)

#### Parameters

• **creditCard**: [`CreditCardProperties`](../interfaces/CreditCardProperties.md)

#### Returns

[`CreditCard`](CreditCard.md)

#### Overrides

[`Payment`](Payment.md).[`constructor`](Payment.md#constructors)

#### Source

models/CreditCard.ts:92

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `authorizedAmount?` | `public` | [`Amount`](Amount.md) | - | [`Payment`](Payment.md).`authorizedAmount` |
| `billingAddress` | `public` | [`PaymentBillingAddress`](PaymentBillingAddress.md) | - | [`Payment`](Payment.md).`billingAddress` |
| `billingEmailAddress` | `public` | `string` | Email address associated with the payment. | [`Payment`](Payment.md).`billingEmailAddress` |
| `billingName` | `public` | [`Name`](Name.md) | - | [`Payment`](Payment.md).`billingName` |
| `brand` | `public` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | The `brand` field value is the payment brand used for payment on this transaction. For credit card payment method ensure attributes mentioned in dictionary below are set to corresponding values only. Ensure to comply with the naming standards provided in below dictionary. For example, some Payment processors use “Japan Credit Bureau” but “JCB” should be used when calling Fraud API. Incorrect `brand` - `card_type` combination will result in data quality issues and result in degraded risk recommendation. \'brand\' is an enum value with the following mapping with CreditCard \'card_type\' attribute: *       brand                 :      card_type * ------------------------------------------------------- * `AMERICAN_EXPRESS`          : `AMERICAN_EXPRESS` * `DINERS_CLUB_INTERNATIONAL` : `DINERS_CLUB` * `BC_CARD`                   : `DINERS_CLUB` * `DISCOVER`                  : `DISCOVER` * `BC_CARD`                   : `DISCOVER` * `DINERS_CLUB_INTERNATIONAL` : `DISCOVER` * `JCB`                       : `DISCOVER` * `JCB`                       : `JCB` * `MASTER_CARD`               : `MASTER_CARD` * `MAESTRO`                   : `MASTER_CARD` * `POSTEPAY_MASTERCARD`       : `MASTER_CARD` * `SOLO`                      : `SOLO` * `SWITCH`                    : `SWITCH` * `MAESTRO`                   : `MAESTRO` * `CHINA_UNION_PAY`           : `CHINA_UNION_PAY` * `UATP`                      : `UATP` * `UATP_SUPPLY`               : `UATP` * `AIR_PLUS`                  : `UATP` * `UA_PASS_PLUS`              : `UATP` * `VISA`                      : `VISA` * `VISA_DELTA`                : `VISA` * `VISA_ELECTRON`             : `VISA` * `CARTA_SI`                  : `VISA` * `CARTE_BLEUE`               : `VISA` * `VISA_DANKORT`              : `VISA` * `POSTEPAY_VISA_ELECTRON`    : `VISA` * `PAYPAL`                    :  \'brand\' with \'Points\' payment_type is an enum value with following: * `EXPEDIA_REWARDS` * `AMEX_POINTS` * `BANK_OF_AMERICA_REWARDS` * `DISCOVER_POINTS` * `MASTER_CARD_POINTS` * `CITI_THANK_YOU_POINTS` * `MERRILL_LYNCH_REWARDS` * `WELLS_FARGO_POINTS` * `DELTA_SKY_MILES` * `UNITED_POINTS` * `DISCOVER_MILES` * `ALASKA_MILES` * `RBC_REWARDS` * `BILT_REWARDS` * `ORBUCKS` * `CHEAP_CASH` * `BONUS_PLUS` * `ULTIMATE_REWARDS`  \'brand\' with \'GiftCard\' payment_type is an enum value with following: * `GIFT_CARD`  \'brand\' with \'InternetBankPayment\' payment_type is an enum value with following: * `IBP` * `LOCAL_DEBIT_CARD` * `SOFORT` * `YANDEX` * `WEB_MONEY` * `QIWI` * `BITCOIN`  \'brand\' with \'DirectDebit\' payment_type is an enum value with following: * `ELV` * `INTER_COMPANY` * `SEPA_ELV` | [`Payment`](Payment.md).`brand` |
| `cardAuthenticationFailureCount?` | `public` | `number` | Total authentication failure count for given card. | - |
| `cardAvsResponse?` | `public` | `string` | A field used to confirm if the address provided at the time of purchase matches what the bank has on file for the Credit Card. | - |
| `cardCvvResponse?` | `public` | `string` | A field used to confirm the Card Verification Value on the Credit Card matches the Credit Card used at the time of purchase. | - |
| `cardNumber` | `public` | `string` | All the digits (unencrypted) of the credit card number associated with the payment. | - |
| `cardType` | `public` | [`CreditCardCardTypeEnum`](../type-aliases/CreditCardCardTypeEnum.md) | The \'card_type\' field value is an enum value which is associated with the payment method of the specific payment instrument. For credit card payment method ensure attributes mentioned in dictionary below are set to corresponding values only. Ensure to comply with the naming standards provided in below dictionary. For example, some Payment processors use “Japan Credit Bureau” but “JCB” should be used when calling Fraud API. Incorrect `card_type` - `brand` combination will result in data quality issues and result in degraded risk recommendation. \'card_type\' is an enum value with the following mapping with Payment `brand` attribute: *       card_type            :          brand * -------------------------------------------------------- * `AMERICAN_EXPRESS`         : `AMERICAN_EXPRESS` * `DINERS_CLUB`              : `DINERS_CLUB_INTERNATIONAL` * `DINERS_CLUB`              : `BC_CARD` * `DISCOVER`                 : `DISCOVER` * `DISCOVER`                 : `BC_CARD` * `DISCOVER`                 : `DINERS_CLUB_INTERNATIONAL` * `DISCOVER`                 : `JCB` * `JCB`                      : `JCB` * `MASTER_CARD`              : `MASTER_CARD` * `MASTER_CARD`              : `MAESTRO` * `MASTER_CARD`              : `POSTEPAY_MASTERCARD` * `SOLO`                     : `SOLO` * `SWITCH`                   : `SWITCH` * `MAESTRO`                  : `MAESTRO` * `CHINA_UNION_PAY`          : `CHINA_UNION_PAY` * `UATP`                     : `UATP` * `UATP`                     : `UATP_SUPPLY` * `UATP`                     : `AIR_PLUS` * `UATP`                     : `UA_PASS_PLUS` * `VISA`                     : `VISA` * `VISA`                     : `VISA_DELTA` * `VISA`                     : `VISA_ELECTRON` * `VISA`                     : `CARTA_SI` * `VISA`                     : `CARTE_BLEUE` * `VISA`                     : `VISA_DANKORT` * `VISA`                     : `POSTEPAY_VISA_ELECTRON` | - |
| `electronicCommerceIndicator?` | `public` | `string` | Electronic Commerce Indicator, a two or three digit number usually returned by a 3rd party payment processor in regards to the authentication used when gathering the cardholder\'s payment credentials. | - |
| `expiryDate` | `public` | `Date` | Expiration date of the credit card used for payment, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | - |
| `extensions?` | `public` | `Object` | A key-value pair map to hold additional attributes. | [`Payment`](Payment.md).`extensions` |
| `merchantOrderCode?` | `public` | `string` | Reference code passed to acquiring bank at the time of payment. This code is the key ID that ties back to payments data at the payment level. | - |
| `method` | `readonly` | `"CREDIT_CARD"` | - | - |
| `operations?` | `public` | [`Operations`](Operations.md) | - | [`Payment`](Payment.md).`operations` |
| `reason?` | `public` | [`PaymentReason`](../type-aliases/PaymentReason.md) | - | [`Payment`](Payment.md).`reason` |
| `telephones` | `public` | [`Telephone`](Telephone.md)[] | Telephone(s) associated with card holder and credit card. | - |
| `threeDigitsSecureCriteria?` | `public` | [`PaymentThreeDSCriteria`](PaymentThreeDSCriteria.md) | - | [`Payment`](Payment.md).`threeDigitsSecureCriteria` |
| `verifiedAmount?` | `public` | [`Amount`](Amount.md) | - | [`Payment`](Payment.md).`verifiedAmount` |
| `virtualCreditCardFlag?` | `public` | `boolean` | A flag to indicate that the bank card being used for the charge is a virtual credit card. | - |
| `walletType?` | `public` | `string` | If a virtual/digital form of payment was used, the type of digital wallet should be specified here. Possible `wallet_type`\'s include: `Google` or `ApplePay`. | - |
