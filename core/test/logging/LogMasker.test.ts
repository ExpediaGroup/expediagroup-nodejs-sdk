import { Authentication } from '../../src/constant/Authentication'
import { mask } from '../../src/logging/LogMasker'
import { LoggingMessage } from '../../src/constant/Logging'

describe('LogMasker', function () {
  it.each(
    [Authentication.BASIC, Authentication.BEARER, Authentication.EAN]
  )('given text apply all masks available', async function (authType: string) {
    const text: string = `'${Authentication.AUTHORIZATION}: ${authType} token'\n${Authentication.USERNAME}: 'token'\n${Authentication.PASSWORD}: 'token'\naccess_token: 'token'`

    expect(mask(text)).toEqual(`'${Authentication.AUTHORIZATION}: ${authType} ${LoggingMessage.OMITTED}'\n${Authentication.USERNAME}: '${LoggingMessage.OMITTED}'\n${Authentication.PASSWORD}: '${LoggingMessage.OMITTED}'\naccess_token: '${LoggingMessage.OMITTED}'`)
  })

  it.each(
    [Authentication.BASIC, Authentication.BEARER, Authentication.EAN]
  )('given text apply auth token mask', async function (authType: string) {
    const text: string = `'${Authentication.AUTHORIZATION}: ${authType} token'`

    expect(mask(text)).toEqual(`'${Authentication.AUTHORIZATION}: ${authType} ${LoggingMessage.OMITTED}'`)
  })

  it('given text apply auth username mask', async function () {
    const text: string = `${Authentication.USERNAME}: 'token'`

    expect(mask(text)).toEqual(`${Authentication.USERNAME}: '${LoggingMessage.OMITTED}'`)
  })

  it('given text apply auth password mask', async function () {
    const text: string = `${Authentication.PASSWORD}: 'token'`

    expect(mask(text)).toEqual(`${Authentication.PASSWORD}: '${LoggingMessage.OMITTED}'`)
  })

  it('given text apply access token mask', async function () {
    const text: string = 'access_token: \'token\''

    expect(mask(text)).toEqual(`access_token: '${LoggingMessage.OMITTED}'`)
  })
})
