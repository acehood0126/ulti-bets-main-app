import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import BettingCardList from '../../components/bets/card/BettingCardList'
import HomeCurosel from '../../components/Container/Curosel'

const bets = () => {
  return (
    <>
      <Box
        height={{
          base: 'auto',
          md: 'auto',
          lg: 'auto',
          xl: 'auto',
          xxl: 'auto',
        }}
      >
        <HomeCurosel />
        <Flex justifyContent={'center'} alignItems={'center'}>
          <BettingCardList />
        </Flex>
      </Box>
    </>
  )
}

export default bets
