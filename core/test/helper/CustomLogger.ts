import { Logger } from '../../src/logging/Logger'

export class CustomLogger implements Logger {
  info (message: string): void {}

  warn (message: string): void {}

  error (message: string): void {}
}
