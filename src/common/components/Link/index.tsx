import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

export default styled(Link)`
  text-decoration: none;
  color: ${themeGet('colors.primary')};
`
