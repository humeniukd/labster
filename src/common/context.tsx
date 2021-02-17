import React, { FC, useContext, useState, useCallback } from 'react'
import { noop, omit } from 'lodash'

type Dictionary = {
  id: string
  name: string
  data: string[][]
}

type DataType = Record<string, Dictionary>

const initState = {
  1234567890000: {
    id: '1234567890000',
    name: 'Test',
    data: [
      ['ph', 'Biology'],
      ['Atoms', 'Chemistry'],
      ['Circuit Building', 'Physics'],
      ['ph', 'Pharmacy'],
    ],
  },
}

const DataContext = React.createContext<{
  data: DataType
  add: (data: Dictionary) => void
  remove: (id: string) => void
  edit: (id: string, dic: any[]) => void
}>({
  data: initState,
  add: noop,
  remove: noop,
  edit: noop,
})

export const DataProvider: FC = ({ children }) => {
  const [data, setData] = useState<DataType>(initState)

  const add = useCallback(
    (item: Dictionary) =>
      setData({
        [item.id]: item,
        ...data,
      }),
    [data],
  )

  const remove = useCallback(
    (id: string) => {
      setData(omit(data, id))
    },
    [data],
  )

  const edit = useCallback(
    (id: string, dic) => {
      setData({
        ...data,
        [id]: {
          ...data[id],
          data: dic,
        },
      })
    },
    [data],
  )

  return (
    <DataContext.Provider
      value={{
        data,
        add,
        remove,
        edit,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  return useContext(DataContext)
}
