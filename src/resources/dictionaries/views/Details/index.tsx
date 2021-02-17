import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router'
import Layout from 'common/components/Layout'
import { useDataContext } from 'common/context'
import { Box, Button, Flex, Grid, H3 } from '@revolut/ui-kit'
import { DataCol, DataRow, HeaderCol, HeaderRow } from 'common/components/DataGrid'
import { Field, Form } from 'react-final-form'
import InputField from 'common/components/FormFields/Input'
import {
  required,
  sameExists,
  pipeValidators,
} from 'common/components/FormFields/validation'
import { Delete } from '@revolut/icons'
import { Drow, HiddenFormButton } from './styled'

const DictionaryView: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data: dictionaries, edit } = useDataContext()
  const [isValidated, setIsValidated] = useState(false)

  const dic = dictionaries[id]
  const rows = dic.data

  const froms = {}
  for (const [f] of rows) {
    if (!froms[f]) froms[f] = 1
    else froms[f] += 1
  }

  const isValid = useCallback(
    f => {
      return !isValidated || froms[f] === 1
    },
    [froms, isValidated],
  )
  return (
    <Layout>
      <Flex justifyContent="space-between">
        <H3>Dictionary {dic.name}</H3>
        <Box width="14rem">
          <Button size="sm" onClick={() => setIsValidated(!isValidated)}>
            Validate
          </Button>
        </Box>
      </Flex>
      <Box mt={2}>
        <Grid>
          <HeaderRow>
            <HeaderCol cols={6}>From</HeaderCol>
            <HeaderCol cols={6}>To</HeaderCol>
          </HeaderRow>
          {rows &&
            rows.map(([from, to]) => (
              <Drow key={from + to}>
                <DataCol cols={6} color={isValid(from) ? 'black' : 'red'}>
                  {from}
                </DataCol>
                <DataCol cols={5}>{to}</DataCol>
                <DataCol cols={1}>
                  <Delete
                    className="delete"
                    onClick={() => {
                      edit(id, dic.data.filter(([f]) => f !== from))
                    }}
                  />
                </DataCol>
              </Drow>
            ))}
          <Form
            initialValues={{
              from: '',
              to: '',
            }}
            onSubmit={(data, form) => {
              edit(id, [...dic.data, [data.from, data.to]])
              setTimeout(form.reset)
            }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <DataRow>
                  <DataCol cols={6}>
                    <Field
                      name="from"
                      component={InputField}
                      validate={pipeValidators(required(), sameExists(dic.data))}
                      placeholder="From"
                    />
                  </DataCol>
                  <DataCol cols={6}>
                    <Field
                      name="to"
                      component={InputField}
                      validate={required()}
                      placeholder="To"
                    />
                  </DataCol>
                </DataRow>
                <HiddenFormButton type="submit" />
              </form>
            )}
          />
        </Grid>
      </Box>
    </Layout>
  )
}

export default DictionaryView
