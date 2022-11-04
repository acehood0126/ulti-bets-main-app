import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Proposals from '../../components/Governance/proposals'
import Voting from '../../components/Governance/Voting'
import '@fontsource/inter'
import '@fontsource/nunito'

const Governance = () => {
  return (
    <Flex
      mt={'30px'}
      width={'100%'}
      height={['auto', 'auto', 'auto', '100vh']}
      gap={'50px'}
      justifyContent={'center'}
      alignItems={['center', 'center', 'center', 'start']}
      direction={['column', 'column', 'column', 'row']}
    >
      <Voting />

      <Proposals />
    </Flex>
  )
}

export default Governance
