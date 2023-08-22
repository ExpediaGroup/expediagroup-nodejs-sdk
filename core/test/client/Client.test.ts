import { AxiosRequestConfig } from 'axios'
import { TestClient } from '../helper/TestClient'
import { StatusCode } from '../constant/StatusCode'
import { Constant } from '../../src/constant/Constant'
import { Constant as TestConstant } from '../constant/Constant'

describe('Client', () => {
  it('should use default configuration values when not provided', async () => {
    const client: TestClient = new TestClient({ key: TestConstant.KEY, secret: TestConstant.SECRET })

    const data = { field: 'some data' }
    client.mockAdapter
      .onGet(TestConstant.ENDPOINT + '/some/endpoint')
      .reply(StatusCode.OK, data)

    const response = await client.axiosClientInstance.get(
      TestConstant.ENDPOINT + '/some/endpoint'
    )
    expect(response.status).toEqual(StatusCode.OK)
    expect(response.data).toEqual(data)

    expect(client.mockAdapter.history.get.length).toEqual(1)
    expect(client.mockAdapter.history.get[0].headers?.Authorization).toEqual('Bearer token')

    toHaveBeenCalledTimes(client, 1)
  })

  function toHaveBeenCalledTimes (client: TestClient, numberOfTimesCalled: number): void {
    expect(client.mockAdapter.history.post.filter(isAuthRequest).length).toEqual(numberOfTimesCalled)
  }

  function isAuthRequest () {
    return (config: AxiosRequestConfig<any>) =>
      config.url === Constant.AUTH_ENDPOINT &&
            config.auth?.username === TestConstant.KEY &&
            config.auth?.password === TestConstant.SECRET
  }
})
