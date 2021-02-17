import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { Input } from '@revolut/ui-kit'

type Props = {
  placeholder?: string
  disabled?: boolean
} & FieldRenderProps<string, HTMLElement>

const InputField: React.FC<Props> = ({ input, placeholder, meta, disabled }) => {
  return (
    <Input
      onChange={input.onChange}
      error={meta.touched && meta.error}
      placeholder={placeholder}
      value={input.value}
      disabled={disabled}
    />
  )
}

export default InputField
