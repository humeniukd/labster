import React from 'react'
import { format } from 'date-fns'

type Props = {
  timestamp: number
}

export const DateTime: React.FC<Props> = ({ timestamp }) => (
  <>{format(timestamp, 'yyyy-MM-dd HH:mm:ss')}</>
)
