import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import MyBetsStats from '../../components/mybets/MyBetsStats'

const MyBets = () => {
  const router = useRouter()

  //   status,
  //   returnReward,
  //   chainName,
  //   rewardInpercent,
  //   betChoice,
  //   betTime,
  //   betTitle,
  //   odds,
  //   betAmount,
  //   poolSide,

  const mybetsData = [
    {
      status: 'Pending',
      returnReward: '0',
      rewardInpercent: '0',
      chainName: 'FTM',
      betChoice: 'Yes',
      betTime: '2021-08-10 12:00:00',
      betTitle: 'Will Atalanta win against sampdoria?',
      odds: '15',
      betAmount: '10',
      poolSide: '10',
      betId: '1',
    },
    {
      betId: '2',
      status: 'Won',
      returnReward: '50',
      rewardInpercent: '500',
      chainName: 'FTM',
      betChoice: 'No',
      betTime: '2021-08-10 12:00:00',
      betTitle: 'Will Atalanta win against sampdoria?',
      odds: '40',
      betAmount: '10',
      poolSide: '10',
    },
    {
      betId: '3',
      status: 'Lost',
      returnReward: '0',
      rewardInpercent: '0',
      chainName: 'FTM',
      betChoice: 'Yes',
      betTime: '2021-08-10 12:00:00',
      betTitle: 'Will Atalanta win against sampdoria?',
      odds: '20',
      betAmount: '10',
      poolSide: '10',
    },
    {
      status: 'Pending',
      returnReward: '0',
      rewardInpercent: '0',
      chainName: 'FTM',
      betChoice: 'Yes',
      betTime: '2021-08-10 12:00:00',
      betTitle: 'Will Atalanta win against sampdoria?',
      odds: '15',
      betAmount: '10',
      poolSide: '10',
      betId: '4',
    },
    {
      betId: '5',
      status: 'Won',
      returnReward: '50',
      rewardInpercent: '500',
      chainName: 'FTM',
      betChoice: 'No',
      betTime: '2021-08-10 12:00:00',
      betTitle: 'Will Atalanta win against sampdoria?',
      odds: '40',
      betAmount: '10',
      poolSide: '10',
    },
    {
      betId: '6',
      status: 'Lost',
      returnReward: '0',
      rewardInpercent: '0',
      chainName: 'FTM',
      betChoice: 'Yes',
      betTime: '2021-08-10 12:00:00',
      betTitle: 'Will Atalanta win against sampdoria?',
      odds: '20',
      betAmount: '10',
      poolSide: '10',
    },
  ]
  return (
    <Box>
      <Box
        ml={['10px', '20px', '40px', '120px']}
        mt={['10px', '20px', '40px', '30px']}
      >
        <Flex gap={'18px'}>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'17px'}
            lineHeight={'23px'}
            color={'#FFFFFF'}
            textTransform={'capitalize'}
            cursor={'pointer'}
            onClick={() => router.push('/')}
          >
            Open Bets
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'17px'}
            lineHeight={'23px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            |
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'17px'}
            lineHeight={'23px'}
            color={'#FFFFFF'}
            textTransform={'capitalize'}
            cursor={'pointer'}
          >
            Closed Bets
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'17px'}
            lineHeight={'23px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            |
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'17px'}
            lineHeight={'23px'}
            color={'#FFFFFF'}
            textTransform={'capitalize'}
            cursor={'pointer'}
          >
            All Bets
          </Text>
        </Flex>
        <Box mt={['10px', '20px', '40px', '30px']}>
          <Flex gap={'18px'}>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'17px'}
              lineHeight={'23px'}
              color={'#FFFFFF'}
              textTransform={'capitalize'}
              cursor={'pointer'}
              onClick={() => router.push('/')}
            >
              Last 7 Days
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'17px'}
              lineHeight={'23px'}
              color={'white'}
              textTransform={'capitalize'}
              cursor={'pointer'}
              onClick={() => router.push('/')}
            >
              Last 30 Days
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'17px'}
              lineHeight={'23px'}
              color={'#FFFFFF'}
              textTransform={'capitalize'}
              cursor={'pointer'}
              onClick={() => router.push('/')}
            >
              All Time{' '}
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'17px'}
              lineHeight={'23px'}
              color={'white'}
              textTransform={'capitalize'}
              cursor={'pointer'}
              onClick={() => router.push('/')}
            >
              Choose Period of time{' '}
            </Text>
          </Flex>
        </Box>
        <Grid
          // 2 columns and 2 rows  template
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={['20px', '20px', '10px', '10px']}
          m={['10px', '20px', '0px', '0px']}
        >
          {mybetsData.map((item, index) => {
            return (
              <MyBetsStats
                key={item.betId}
                status={item.status}
                returnReward={item.returnReward}
                chainName={item.chainName}
                rewardInpercent={item.rewardInpercent}
                betChoice={item.betChoice}
                betTime={item.betTime}
                betTitle={item.betTitle}
                odds={item.odds}
                betAmount={item.betAmount}
                poolSide={item.poolSide}
              />
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default MyBets
