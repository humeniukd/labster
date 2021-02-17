export const pipeValidators = (...validators: any[] /** ValidatorFunction */) => (
  value: any,
  allValues?: any,
) =>
  validators.reduce((error, validator) => error || validator(value, allValues), undefined)

export const required = (customMessage: string = 'Required') => (value: any) => {
  const isEmpty = !value || (Array.isArray(value) && !value.length)
  return isEmpty ? customMessage : undefined
}

export const sameExists = (dic: string[][]) => {
  const froms = dic.map(([from]) => from)
  return (from: string) => (froms.includes(from) ? 'Same entry exists' : undefined)
}
