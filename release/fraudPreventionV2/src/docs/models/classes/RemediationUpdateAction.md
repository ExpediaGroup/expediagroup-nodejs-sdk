[@expediagroup/fraudpreventionv2-sdk](../../index.md) > [models](../index.md) > RemediationUpdateAction

# Class: RemediationUpdateAction

Information specific to the remediation action initiated by the Partner\'s system to a user.

## Constructors

### new RemediationUpdateAction(remediationUpdateAction)

> **new RemediationUpdateAction**(`remediationUpdateAction`): [`RemediationUpdateAction`](RemediationUpdateAction.md)

#### Parameters

▪ **remediationUpdateAction**: [`RemediationUpdateActionProperties`](../interfaces/RemediationUpdateActionProperties.md)

#### Source

models/RemediationUpdateAction.ts:44

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `actionName` | [`RemediationUpdateActionActionNameEnum`](../type-aliases/RemediationUpdateActionActionNameEnum.md) | The categorized remediation action initiated by the Partner\'\'s system to a user. Possible values are: - `PASSWORD_RESET` - Applicable if this event is the result of a password reset by the Partner\'\'s system. - `DISABLE_ACCOUNT` - Applicable if this event is the result of disabling an account by the Partner\'\'s system. - `TERMINATE_ALL_SESSIONS` - Applicable if this event is the result of terminating all active user sessions of an account by the Partner\'\'s system. | models/RemediationUpdateAction.ts:32 |
| `status` | [`RemediationUpdateActionStatusEnum`](../type-aliases/RemediationUpdateActionStatusEnum.md) | The status of the remediation action.   - `SUCCESS` - Applicable if the Partner\'\'s system was successfully able to perform the remediation action.   - `FAILED` - Applicable if the Partner\'\'s system failed to perform the remediation action. | models/RemediationUpdateAction.ts:37 |
| `updateEndDateTime`? | `Date` | The local date and time the remediation action to a user ended in the Partner\'s system, in ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`. | models/RemediationUpdateAction.ts:42 |
