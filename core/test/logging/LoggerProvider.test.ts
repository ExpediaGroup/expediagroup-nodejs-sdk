import { ExpediaGroupLogger, getLogger, LoggerProvider } from '../../src/logging/LoggerProvider'
import { CustomLogger } from '../helper/CustomLogger'
import { DefaultLogger, LoggingLevel, WinstonLogger } from '../../src/logging/Logger'

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

  it('should change logging level when prompted', () => {
    LoggerProvider.setLogger(DefaultLogger)
    const defaultLogSpy = jest.spyOn(DefaultLogger, 'setLoggingLevel')

    const levels: LoggingLevel[] = ['info', 'error']
    for (const level of levels) {
      LoggerProvider.setLoggingLevel(level)
      // eslint-disable-next-line @typescript-eslint/dot-notation
      const loggingLevel: string = (LoggerProvider.getLogger() as WinstonLogger)['logger'].level
      expect(loggingLevel).toEqual(level)
      expect(defaultLogSpy).toHaveBeenCalledWith(level)
    }
  })
})
