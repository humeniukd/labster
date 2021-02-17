import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { format } from 'date-fns'
import { DateTime } from '..'

beforeEach(cleanup)

describe('<DateTime />', () => {
  it('should format received timestamp in `yyyy-MM-dd HH:mm`', () => {
    const { queryByText } = render(<DateTime timestamp={1574079288093} />)
    expect(queryByText(format(new Date(1574079288093), 'yyyy-MM-dd HH:mm'))).toBeTruthy()
  })
})
