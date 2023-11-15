[@expediagroup/fraudpreventionv2-sdk](../../index.md) / [models](../index.md) / AccountTakeoverFraudDecision

# Type alias: AccountTakeoverFraudDecision

> **AccountTakeoverFraudDecision**: `"ACCEPT"` \| `"CHALLENGE"` \| `"REJECT"`

Fraud recommendation for an account transaction. A recommendation can be ACCEPT, CHALLENGE, or REJECT. - `ACCEPT` - Represents an account transaction where the user’’s account activity is accepted. - `CHALLENGE` - Represents an account transaction that requires additional verification or challenges the user’’s identity (example: CAPTCHA, MULTI_FACTOR_AUTHENTICATION, etc). - `REJECT` - Represents a suspicious account transaction where the user’’s credentials or their behavior requires us to block the account activity.

## Source

models/AccountTakeoverFraudDecision.ts:24
