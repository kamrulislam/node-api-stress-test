import * as shell from 'shelljs';
import { createLog } from './logs/logging';
const log = createLog(__filename);
import * as R from 'ramda';
const {
  isNil,
} = R;

export const updateDbToHostIp = (): void => {
  const host: string = shell.exec('node scripts/host-ip', {silent:true}).stdout.toString().trim();
  log.debug('updateDbToHostIp host: %s', host);

  if(isNil(host)) {
    throw new Error('You must be running docker-compose and API is running as 1800myoptions_api_1');
  }

  process.env.POSTGRES_HOST = host;
};
