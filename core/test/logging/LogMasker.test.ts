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

  it('given (15-16)-digit numbers apply number field mask', async function () {
    const text: string = `'number': '012345678912345', "number": '0123456789123456'`

    expect(mask(text)).toEqual(`'number': '${LoggingMessage.OMITTED}', "number": '${LoggingMessage.OMITTED}'`)
  })

  it('given non-(15-16)-digit numbers apply no masks', async function () {
    const text: string = `'number': '01234567891234',"number": '01234567891234567', 'number': '12345'`

    expect(mask(text)).toEqual(text)
  })

  it('given PCI-related fields apply PCI fields mask', async function () {
    const text: string = `"pin": 'pin_value',` +
      `'card_number': 'card_number_value', ` +
      `"security_code": "security_code_value",` +
      `'account_number': "account_number_value", ` +
      `"card_avs_response": 'card_avs_response_value',` +
      `'card_cvv_response': 'card_cvv_response_value'`

    const expectedText: string = `"pin": '${LoggingMessage.OMITTED}',` +
      `'card_number': '${LoggingMessage.OMITTED}', ` +
      `"security_code": "${LoggingMessage.OMITTED}",` +
      `'account_number': "${LoggingMessage.OMITTED}", ` +
      `"card_avs_response": '${LoggingMessage.OMITTED}',` +
      `'card_cvv_response': '${LoggingMessage.OMITTED}'`

    expect(mask(text)).toEqual(expectedText)
  })

  it('masks all possible cases of PCI fields', async function () {
    const text: string = `"card_number": '0123456789123456',` + ` ` +
      `"card_number": ' 0123456789123456',` +
      `"card_number": '0123456789123456 ',` +
      `"card_number": ' 0123456789123456 ',`+
      `"card_number": "0123456789123456",` +
      `'card_number': "0123456789123456",` +
      `'card_number': '0123456789123456',` +
      `card_number: '0123456789123456',`

    const expectedText: string =`"card_number": '${LoggingMessage.OMITTED}',` + ` ` +
      `"card_number": '${LoggingMessage.OMITTED}',` +
      `"card_number": '${LoggingMessage.OMITTED}',` +
      `"card_number": '${LoggingMessage.OMITTED}',`+
      `"card_number": "${LoggingMessage.OMITTED}",` +
      `'card_number': "${LoggingMessage.OMITTED}",` +
      `'card_number': '${LoggingMessage.OMITTED}',` +
      `card_number: '${LoggingMessage.OMITTED}',`

    expect(mask(text)).toEqual(expectedText)
  })
})
