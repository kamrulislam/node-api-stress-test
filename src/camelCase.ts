/**
 * Created by hxg on 12/10/17.
 */
import * as _ from 'lodash';

const camelCase = (snakeCaseObject: any): any => {
  return _.mapKeys(snakeCaseObject, (value, key) => _.camelCase(key.toString()));
};

export { camelCase };
