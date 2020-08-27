/**
 * Created by hxg on 9/10/17.
 */
import traverse = require('traverse');
import { createLog } from './logs/logging';
const log = createLog(__filename);

class AppEnv {
  flattern (instance: any, envKey: string): any  {
    const flat: any = {};
    const leaves = traverse(instance).reduce(function (acc: any[], x: any) {
      const self = this;

      if(self.isLeaf) {
        if(x === undefined) {
          console.error('self.key: %s has no value specified: %s', self.key, x);
          throw new Error(`Specify the value of ${self.key} for ${envKey}`);
        }

        flat[self.key as string] = x;
      }

      return acc;
    }, []);

    return flat;
  }
  init (targetEnv: any) {
    if(!targetEnv) {
      log.info('initEnv targetEnv is empty using .env');
      return;
    }

    const envs = require('../envs.json');

    log.info('initEnv available env keys: %j', Object.keys(envs), envs[targetEnv]);

    const envToFlattern = envs[targetEnv];

    if(!envToFlattern) {
      log.info('initEnv envs[targetEnv] is empty using .env');
      return;
    }

    const flats = this.flattern(envToFlattern, targetEnv);

    Object.keys(flats).forEach((key) => {
      // log.info('initEnv key: %s, env[key]: %j', key, env[key]);
      process.env[key] = flats[key];
      log.info('initEnv key: %s, value: %s', key, process.env[key]);
    });
  }
}
const env = new AppEnv();
export default env;
