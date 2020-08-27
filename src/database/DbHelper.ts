/**
 * Created by kis on 3/7/18.
 */
import { equals, isNil } from '../ramda-functions';
import connection from './Connection';
import { camelCase } from '../camelCase';
import { createLog } from '../logs/logging';
const log = createLog(__filename);
const ERROR_404 = '404';

export class DbHelper {
  findMany (query: string, params?: any, transformer?: any): Promise<any> {
    log.debug('DbHelper.findMany query: %s, params: %j', query, params);
    const db = connection.getDb();
    return db.any(query, params).then((rows: any) => {
      return isNil(transformer)? rows : transformer(rows);
    })
      .catch((error: any) => {
        log.error('DbHelper.findMany ERROR: %j', error);
        return Promise.reject({statusCode: 500, error: 'There is a database error'});
      });
  }

  findOne (query: string, params?: any): Promise<any> {
    log.debug('DbHelper.findOne query: %s, params: %j', query, params);
    return connection.getDb().any(query, params).then((rows: any) => {
      const first = rows[0];
      log.debug('DbHelper.findOne first: %s', first);
      if(isNil(first)) {
        throw new Error(ERROR_404);
      }
      return rows[0];
    })
      .catch((error: any) => {
        if(equals('Error: 404', error.toString())) {
          return Promise.reject({statusCode: 404, error: 'No record found'});
        }

        log.error('DbHelper.findOne error: %j, error: %s, is: %s, typeof: %s', error, error);
        return Promise.reject({statusCode: 500, error: `Something went wrong: ${error.toString()}`});
      });
  }

  transform (rows: any) {
    log.debug('DbHelper.transform rows: %s', rows.length);
    return rows.map((row: any) => {
      return camelCase(row).details;
    });
  }
}

export default new DbHelper();
