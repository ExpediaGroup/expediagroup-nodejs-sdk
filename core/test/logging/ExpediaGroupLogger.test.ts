import { DefaultLogger } from '../../src/logging/Logger'
import { getLogger, ExpediaGroupLogger } from '../../src/logging/LoggerProvider'

describe('ExpediaGroupLogger', function () {
  it('should prepend info logging', async function () {
    const log: ExpediaGroupLogger = getLogger(ExpediaGroupLogger)
    const logSpy = jest.spyOn(log, 'info')
    const defaultLogSpy = jest.spyOn(DefaultLogger, 'info')

    const message: string = 'some message'
    log.info(message)

    expect(logSpy).toHaveBeenCalledWith(message)
    expect(defaultLogSpy).toHaveBeenCalledWith(`ExpediaGroupSDK - Function: ${message}`)
  })

  it('should prepend error logging', async function () {
    const log: ExpediaGroupLogger = getLogger(ExpediaGroupLogger)
    const logSpy = jest.spyOn(log, 'error')
    const defaultLogSpy = jest.spyOn(DefaultLogger, 'error')

    const message: string = 'some message'
    log.error(message)

    expect(logSpy).toHaveBeenCalledWith(message)
    expect(defaultLogSpy).toHaveBeenCalledWith(`ExpediaGroupSDK - Function: ${message}`)
  })
})
