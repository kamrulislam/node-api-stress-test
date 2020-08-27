import { prop, isNil } from './ramda-functions';

const getErrorStatusCode = (err: any): number => {
  const statusCode = prop('statusCode', err);
  const status = prop('status', err);

  return Number(!isNil(statusCode) ? statusCode
    :  !isNil(status) ? status : 500);

};

export {
  getErrorStatusCode,
};
