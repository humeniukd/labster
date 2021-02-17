import React, { MouseEvent, useEffect, useState } from 'react'

import styled from 'styled-components'
import { rgba } from 'polished'
import { copyToClipboard } from 'common/copy'

const CopyTextStyled = styled.span<{ flash: boolean }>`
  background: ${({ flash }) => (flash ? rgba(245, 166, 35, 0.7) : 'none')};
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: background;
  transition-timing-function: linear;
`

export const CopyText: React.FC = ({ children, ...restProps }) => {
  const [flashingTimeout, setflashingTimeout] = useState()
  const [flash, setFlash] = useState(false)

  useEffect(
    () => () => {
      if (flashingTimeout) {
        clearTimeout(flashingTimeout)
      }
    },
    [flashingTimeout],
  )

  const onClickText = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    copyToClipboard(children as string)

    if (flashingTimeout) {
      clearTimeout(flashingTimeout)
    }
    setFlash(true)
    setflashingTimeout(
      setTimeout(() => {
        setFlash(false)
      }, 300),
    )
  }
  return (
    <CopyTextStyled flash={flash} onMouseDown={onClickText} {...restProps}>
      {children}
    </CopyTextStyled>
  )
}
