import { AxiosHeaders } from 'axios'
import { LoggingMessage } from '../../src/constant/Logging'
import { AxiosConfig, maskFields } from '../../src/logging/LogMasker'

describe('LogMasker', function (): void {
  it('should do nothing when there is no body', () => {
    const config: AxiosConfig = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      })
    }

    expect(maskFields(config)).toMatchObject(config)
  })

  it('should mask authorization headers', (): void => {
    const config: AxiosConfig = {
      headers: new AxiosHeaders({
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
        auth: 'auth_value'
      }),
      data: {
        field: 'some value'
      }
    }

    const expectedConfig = {
      headers: {
        Authorization: LoggingMessage.OMITTED,
        auth: LoggingMessage.OMITTED,
        'Content-Type': 'application/json'
      },
      data: {
        field: 'some value'
      }
    }

    expect(maskFields(config)).toMatchObject(expectedConfig)
  })

  it('should mask PCI-related body fields', () => {
    const config: AxiosConfig = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      }),
      data: {
        field1: {
          pin: 'pin value',
          number: 'number value',
          access_token: 'access_token value',
          card_number: 'card_number value',
          security_code: 'security_code value',
          account_number: 'account_number value',
          card_avs_response: 'card_avs_response value',
          card_cvv_response: 'card_cvv_response value'
        },
        field2: {
          access_token: 'access_token value',
          card_number: 'card_number value',
          security_code: 'security_code value',
          field3: {
            account_number: 'account_number value',
            card_avs_response: 'card_avs_response value',
            card_cvv_response: 'card_cvv_response value',
            some_field: 'some_field value'
          }
        }
      }
    }

    const expectedConfig = {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        field1: {
          pin: LoggingMessage.OMITTED,
          number: LoggingMessage.OMITTED,
          access_token: LoggingMessage.OMITTED,
          card_number: LoggingMessage.OMITTED,
          security_code: LoggingMessage.OMITTED,
          account_number: LoggingMessage.OMITTED,
          card_avs_response: LoggingMessage.OMITTED,
          card_cvv_response: LoggingMessage.OMITTED
        },
        field2: {
          access_token: LoggingMessage.OMITTED,
          card_number: LoggingMessage.OMITTED,
          security_code: LoggingMessage.OMITTED,
          field3: {
            account_number: LoggingMessage.OMITTED,
            card_avs_response: LoggingMessage.OMITTED,
            card_cvv_response: LoggingMessage.OMITTED,
            some_field: 'some_field value'
          }
        }
      }
    }

    expect(maskFields(config)).toMatchObject(expectedConfig)
  })
})
