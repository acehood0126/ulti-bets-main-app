import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import BettingCardList from '../../components/bets/card/BettingCardList'
import SquidCurosel from '../../components/Container/SquidCurosel'
import SquidCardList from '../../components/squid/SquidCardList'

const SbcHome = () => {
  return (
    <Box
      height={{
        base: 'auto',
        md: 'auto',
        lg: 'auto',
        xl: 'auto',
        xxl: '100vh',
      }}
    >
      <SquidCurosel />
      <Flex justifyContent={'center'} alignItems={'center'}>
        <SquidCardList />
      </Flex>
    </Box>
  )
}

export default SbcHome
