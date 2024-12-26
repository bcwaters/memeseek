import {pino, type Logger} from 'pino'

export const logger: Logger = pino({
  transport: {
    target: 'pino',
    options: {
      colorize: true,
    },
  },
  level: process.env.PINO_LOG_LEVEL || 'info',

  redact: [], // prevent logging of sensitive data
});