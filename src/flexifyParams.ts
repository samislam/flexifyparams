import _ from 'lodash'

type ReturnValue<PARAM extends object> = {
  [KEY in keyof PARAM]: PARAM[KEY] extends (...x: any) => infer RETURN_VAL ? RETURN_VAL : PARAM[KEY]
}

export default function flexifyParams<PARAM extends object>(param: PARAM, args: any[] = []): ReturnValue<PARAM> {
  const composedObject: any = {}
  for (const [key, value] of Object.entries(param)) {
    composedObject[key] = _.isFunction(value) ? value(...args) : value
  }
  return composedObject
}
