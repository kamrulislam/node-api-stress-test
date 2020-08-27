import * as R from 'ramda';

export const {
  contains,
  isNil,
  prop,
  path,
  equals,
  has,
  isEmpty,
  both,
  either,
  lensProp,
  lensPath,
  view,
  set,
  over,
  add,
  multiply,
  toPairs,
} = R;

export const createLensProp = (val: string): any => {
  return lensProp(val);
};

export const toNumber = (val: string): number => {
  console.debug('toNumber: %s, %s', val, isNilOrEmpty(val));
  return isNilOrEmpty(val) ? null : +val;
};

const isStringNullOrNil = (val: string): boolean => equals('null', val) || isNil(val);
export const isNilOrEmpty = either(isStringNullOrNil, isEmpty);
