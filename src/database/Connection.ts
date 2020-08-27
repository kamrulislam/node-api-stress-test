/**
 * Created by hxg on 9/10/17.
 * converted to TS by kis on 3/7/18
 */
import { createLog } from '../logs/logging';
const log = createLog(__filename);
import * as pgPromise from 'pg-promise';
import {IMain} from 'pg-promise';
const pgp: IMain = pgPromise({
  // Initialization Options
});
import { equals } from '../ramda-functions';
class Connection {
  private static db: any;

  static init () {
    if(!!this.db) {
      log.silly('DbConnection.init db already inited..');
      return;
    }
    const port = equals(process.env.POSTGRES_HOST, 'db') ? 5432 : process.env.POSTGRES_PORT;
    // const CERT_FILE_PATH = `${__dirname}/../../rds-combined-ca-bundle.pem`;
    // log.info('DbConnection.init CERT_FILE_PATH: %s', CERT_FILE_PATH);
    log.silly('DbConnection.init POSTGRES_HOST: %s, POSTGRES_PORT: %s,  POSTGRES_SSL: %s',
      process.env.POSTGRES_HOST,
      port,
      process.env.POSTGRES_SSL);

    const CON = {
      host: process.env.POSTGRES_HOST,
      port,
      database: process.env.POSTGRES_DATABASE,
      user:  process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      ssl: process.env.POSTGRES_SSL,
    };

    this.db = pgp(`postgres://${CON.user}:${CON.password}@${CON.host}:${CON.port}/${CON.database}?ssl=${CON.ssl}`);

    log.debug('DbConnection.init created db with CON: %j, process.env.NODE_ENV: %s', CON, process.env.NODE_ENV);
  }

  static getDb () {
    log.silly('DbConnection.db');

    if(!this.db) {
      this.init();
    }

    return this.db;
  }

  static pgpHelper () {
    return pgp.helpers;
  }
}

export default Connection;
