import winston from  'winston'

const { combine, timestamp, json } = winston.format;

export const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
        filename: 'src/logs/info.log', level: 'info'
    }),
    new winston.transports.File({
        filename: 'src/logs/error.log', level: 'error'
    }),
],
});