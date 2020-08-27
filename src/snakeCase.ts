/**
 * Created by hxg on 12/10/17.
 */
import * as _ from 'lodash';

export const snakeCase = (camelCaseObject: any): any => {
    return _.mapKeys(camelCaseObject, (value, key) => _.snakeCase(key.toString()));

};
