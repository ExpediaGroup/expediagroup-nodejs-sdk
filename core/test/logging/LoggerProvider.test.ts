import { getLogger, LoggerProvider, ExpediaGroupLogger } from '../../src/logging/LoggerProvider'
import { CustomLogger } from '../helper/CustomLogger'

describe('LoggerProvider', function () {
  it('should log when custom logger provided before instantiating logger', async function () {
    const customLogger: CustomLogger = new CustomLogger()
    LoggerProvider.setLogger(customLogger)
    const customLogSpy = jest.spyOn(customLogger, 'info')

    const log: ExpediaGroupLogger = getLogger(ExpediaGroupLogger)

    const message: string = 'some message'
    log.info(message)

    expect(customLogSpy).toHaveBeenCalledWith(`Function - ExpediaGroupSDK: ${message}`)
  })

  it('should log when custom logger provided after instantiating logger', async function () {
    const log: ExpediaGroupLogger = getLogger(ExpediaGroupLogger)

    const customLogger: CustomLogger = new CustomLogger()
    LoggerProvider.setLogger(customLogger)
    const customLogSpy = jest.spyOn(customLogger, 'info')

    const message: string = 'some message'
    log.info(message)

    expect(customLogSpy).toHaveBeenCalledWith(`Function - ExpediaGroupSDK: ${message}`)
  })
})
