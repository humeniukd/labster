import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { copyToClipboard } from 'common/copy'
import { CopyText } from '..'

jest.mock('common/copy', () => ({
  copyToClipboard: jest.fn(),
}))

it('CopyText render', () => {
  const { getByText } = render(<CopyText>This is the text to copy</CopyText>)

  const copyTextHandler = getByText('This is the text to copy')

  fireEvent.mouseDown(copyTextHandler)
  expect(copyToClipboard).toHaveBeenCalledWith('This is the text to copy')
})
