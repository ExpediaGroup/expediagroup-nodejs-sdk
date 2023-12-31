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
import { Authorize } from './Authorize'
import { AuthorizeReversal } from './AuthorizeReversal'
import { Capture } from './Capture'
import { Refund } from './Refund'
import { Verify } from './Verify'
import { VerifyMapper } from './VerifyMapper'

import { AuthorizeMapper } from './AuthorizeMapper'

import { AuthorizeReversalMapper } from './AuthorizeReversalMapper'

import { CaptureMapper } from './CaptureMapper'

import { RefundMapper } from './RefundMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

/**
 * All operations related to a payment throughout its lifespan. An operation represents an event external to Fraud Prevention Service that specifies to perform a payment operation. Possible operation types include:  - `Verify`  - `Authorize`  - `AuthorizeReversal`  - `Capture`  - `Refund`
 */
@JsonObject({ constructorParams: [{}] })
export class Operations {
    @JsonProperty({
        name: 'verify',
        type: (property) => VerifyMapper.getType(property),
    })
    verify?: Verify
    @JsonProperty({
        name: 'authorize',
        type: (property) => AuthorizeMapper.getType(property),
    })
    authorize?: Authorize
    @JsonProperty({
        name: 'authorize_reversal',
        type: (property) => AuthorizeReversalMapper.getType(property),
    })
    authorizeReversal?: AuthorizeReversal
    @JsonProperty({
        name: 'capture',
        type: (property) => CaptureMapper.getType(property),
    })
    capture?: Capture
    @JsonProperty({
        name: 'refunds',
        type: (property) => RefundMapper.getType(property),
    })
    refunds?: Array<Refund>

    public constructor(operations: OperationsProperties) {
        this.verify = operations.verify
        this.authorize = operations.authorize
        this.authorizeReversal = operations.authorizeReversal
        this.capture = operations.capture
        this.refunds = operations.refunds
    }
}

export interface OperationsProperties {
    verify?: Verify
    authorize?: Authorize
    authorizeReversal?: AuthorizeReversal
    capture?: Capture
    refunds?: Array<Refund>
}
