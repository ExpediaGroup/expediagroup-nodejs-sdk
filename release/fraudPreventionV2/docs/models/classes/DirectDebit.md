[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / DirectDebit

# Class: DirectDebit

The `method` field value is used as a discriminator, with the following mapping: * `CREDIT_CARD`: `CreditCard` * `PAYPAL`: `PayPal` * `POINTS`: `Points` * `GIFT_CARD`: `GiftCard` * `INTERNET_BANK_PAYMENT`: `InternetBankPayment` * `DIRECT_DEBIT`: `DirectDebit`

## Extends

- [`Payment`](Payment.md)

## Constructors

### new DirectDebit(directDebit)

> **new DirectDebit**(`directDebit`): [`DirectDebit`](DirectDebit.md)

#### Parameters

▪ **directDebit**: [`DirectDebitProperties`](../interfaces/DirectDebitProperties.md)

#### Returns

[`DirectDebit`](DirectDebit.md)

#### Overrides

[`Payment`](Payment.md).[`constructor`](Payment.md#constructors)

#### Source

models/DirectDebit.ts:57

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `public` | `accountNumber` | `string` | Cleartext (unencrypted) DirectDebit bank account number associated with the payment instrument. | - | models/DirectDebit.ts:39 |
| `public` | `authorizedAmount`? | [`Amount`](Amount.md) | - | [`Payment`](Payment.md).`authorizedAmount` | models/Payment.ts:70 |
| `public` | `billingAddress` | [`PaymentBillingAddress`](PaymentBillingAddress.md) | - | [`Payment`](Payment.md).`billingAddress` | models/Payment.ts:60 |
| `public` | `billingEmailAddress` | `string` | Email address associated with the payment. | [`Payment`](Payment.md).`billingEmailAddress` | models/Payment.ts:65 |
| `public` | `billingName` | [`Name`](Name.md) | - | [`Payment`](Payment.md).`billingName` | models/Payment.ts:55 |
| `public` | `brand` | [`PaymentBrandEnum`](../type-aliases/PaymentBrandEnum.md) | The `brand` field value is the payment brand used for payment on this transaction. For credit card payment method ensure attributes mentioned in dictionary below are set to corresponding values only. Ensure to comply with the naming standards provided in below dictionary. For example, some Payment processors use “Japan Credit Bureau” but “JCB” should be used when calling Fraud API. Incorrect `brand` - `card_type` combination will result in data quality issues and result in degraded risk recommendation. \'brand\' is an enum value with the following mapping with CreditCard \'card_type\' attribute: *       brand                 :      card_type * ------------------------------------------------------- * `AMERICAN_EXPRESS`          : `AMERICAN_EXPRESS` * `DINERS_CLUB_INTERNATIONAL` : `DINERS_CLUB` * `BC_CARD`                   : `DINERS_CLUB` * `DISCOVER`                  : `DISCOVER` * `BC_CARD`                   : `DISCOVER` * `DINERS_CLUB_INTERNATIONAL` : `DISCOVER` * `JCB`                       : `DISCOVER` * `JCB`                       : `JCB` * `MASTER_CARD`               : `MASTER_CARD` * `MAESTRO`                   : `MASTER_CARD` * `POSTEPAY_MASTERCARD`       : `MASTER_CARD` * `SOLO`                      : `SOLO` * `SWITCH`                    : `SWITCH` * `MAESTRO`                   : `MAESTRO` * `CHINA_UNION_PAY`           : `CHINA_UNION_PAY` * `UATP`                      : `UATP` * `UATP_SUPPLY`               : `UATP` * `AIR_PLUS`                  : `UATP` * `UA_PASS_PLUS`              : `UATP` * `VISA`                      : `VISA` * `VISA_DELTA`                : `VISA` * `VISA_ELECTRON`             : `VISA` * `CARTA_SI`                  : `VISA` * `CARTE_BLEUE`               : `VISA` * `VISA_DANKORT`              : `VISA` * `POSTEPAY_VISA_ELECTRON`    : `VISA` * `PAYPAL`                    :  \'brand\' with \'Points\' payment_type is an enum value with following: * `EXPEDIA_REWARDS` * `AMEX_POINTS` * `BANK_OF_AMERICA_REWARDS` * `DISCOVER_POINTS` * `MASTER_CARD_POINTS` * `CITI_THANK_YOU_POINTS` * `MERRILL_LYNCH_REWARDS` * `WELLS_FARGO_POINTS` * `DELTA_SKY_MILES` * `UNITED_POINTS` * `DISCOVER_MILES` * `ALASKA_MILES` * `RBC_REWARDS` * `BILT_REWARDS` * `ORBUCKS` * `CHEAP_CASH` * `BONUS_PLUS` * `ULTIMATE_REWARDS`  \'brand\' with \'GiftCard\' payment_type is an enum value with following: * `GIFT_CARD`  \'brand\' with \'InternetBankPayment\' payment_type is an enum value with following: * `IBP` * `LOCAL_DEBIT_CARD` * `SOFORT` * `YANDEX` * `WEB_MONEY` * `QIWI` * `BITCOIN`  \'brand\' with \'DirectDebit\' payment_type is an enum value with following: * `ELV` * `INTER_COMPANY` * `SEPA_ELV` | [`Payment`](Payment.md).`brand` | models/Payment.ts:48 |
| `public` | `mandateType`? | [`DirectDebitMandateTypeEnum`](../type-aliases/DirectDebitMandateTypeEnum.md) | The `mandate_type` is required if given `brand` as `SEPA_ELV` under `DirectDebit`.  It is used for the wire transfer or direct debit transaction whose `routing_number` could not be provided or not supported.   Allows values:  - `ONE_OFF`  - `RECURRING` | - | models/DirectDebit.ts:44 |
| `readonly` | `method` | `"DIRECT_DEBIT"` | - | - | models/DirectDebit.ts:55 |
| `public` | `operations`? | [`Operations`](Operations.md) | - | [`Payment`](Payment.md).`operations` | models/Payment.ts:85 |
| `public` | `reason`? | [`PaymentReason`](../type-aliases/PaymentReason.md) | - | [`Payment`](Payment.md).`reason` | models/Payment.ts:50 |
| `public` | `routingNumber`? | `string` | A code that identifies the financial institution for a specific bank account. `routing_number` is required if given `INTER_COMPANY` or `ELV` as `brand`. | - | models/DirectDebit.ts:34 |
| `public` | `telephones` | [`Telephone`](Telephone.md)[] | Telephone(s) associated with direct debit payment provider. | - | models/DirectDebit.ts:52 |
| `public` | `threeDigitsSecureCriteria`? | [`PaymentThreeDSCriteria`](PaymentThreeDSCriteria.md) | - | [`Payment`](Payment.md).`threeDigitsSecureCriteria` | models/Payment.ts:80 |
| `public` | `verifiedAmount`? | [`Amount`](Amount.md) | - | [`Payment`](Payment.md).`verifiedAmount` | models/Payment.ts:75 |
