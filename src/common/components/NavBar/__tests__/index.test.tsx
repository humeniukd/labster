import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { MemoryRouter } from 'react-router'
import { render, waitForDomChange, cleanup } from '@testing-library/react'
import NavBar from '..'

beforeAll(cleanup)

describe('<NavBar />', () => {
  it('should render Navigation link, logged in person and log out link', async () => {
    const { getByText, getByTestId, queryByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    )

    await waitForDomChange()

    expect(getByText('Import Jobs')).toHaveAttribute('href', '/import-jobs')
    expect(getByText('Keys')).toHaveAttribute('href', '/keys')
    expect(getByText('Zone Keys')).toHaveAttribute('href', '/zone-keys')
    expect(queryByText('Test User')).toBeTruthy()
    expect(getByTestId('logout-button').querySelector('svg')).toBeTruthy()
  })
})
