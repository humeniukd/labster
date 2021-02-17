import React from 'react'

import { render, cleanup, waitForDomChange } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Layout from '..'

beforeEach(cleanup)

describe('<Layout />', () => {
  it('should show content with nav links and content after loading', async () => {
    const { queryByTestId, queryByText } = render(
      <MemoryRouter>
        <Layout>Layout content</Layout>
      </MemoryRouter>,
    )

    expect(queryByTestId('layout-loading')).toBeTruthy()
    expect(queryByText('Layout content')).toBeFalsy()

    await waitForDomChange()

    expect(queryByTestId('layout-loading')).toBeFalsy()
    expect(queryByText('Layout content')).toBeTruthy()
  })
})
