import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Client, ClientConfigurations } from '../../src/client/Client'
import { StatusCode } from '../constant/StatusCode'
import { Constant } from '../constant/Constant'

export class TestClient extends Client {
  private readonly _mockAdapter: MockAdapter

  constructor (configurations: ClientConfigurations) {
    super(configurations)
    this._mockAdapter = this.createMockAdapter()
  }

  static create (): TestClient {
    return new TestClient({
      endpoint: Constant.ENDPOINT,
      authEndpoint: Constant.AUTH_ENDPOINT,
      key: Constant.KEY,
      secret: Constant.SECRET
    })
  }

  private createMockAdapter (): MockAdapter {
    const mockAdapter = new MockAdapter(this.axiosClient)
    mockAdapter.onPost(Constant.AUTH_ENDPOINT).reply(StatusCode.OK, {
      access_token: 'token',
      expires_in: 1800
    })
    mockAdapter.onGet(Constant.ENDPOINT + '/some/endpoint')
      .reply(StatusCode.OK, Constant.DATA)
    return mockAdapter
  }

  get axiosClientInstance (): AxiosInstance {
    return this.axiosClient
  }

  get mockAdapter (): MockAdapter {
    return this._mockAdapter
  }
}
