import { LoggingMessage } from '../../src/constant/Logging'
import { maskRequestConfig, maskResponse } from '../../src/logging/LogMasker'
import { AxiosHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

describe('LogMasker', function (): void {
  it('should mask request config headers', () => {
    const config: InternalAxiosRequestConfig = {
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
      data: "{\"field\":\"some value\"}"
    }

    expect(maskRequestConfig(config)).toMatchObject(expectedConfig)
  });

  it('should do nothing when there is no body', () => {
    const config: InternalAxiosRequestConfig = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      })
    }

    expect(maskRequestConfig(config)).toMatchObject(config)
  })

  it('should mask auth data', (): void => {
    const config: InternalAxiosRequestConfig = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json',
      }),
      auth: {
        username: 'some username',
        password: 'some pass'
      }
    }

    const expectedConfig = {
      headers: {
        'Content-Type': 'application/json'
      },
      auth: {
        username: LoggingMessage.OMITTED,
        password: LoggingMessage.OMITTED
      }
    }

    expect(maskRequestConfig(config)).toMatchObject(expectedConfig)
  })

  it('should mask PCI-related body fields', () => {
    const config: InternalAxiosRequestConfig = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      }),
      data: {
        field1: {
          pin: 'pin value',
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
      data: "{" +
        "\"field1\":{" +
        "\"pin\":\"<-- omitted -->\"," +
        "\"access_token\":\"<-- omitted -->\"," +
        "\"card_number\":\"<-- omitted -->\"," +
        "\"security_code\":\"<-- omitted -->\"," +
        "\"account_number\":\"<-- omitted -->\"," +
        "\"card_avs_response\":\"<-- omitted -->\"," +
        "\"card_cvv_response\":\"<-- omitted -->\"}," +
        "\"field2\":{" +
        "\"access_token\":\"<-- omitted -->\"," +
        "\"card_number\":\"<-- omitted -->\"," +
        "\"security_code\":\"<-- omitted -->\"," +
        "\"field3\":{" +
        "\"account_number\":\"<-- omitted -->\"," +
        "\"card_avs_response\":\"<-- omitted -->\"," +
        "\"card_cvv_response\":\"<-- omitted -->\"," +
        "\"some_field\":\"some_field value\"" +
        "}" +
        "}" +
        "}"
    }

    expect(maskRequestConfig(config)).toMatchObject(expectedConfig)
  })

  it('should mask number fields', () => {
    const config: InternalAxiosRequestConfig = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      }),
      data: {
        field1: {
          number: 12345678901234
        },
        field2: {
          number: 123456789012345
        },
        field3: {
          number: 123456789012346
        },
        field4: {
          number: '123456789012346'
        },
        field5: {
          number: '12345678901234567'
        },
        field6: {
          number: undefined
        },
        field7: {
          number: null
        }
      }
    }

    const expectedConfig = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      }),
      data: "{" +
        "\"field1\":{" +
        "\"number\":12345678901234}," +
        "\"field2\":{" +
        "\"number\":\"<-- omitted -->\"" +
        "},\"field3\":{" +
        "\"number\":\"<-- omitted -->\"" +
        "},\"field4\":{" +
        "\"number\":\"<-- omitted -->\"" +
        "},\"field5\":{" +
        "\"number\":\"12345678901234567\"" +
        "},\"field6\":{" +
        "}," +
        "\"field7\":{" +
        "\"number\":null" +
        "}" +
        "}"
    }

    expect(maskRequestConfig(config)).toMatchObject(expectedConfig)
  })

  it('should mask response headers', () => {
    const response: AxiosResponse = {
      headers: new AxiosHeaders({
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
        auth: 'auth_value'
      }),
      data: {
        field: 'some value'
      },
      config: {}
    } as AxiosResponse

    const expectedResponse = {
      headers: {
        Authorization: LoggingMessage.OMITTED,
        auth: LoggingMessage.OMITTED,
        'Content-Type': 'application/json'
      },
      data: {
        field: 'some value'
      }
    }

    expect(maskResponse(response)).toMatchObject(expectedResponse)
  });

  it('should do nothing when there is no body', () => {
    const response: AxiosResponse = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      }),
      config: {}
    } as AxiosResponse

    expect(maskResponse(response)).toMatchObject(response)
  })

  it('should response mask auth data', (): void => {
    const response: AxiosResponse = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json',
      }),
      config: {
        auth: {
          username: 'some username',
          password: 'some pass'
        }
      }
    } as AxiosResponse

    const expectedResponse = {
      headers: {
        'Content-Type': 'application/json'
      },
      config: {
        auth: {
          username: LoggingMessage.OMITTED,
          password: LoggingMessage.OMITTED
        }
      }
    }

    expect(maskResponse(response)).toMatchObject(expectedResponse)
  })

  it('should mask response PCI-related body fields', () => {
    const response: AxiosResponse = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      }),
      config: {},
      data: {
        field1: {
          pin: 'pin value',
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
    } as AxiosResponse

    const expectedResponse = {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        field1: {
          pin: LoggingMessage.OMITTED,
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

    expect(maskResponse(response)).toMatchObject(expectedResponse)
  })

  it('should mask number fields', () => {
    const response: AxiosResponse = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      }),
      config: {},
      data: {
        field1: {
          number: 12345678901234
        },
        field2: {
          number: 123456789012345
        },
        field3: {
          number: 123456789012346
        },
        field4: {
          number: '123456789012346'
        },
        field5: {
          number: '12345678901234567'
        },
        field6: {
          number: undefined
        },
        field7: {
          number: null
        }
      }
    } as AxiosResponse

    const expectedResponse = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      }),
      data: {
        field1: {
          number: 12345678901234
        },
        field2: {
          number: LoggingMessage.OMITTED
        },
        field3: {
          number: LoggingMessage.OMITTED
        },
        field4: {
          number: LoggingMessage.OMITTED
        },
        field5: {
          number: '12345678901234567'
        },
        field6: {
          number: undefined
        },
        field7: {
          number: null
        }
      }
    }

    expect(maskResponse(response)).toMatchObject(expectedResponse)
  })

  it('should mask response config data', () => {
    const response: AxiosResponse = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      }),
      config: {
        data: {
          field: 'some value'
        }
      }
    } as AxiosResponse

    const expectedResponse = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      }),
      config: {
        data: LoggingMessage.OMITTED
      }
    }

    expect(maskResponse(response)).toMatchObject(expectedResponse)
  });

  it('should remove request field in response', () => {
    const response: AxiosResponse = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      }),
      config: {},
      request: {
        data: {
          field: 'some value'
        }
      }
    } as AxiosResponse

    const expectedResponse = {
      headers: new AxiosHeaders({
        'Content-Type': 'application/json'
      })
    }

    expect(maskResponse(response)).toMatchObject(expectedResponse)
  });
})
