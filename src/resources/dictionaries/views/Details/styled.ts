import styled from 'styled-components'
import { DataRow } from 'common/components/DataGrid'

export const HiddenFormButton = styled.button`
  width: 0;
  height: 0;
  visibility: hidden;
  position: absolute;
`

export const Drow = styled(DataRow)`
  & .delete {
    display: none;
  }
  &:hover .delete {
    display: block;
  }
`
