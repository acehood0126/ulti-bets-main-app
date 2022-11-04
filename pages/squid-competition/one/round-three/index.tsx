import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import '@fontsource/inter'
import '@fontsource/nunito'
import { useRouter } from 'next/router'
import Timeline from '../../../../components/squid/Timeline'
import Welcome from '../../../../components/squid/Welcome'
import SquidRoundStats from '../../../../components/squid/SquidRoundStats'
import SquidGrid from '../../../../components/squid/SquidGrid'
import SquidRoundInfo from '../../../../components/squid/SquidRoundInfo'
import MyBetsComponent from '../../../../components/mybets/MyBetsComponent'
import SquidBetInfo from '../../../../components/squid/SquidBetInfo'

const RoundThree = () => {
  const router = useRouter()
  const currentRoute = router.pathname

  const players = Array.from({ length: 500 }, (_, i) => ({
    name: `Player ${i + 1}`,
    score: 100,
    // only 5 players are active
    active: i <= 327,
  }))

  useEffect(() => {
    document.title = 'Squid Competitions | UltiBets'
  }, [])

  return (
    <>
      <Box
        ml={['20px', '0px', '20px', '120px']}
        mt={['30px', '30px', '40px', '40px']}
        mr={['0px', '0px', '20px', '0px']}
      >
        <Flex direction={'column'}>
          <Box>
            <MyBetsComponent />
            <Box
            // display={['none', 'none', 'none', 'block']}
            >
              <Timeline />
            </Box>
            <Welcome title={'Welcome to Squid Bet #1'} round={'Round 3'} />
            <SquidRoundStats
              players="500"
              poolPrize="10655"
              ChainName="FTM"
              currentPlayer="456"
            />
          </Box>

          <SquidGrid players={players} />
          <SquidRoundInfo
            volume="2500"
            chianName="FTM"
            bettingDeadline="30 minutes before"
            countdownDeadline="expired"
            dateAndTime=" 07/28 @ 20:00 UTC"
          />
          <SquidBetInfo
            betQue=" Will PSG win against FC Nantes today?"
            series="Series B"
            accessRound="Access Round IV"
            betAmount="5"
            currentRound="3"
            chainName="FTM"
            totalPlayers="500"
            claimNFT="Claim Winner Round II NFT"
          />
        </Flex>
      </Box>
    </>
  )
}

export default RoundThree
