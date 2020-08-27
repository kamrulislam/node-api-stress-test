// const moment = require('moment-timezone');
import * as moment from 'moment-timezone';
import {isNil} from '../ramda-functions';
export const timezone = isNil(process.env.TIME_ZONE) ?
  'Australia/Melbourne' : process.env.TIME_ZONE;
export const datetimeformat = 'YYYY-MM-DD HH:mm:ss';
const datetimeformatkebab = 'YYYY-MM-DD-HH-mm-ss';
const datetimeformatiso = 'YYYY-MM-DDTHH:mm:ss';

export const toDbDate = (val: string): string => {
  return isNil(val) ? null : val;
};

class Datetime {
  momentTz () {
    return moment().tz(timezone);
  }

  moment () {
    return moment();
  }

  currentTimestampKebab () {
    return moment().tz(timezone).format(datetimeformatkebab);
  }

  currentTimestamp () {
    return moment().tz(timezone).format(datetimeformat);
  }

  currentTimestampIso () {
    return moment().tz(timezone).format(datetimeformatiso);
  }

  dateParamtoISOString (dateParam: Date) {
    return moment(dateParam).tz(timezone).format(datetimeformatiso);
  }

  formatDateWithFormat (dateToFormat: any, format: any) {
    if (dateToFormat) {
      return moment(dateToFormat).format(format);
    }
    return null;
  }

  formatDateTZWithFormat (dateToFormat: any, format: any) {
    if (dateToFormat) {
      return moment(dateToFormat).tz(timezone).format(format);
    }
    return null;
  }

  formatDateTZ (dateToFormat: any) {
    if (dateToFormat) {
      return moment(dateToFormat).tz(timezone).format('DD/MM/YYYY');
    }
    return null;
  }

  durationFromCurrentInMinutes = (toCheck: any): number => {
    const duration = moment.duration(moment().tz(timezone).diff(toCheck));
    return duration.asMinutes();
  }
}

export const datetime = new Datetime();
