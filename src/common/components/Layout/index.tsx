import React from 'react'
import { Box } from '@revolut/ui-kit'
import NavBar from 'common/components/NavBar'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Box ml="2" mr="2">
        <NavBar />
      </Box>
      <Box ml="2" mr="2">
        <Box m="0 auto" width="1280px" pb={2}>
          {children}
        </Box>
      </Box>
    </>
  )
}

export default Layout
