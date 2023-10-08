[API](../../index.md) > [models](../index.md) > PaymentReason

# Type alias: PaymentReason

> **PaymentReason**: `"FULL"` \| `"DEPOSIT"` \| `"SCHEDULED"` \| `"SUBSEQUENT"` \| `"DEFERRED"`

The reason of payment. Possible values: - `FULL` - If the amount is paid i full for the order - `DEPOSIT` - The initial payment. Amount to be paid up front. - `SCHEDULED` - The amount to be payment based on a schedule for the remaining portion of the booking amount. - `SUBSEQUENT` - An additional amount paid that was not originally scheduled. - `DEFERRED`

## Source

models/PaymentReason.ts:24
