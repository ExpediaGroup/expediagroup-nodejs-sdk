import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Client, ClientConfigurations } from '../../src/client/Client'
import { StatusCode } from '../constant/StatusCode'
import { Constant } from '../constant/Constant'

export class TestClient extends Client {
  private readonly _mockAdapter: MockAdapter

  constructor (configurations: ClientConfigurations) {
    super(configurations)
    this._mockAdapter = this.createMockAdapter(configurations)
  }

  static create (): TestClient {
    return new TestClient({
      endpoint: Constant.ENDPOINT,
      authEndpoint: Constant.AUTH_ENDPOINT,
      key: Constant.KEY,
      secret: Constant.SECRET
    })
  }

  private createMockAdapter (configurations: ClientConfigurations): MockAdapter {
    const mockAdapter = new MockAdapter(this.axiosClient)
    mockAdapter.onPost(configurations.authEndpoint).reply(StatusCode.OK, {
      access_token: 'token',
      expires_in: 1800
    })
    return mockAdapter
  }

  get axiosClientInstance (): AxiosInstance {
    return this.axiosClient
  }

  get mockAdapter (): MockAdapter {
    return this._mockAdapter
  }
}
