import React from 'react'
import { TabBar, Flex, Box } from '@revolut/ui-kit'
import { TabBarWrapper, UserNameBox } from './styled'

const NavBar: React.FC = () => (
  <TabBarWrapper mb={3}>
    <Flex m="0 auto" width="1280px">
      <Box flex="1">
        <TabBar>
          <TabBar.Item to="/dictionaries">Home</TabBar.Item>
        </TabBar>
      </Box>
      <Flex>
        <UserNameBox mr={2} mt={2}>
          John Doe
        </UserNameBox>
      </Flex>
    </Flex>
  </TabBarWrapper>
)

export default NavBar
