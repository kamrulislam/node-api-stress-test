import DbHelper from '../database/DbHelper';
import {createLog} from '../logs/logging';
const log = createLog(__filename);

export const findCurrentDate = async (): Promise<string> => {
  log.debug('findCurrentDate');
  return await DbHelper.findOne('select current_date');
};
