import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Box, TextBox } from '@revolut/ui-kit'

export const TabBarWrapper = styled(Box)`
  border-bottom: 1px solid ${themeGet('colors.grey-80')};
`

export const UserNameBox = styled(TextBox)`
  white-space: nowrap;
`
