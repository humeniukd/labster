import React, { useState } from 'react'
import { Delete } from '@revolut/icons'
import {
  Grid,
  H3,
  Box,
  Button,
  Flex,
  Modal,
  TransitionSlideDown,
  ELEVATIONS,
} from '@revolut/ui-kit'
import Link from 'common/components/Link'
import { DateTime } from 'common/components/DateTime'
import { HeaderRow, DataRow, HeaderCol, DataCol } from 'common/components/DataGrid'

import Layout from 'common/components/Layout'
import { useDataContext } from 'common/context'
import CreateDictionary from './CreateDictionary'

const DictionaryListView: React.FC = () => {
  const [isModalOpen, openModal] = useState(false)
  const [deleted, setDeleted] = useState()

  const { data: items, add, remove } = useDataContext()

  return (
    <Layout>
      <Flex justifyContent="space-between">
        <H3>Dictionaries</H3>
        <Box width="14rem">
          <Button size="sm" onClick={() => openModal(true)}>
            Create Dictionary
          </Button>
        </Box>
      </Flex>
      <Box mt={2}>
        <Grid>
          <HeaderRow>
            <HeaderCol cols={3}>Title</HeaderCol>
            <HeaderCol cols={2}>Date</HeaderCol>
          </HeaderRow>
          {Object.keys(items) &&
            Object.keys(items).map(key => (
              <DataRow key={key}>
                <DataCol cols={6}>
                  <Link to={`/dictionaries/${key}`}>{items[key].name}</Link>
                </DataCol>
                <DataCol cols={2}>
                  <DateTime timestamp={parseInt(key)} />
                </DataCol>
                <DataCol cols={2}>
                  <Delete onClick={() => setDeleted(key)} />
                </DataCol>
              </DataRow>
            ))}
        </Grid>
      </Box>
      <Modal isOpen={!!deleted}>
        <TransitionSlideDown in={!!deleted} offset={-100}>
          <Box
            bg="white"
            radius="popup"
            elevation={ELEVATIONS.Higher}
            maxWidth={600}
            p={3}
            my={3}
            mx="auto"
          >
            <H3>Are you sure?</H3>
            <Flex mt={5}>
              <Button
                size="sm"
                width="10rem"
                variant="accent"
                mr={2}
                onClick={() => {
                  remove(deleted)
                  setDeleted(null)
                }}
              >
                Delete
              </Button>
              <Button
                size="sm"
                width="10rem"
                variant="primary"
                onClick={() => setDeleted(null)}
              >
                Cancel
              </Button>
            </Flex>
          </Box>
        </TransitionSlideDown>
      </Modal>
      <Modal isOpen={isModalOpen}>
        <TransitionSlideDown in={isModalOpen} offset={-100}>
          <CreateDictionary
            onSubmit={item => {
              add(item)
              openModal(false)
            }}
            onCancel={() => openModal(false)}
          />
        </TransitionSlideDown>
      </Modal>
    </Layout>
  )
}

export default DictionaryListView
