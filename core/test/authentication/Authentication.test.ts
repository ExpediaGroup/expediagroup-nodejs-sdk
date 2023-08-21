import { AxiosRequestConfig } from 'axios'
import { Constant } from '../constant/Constant'
import { TestClient } from '../helper/TestClient'
import { StatusCode } from '../constant/StatusCode'
import { ExpediaGroupAuthError } from '../../src/model/error/service/ExpediaGroupAuthError'

describe('Authentication', function () {
  it('should send an authentication request when token is expired', async function () {
    const client = TestClient.create()

    const data = { field: 'some data' }
    client.mockAdapter
      .onGet(Constant.ENDPOINT + '/some/endpoint')
      .reply(StatusCode.OK, data)

    const response = await client.axiosClientInstance.get(
      Constant.ENDPOINT + '/some/endpoint'
    )
    expect(response.status).toEqual(StatusCode.OK)
    expect(response.data).toEqual(data)

    expect(client.mockAdapter.history.get.length).toEqual(1)
    expect(client.mockAdapter.history.get[0].headers?.Authorization).toEqual('Bearer token')

    toHaveBeenCalledTimes(client, 1)
  })

  it('should throw an error when credentials are invalid (unauthorized)', async function () {
    const client = TestClient.create()

    client.mockAdapter
      .onPost(Constant.AUTH_ENDPOINT)
      .reply(StatusCode.UNAUTHORIZED, {
        error: 'invalid_client',
        error_description: 'Unauthorized'
      })

    await expect(
      async () =>
        await client.axiosClientInstance.get(
          Constant.ENDPOINT + '/some/endpoint'
        )
    ).rejects.toThrowError(
      new ExpediaGroupAuthError(401, 'Unable to authenticate')
    )

    toHaveBeenCalledTimes(client, 1)
  })

  it('should throw a serialization error when credentials are valid but fails to deserialize the token (authorized)', async function () {
    const client = TestClient.create()

    client.mockAdapter
      .onPost(Constant.AUTH_ENDPOINT)
      .reply(StatusCode.OK, {
        undefined_json_key: 'value',
        another_undefined_json_key: 1800
      })

    await expect(
      async () =>
        await client.axiosClientInstance.get(
          Constant.ENDPOINT + '/some/endpoint'
        )
    ).rejects.toThrowError(
      new ExpediaGroupAuthError(200, 'Failed to deserialize token')
    )

    toHaveBeenCalledTimes(client, 1)
  })

  it('should send only one auth request for multiple requests as long as the auth token is not expired', async function () {
    const client = TestClient.create()

    for (let i: number = 0; i < 4; i++) {
      const response = await client.axiosClientInstance.get(
        Constant.ENDPOINT + '/some/endpoint'
      )
      expect(response.status).toEqual(StatusCode.OK)
      expect(response.data).toEqual(Constant.DATA)
    }

    toHaveBeenCalledTimes(client, 1)
  })

  it('should send auth request when token expires', async function () {
    const client = TestClient.create()

    client.mockAdapter
      .onPost(Constant.AUTH_ENDPOINT)
      .reply(StatusCode.OK, {
        access_token: 'token',
        expires_in: 0 // 0 seconds
      })

    for (let i: number = 0; i < 4; i++) {
      const response = await client.axiosClientInstance.get(
        Constant.ENDPOINT + '/some/endpoint'
      )
      expect(response.status).toEqual(StatusCode.OK)
      expect(response.data).toEqual(Constant.DATA)
    }

    toHaveBeenCalledTimes(client, 4)
  })

  function toHaveBeenCalledTimes (client: TestClient, numberOfTimesCalled: number): void {
    expect(client.mockAdapter.history.post.filter(isAuthRequest).length).toEqual(numberOfTimesCalled)
  }

  function isAuthRequest () {
    return (config: AxiosRequestConfig<any>) =>
      config.url === Constant.AUTH_ENDPOINT &&
      config.auth?.username === Constant.KEY &&
      config.auth?.password === Constant.SECRET
  }
})
