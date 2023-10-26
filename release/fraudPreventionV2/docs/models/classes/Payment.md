[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > Payment

# Class: Payment

The `method` field value is used as a discriminator, with the following mapping: * `CREDIT_CARD`: `CreditCard` * `PAYPAL`: `PayPal` * `POINTS`: `Points` * `GIFT_CARD`: `GiftCard` * `INTERNET_BANK_PAYMENT`: `InternetBankPayment` * `DIRECT_DEBIT`: `DirectDebit`

## Extended By

- [`CreditCard`](CreditCard.md)
- [`DirectDebit`](DirectDebit.md)
- [`GiftCard`](GiftCard.md)
- [`InternetBankPayment`](InternetBankPayment.md)
- [`PayPal`](PayPal.md)
- [`Points`](Points.md)

## Constructors

### new Payment(payment)

> **new Payment**(`payment`): [`Payment`](Payment.md)

#### Parameters

▪ **payment**: [`PaymentProperties`](../interfaces/PaymentProperties.md)

#### Source

models/Payment.ts:87

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `authorizedAmount`? | [`Amount`](Amount.md) | - | models/Payment.ts:70 |
| `billingAddress` | [`PaymentBillingAddress`](PaymentBillingAddress.md) | - | models/Payment.ts:60 |
| `billingEmailAddress` | `string` | Email address associated with the payment. | models/Payment.ts:65 |
| `billingName` | [`Name`](Name.md) | - | models/Payment.ts:55 |
| `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | The `brand` field value is the payment brand used for payment on this transaction. For credit card payment method ensure attributes mentioned in dictionary below are set to corresponding values only. Ensure to comply with the naming standards provided in below dictionary. For example, some Payment processors use “Japan Credit Bureau” but “JCB” should be used when calling Fraud API. Incorrect `brand` - `card_type` combination will result in data quality issues and result in degraded risk recommendation. \'brand\' is an enum value with the following mapping with CreditCard \'card_type\' attribute: *       brand                 :      card_type * ------------------------------------------------------- * `AMERICAN_EXPRESS`          : `AMERICAN_EXPRESS` * `DINERS_CLUB_INTERNATIONAL` : `DINERS_CLUB` * `BC_CARD`                   : `DINERS_CLUB` * `DISCOVER`                  : `DISCOVER` * `BC_CARD`                   : `DISCOVER` * `DINERS_CLUB_INTERNATIONAL` : `DISCOVER` * `JCB`                       : `DISCOVER` * `JCB`                       : `JCB` * `MASTER_CARD`               : `MASTER_CARD` * `MAESTRO`                   : `MASTER_CARD` * `POSTEPAY_MASTERCARD`       : `MASTER_CARD` * `SOLO`                      : `SOLO` * `SWITCH`                    : `SWITCH` * `MAESTRO`                   : `MAESTRO` * `CHINA_UNION_PAY`           : `CHINA_UNION_PAY` * `UATP`                      : `UATP` * `UATP_SUPPLY`               : `UATP` * `AIR_PLUS`                  : `UATP` * `UA_PASS_PLUS`              : `UATP` * `VISA`                      : `VISA` * `VISA_DELTA`                : `VISA` * `VISA_ELECTRON`             : `VISA` * `CARTA_SI`                  : `VISA` * `CARTE_BLEUE`               : `VISA` * `VISA_DANKORT`              : `VISA` * `POSTEPAY_VISA_ELECTRON`    : `VISA` * `PAYPAL`                    :  \'brand\' with \'Points\' payment_type is an enum value with following: * `EXPEDIA_REWARDS` * `AMEX_POINTS` * `BANK_OF_AMERICA_REWARDS` * `DISCOVER_POINTS` * `MASTER_CARD_POINTS` * `CITI_THANK_YOU_POINTS` * `MERRILL_LYNCH_REWARDS` * `WELLS_FARGO_POINTS` * `DELTA_SKY_MILES` * `UNITED_POINTS` * `DISCOVER_MILES` * `ALASKA_MILES` * `RBC_REWARDS` * `BILT_REWARDS` * `ORBUCKS` * `CHEAP_CASH` * `BONUS_PLUS` * `ULTIMATE_REWARDS`  \'brand\' with \'GiftCard\' payment_type is an enum value with following: * `GIFT_CARD`  \'brand\' with \'InternetBankPayment\' payment_type is an enum value with following: * `IBP` * `LOCAL_DEBIT_CARD` * `SOFORT` * `YANDEX` * `WEB_MONEY` * `QIWI` * `BITCOIN`  \'brand\' with \'DirectDebit\' payment_type is an enum value with following: * `ELV` * `INTER_COMPANY` | models/Payment.ts:48 |
| `operations`? | [`Operations`](Operations.md) | - | models/Payment.ts:85 |
| `reason`? | [`PaymentReason`](../type-aliases/PaymentReason.md) | - | models/Payment.ts:50 |
| `threeDigitsSecureCriteria`? | [`PaymentThreeDSCriteria`](PaymentThreeDSCriteria.md) | - | models/Payment.ts:80 |
| `verifiedAmount`? | [`Amount`](Amount.md) | - | models/Payment.ts:75 |
