import React from 'react'
import userEvent from '@testing-library/user-event'
import { within, waitForDomChange } from '@testing-library/react'

import * as ImportJobsApi from 'resources/dictionaries/api'
import { renderWithAuth, responseMock } from 'common/testUtils'
import { Cipher } from 'common/types'

import CreateNewJobModal from '..'

describe('Create Import Job Form', () => {
  it('should submit Import Job data', async () => {
    const submitSpy = jest.fn()
    const requestSpy = jest
      .spyOn(ImportJobsApi, 'createImportJob')
      .mockResolvedValue(responseMock({}))

    const { getByLabelText, getByText, getByTestId } = renderWithAuth(
      <CreateNewJobModal onSubmit={submitSpy} onCancel={jest.fn()} />,
    )
    userEvent.type(getByLabelText('Key Name'), 'newTestKey')
    userEvent.click(
      within(getByTestId('import-job-key-type')).getByText(
        ImportJobsApi.ImportJobKeyType.DEK,
      ),
    )
    userEvent.type(getByLabelText('Key Parts Count'), '3')
    userEvent.click(within(getByTestId('cipher-radio')).getByText(Cipher.AES))
    userEvent.click(getByText('Advanced'))
    await waitForDomChange()
    userEvent.type(getByLabelText('Version'), '23')

    userEvent.click(getByText('Create'))
    await waitForDomChange()

    expect(submitSpy).toHaveBeenCalled()

    const expectedSubmitData: ImportJobsApi.CreateImportJobData = {
      cipher: Cipher.AES,
      keyName: 'newTestKey',
      keyPartsCount: 3,
      keyType: ImportJobsApi.ImportJobKeyType.DEK,
      keyVersion: 23,
    }

    expect(requestSpy).toHaveBeenCalledWith(expectedSubmitData)
  })
})
