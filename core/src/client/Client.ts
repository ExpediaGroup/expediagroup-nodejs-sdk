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

import axios, { AxiosInstance } from 'axios'
import { AuthenticationConfigurations, AuthenticatorFactory } from '../authentication/Authenticator'
import { AxiosClientConfigurations } from './AxiosClientConfigurations'

abstract class Client {
  protected readonly axiosClient: AxiosInstance

  protected constructor ({ key, secret, endpoint, authEndpoint, requestTimeout, userAgent }: ExtendedClientConfiguration) {
    this.axiosClient = this.createInstance(new AxiosClientConfigurations(endpoint, requestTimeout))
    const authenticationConfigurations: AuthenticationConfigurations = new AuthenticationConfigurations(authEndpoint, key, secret, userAgent)
    AuthenticatorFactory.create(this.axiosClient).use(authenticationConfigurations)
  }

  private createInstance (clientConfigurations: AxiosClientConfigurations): AxiosInstance {
    return axios.create({
      baseURL: clientConfigurations.endpoint,
      timeout: clientConfigurations.requestTimeout
    })
  }
}

interface ClientConfigurations {
  endpoint?: string
  authEndpoint?: string
  key: string
  secret: string
  requestTimeout?: number
}

interface ExtendedClientConfiguration extends ClientConfigurations {
  userAgent: string
}

export { Client }
export { ClientConfigurations }
export { ExtendedClientConfiguration }
