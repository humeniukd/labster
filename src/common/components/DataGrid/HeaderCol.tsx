import React, { useCallback, useState } from 'react'
import { ColProps, Grid, TextBox } from '@revolut/ui-kit'
import { ShevronDown, ShevronUp } from '@revolut/icons'
import styled, { css } from 'styled-components'
import { SortDirection } from 'common/types'

const Col = styled(Grid.Col)<{
  isSortable: boolean
}>`
  display: flex;
  align-items: center;
  ${({ isSortable }) =>
    isSortable &&
    css`
      cursor: pointer;
    `}
`

export const HeaderCol: React.FC<ColProps> = ({ children, cols, onSort }) => {
  const [sort, setSort] = useState<SortDirection>(SortDirection.None)
  const handleSort = useCallback(() => {
    if (!onSort) return
    const setDir = (dir: SortDirection) => {
      setSort(dir)
      onSort(dir)
    }
    switch (sort) {
      case SortDirection.ASC:
        setDir(SortDirection.None)
        break
      case SortDirection.DESC:
        setDir(SortDirection.ASC)
        break
      case SortDirection.None:
        setDir(SortDirection.DESC)
    }
  }, [onSort, sort])
  return (
    <Col cols={cols} pt={1} pb={1} onClick={handleSort} isSortable={onSort}>
      <TextBox fontWeight={800} ver>
        {children}
      </TextBox>
      {sort === SortDirection.DESC && <ShevronDown />}
      {sort === SortDirection.ASC && <ShevronUp />}
    </Col>
  )
}
