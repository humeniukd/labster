import React from 'react'
import styled from 'styled-components'
import { Grid, ColProps } from '@revolut/ui-kit'
import { themeGet } from 'styled-system'

export * from './HeaderCol'

export const HeaderRow = styled(Grid.Row)`
  border-bottom: 1px solid ${themeGet('colors.grey-50')};
`

export const DataCol: React.FC<ColProps> = ({ children, cols, wordWrap, color }) => {
  return (
    <Grid.Col
      cols={cols}
      pt={1}
      pb={1}
      color={color}
      css={{ wordWrap: wordWrap ? 'break-word' : 'normal' }}
    >
      {children}
    </Grid.Col>
  )
}

export const DataRow = styled(Grid.Row)`
  border-bottom: 1px solid ${themeGet('colors.grey-90')};
  :nth-child(odd) {
    background-color: ${themeGet('colors.grey-95')};
  }
  :hover {
    background-color: ${themeGet('colors.grey-90')};
  }
`
