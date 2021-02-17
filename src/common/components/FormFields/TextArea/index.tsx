import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { TextArea } from '@revolut/ui-kit'

type Props = {
  rows?: number
  placeholder?: string
  value?: string
} & FieldRenderProps<string, HTMLElement>

const TextAreaField: React.FC<Props> = ({ input, placeholder, value, rows, meta }) => {
  return (
    <TextArea
      onChange={input.onChange}
      placeholder={placeholder}
      error={meta.touched && meta.error}
      rows={rows}
      value={value}
    />
  )
}

export default TextAreaField
