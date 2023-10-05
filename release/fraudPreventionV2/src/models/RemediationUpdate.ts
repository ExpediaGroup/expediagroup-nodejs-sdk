/*
 * Copyright (C) 2023 Expedia, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.

 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AccountUpdateRequest } from './AccountUpdateRequest'
import { RemediationUpdateAction } from './RemediationUpdateAction'

import { RemediationUpdateActionMapper } from './RemediationUpdateActionMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'
import { AccountUpdateRequestProperties } from './AccountUpdateRequest'

/**
 * Information specific to remediation actions initiated by the Partner\'s system to a user as a result of a fraud recommendation.
 */
@JsonObject({ constructorParams: [{}] })
export class RemediationUpdate extends AccountUpdateRequest {
    @JsonProperty({
        name: 'remediation_update_actions',
        type: (property) => RemediationUpdateActionMapper.getType(property),
    })
    remediationUpdateActions: Array<RemediationUpdateAction>

    @JsonProperty('type')
    readonly type = 'REMEDIATION_UPDATE'

    public constructor(remediationUpdate: RemediationUpdateProperties) {
        super({
            riskId: remediationUpdate.riskId,
        })
        this.remediationUpdateActions =
            remediationUpdate.remediationUpdateActions
    }
}

export interface RemediationUpdateProperties
    extends AccountUpdateRequestProperties {
    remediationUpdateActions: Array<RemediationUpdateAction>
}