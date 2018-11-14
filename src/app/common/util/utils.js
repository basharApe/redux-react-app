import {keys} from 'lodash'

export function generateKeys(obj) {
  for (let key of keys(obj)) {
    obj[key].key = key
  }
  return obj
}
