import * as winston from 'winston';
import {Logger} from 'winston';
import {LogLevel} from './LogLevel';

const { createLogger, format } = winston;
const { combine, timestamp, label, printf, splat } = format;
import { contains, isNil } from '../ramda-functions';

const myFormat = printf((info) => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const createLogLabel = (logLabel: string): string => {
  return contains('/', logLabel) ?
    logLabel.split(/[\\/]/).slice(-2).join('/') :
    logLabel;
  // return contains('/', logLabel)?logLabel.split(/[\\/]/).pop() : logLabel;
};

/**
 *
 * @param {string} logLabel you should use __filename so the log can show you where
 * @param {LogLevel} logLevel
 * @returns {winston.Logger}
 */
export const createLog = (logLabel: string, logLevel?: LogLevel): Logger => {
  return createLogger({
    level: isNil(logLevel) ? process.env.API_LOG_LEVEL : logLevel.toString(),
    format:
      combine(
        label({ label: createLogLabel(logLabel) }),
        timestamp(),
        splat(),
        myFormat,
      )
    ,
    transports: [
      new winston.transports.Console(),
    ],
  });
};

// export default logger;
