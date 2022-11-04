import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import dynamic from 'next/dynamic'
import Pie from './Pie'
import '@fontsource/inter'

// const NoSSR = dynamic(() => import('./Pie'), {
//   ssr: false,
// })

const chartData = [
  {
    //     Private funding: 5%
    // 50,000,000 $UTBETS
    country: 'Private Funding',
    litres: 50000000,
  },
  {
    //     team: 15%
    // 150,000,000 $UTBETS
    country: 'Team',
    litres: 150000000,
  },

  {
    //     Airdrop: 5%
    // 50,000,000 $UTBETS
    country: 'Airdrop',
    litres: 50000000,
  },
  {
    //     Growth & partnerships: 15%
    // 150,000,000 $UTBETS
    country: 'Growth & Partnerships',
    litres: 150000000,
  },
  {
    //     infrastructure & Scaling: 10%
    // 100,000,000 $UTBETS
    country: 'Infrastructure & Scaling',
    litres: 100000000,
  },
  {
    //     public sale: 20%
    // 200,000,000 $UTBETS
    country: 'Public Sale',
    litres: 200000000,
  },
  {
    //     community incentives: 30%
    // 300,000,000 $UTBETS
    country: 'Community Incentives',
    litres: 300000000,
  },
]
const UtBetsToken = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  return (
    <>
      <Flex justifyContent={'center'} direction={'column'} gap={'15px'}>
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Flex gap={'18px'}>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={['14px', '15px', '17px', '17px']}
              lineHeight={['15px', '17px', '19px', '19px']}
              color={currentRoute === '/utbets-token' ? '#E18833' : '#FFFFFF'}
              textTransform={'capitalize'}
              cursor={'pointer'}
              onClick={() => router.push('/utbets-token')}
            >
              Token informaton{' '}
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={['14px', '15px', '17px', '17px']}
              lineHeight={['15px', '17px', '19px', '19px']}
              color={'white'}
              textTransform={'capitalize'}
            >
              |
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={['14px', '15px', '17px', '17px']}
              lineHeight={['15px', '17px', '19px', '19px']}
              color={
                currentRoute === '/utbets-token/buy-utbets'
                  ? '#E18833'
                  : '#FFFFFF'
              }
              textTransform={'capitalize'}
              cursor={'pointer'}
              onClick={() => router.push('/utbets-token/buy-utbets')}
            >
              buy $UTBETS{' '}
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={['14px', '15px', '17px', '17px']}
              lineHeight={['15px', '17px', '19px', '19px']}
              color={'white'}
              textTransform={'capitalize'}
            >
              |
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={['14px', '15px', '17px', '17px']}
              lineHeight={['15px', '17px', '19px', '19px']}
              color={
                currentRoute === '/utbets-token/bridge-utbets'
                  ? '#E18833'
                  : '#FFFFFF'
              }
              textTransform={'capitalize'}
              cursor={'pointer'}
              onClick={() => router.push('/utbets-token/bridge-utbets')}
            >
              Bridge $UTBETS{' '}
            </Text>
          </Flex>
        </Flex>
        {/* <Flex>
          <Image src="/images/svgs/tokonomics.svg" />
        </Flex> */}
        <Flex justifyContent={'center'} alignItems={'center'} gap={'10px'}>
          <Text
            fontFamily={'Inter'}
            fontWeight={'700'}
            fontSize={'35px'}
            lineHeight={'42px'}
            color={'#E18833'}
            textTransform={'capitalize'}
          >
            $UTBETS
          </Text>
          <Text
            // fontFamily={'Inter'}
            fontWeight={'700'}
            fontSize={'35px'}
            lineHeight={'42px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            Tokenomics
          </Text>
        </Flex>
        <Flex justifyContent={'center'} alignItems={'center'} gap={'10px'}>
          <Text
            fontFamily={'Inter'}
            fontWeight={'700'}
            fontSize={'20px'}
            lineHeight={'24px'}
            color={'#E18833'}
            textTransform={'capitalize'}
          >
            Total supply:{' '}
          </Text>
          <Text
            // fontFamily={'Inter'}
            fontWeight={'700'}
            fontSize={'20px'}
            lineHeight={'24px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            1,000,000,000 $UTBETS{' '}
          </Text>
        </Flex>
        <Flex justifyContent={'center'} alignItems={'center'} gap={'10px'}>
          <Text
            // fontFamily={'Inter'}
            fontWeight={'700'}
            fontSize={'13px'}
            lineHeight={'15px'}
            color={'white'}
            textTransform={'capitalize'}
            mx={'40px'}
          >
            1,000,000,000 $UTBETS Will be distributed into four different Chains
            (BSC, ETH, FTM, AVAX) and will be available for trading on Uniswap,
            Pancakeswap, Quickswap, Sushiswap, and other DEXs.
          </Text>
        </Flex>

        <Flex
          display={['none', 'none', 'none', 'flex']}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Pie data={chartData} />
        </Flex>
      </Flex>
      <Flex
        direction={'column'}
        // width={'90vw'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={'25px'}
          lineHeight={'34px'}
          color={'white'}
          textTransform={'capitalize'}
          mb={'20px'}
        >
          vesting and unlock
        </Text>

        <Flex width={'88vw'} height={'0px'} border={'1px solid #FFFFFF'} />

        <Flex
          gap={['30px', '10px', '10px', '100px']}
          mt={'20px'}
          mb={'20px'}
          direction={['column', 'column', 'column', 'row']}
        >
          <Flex direction={'column'} width={'350px'} gap={'10px'}>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'16px'}
              lineHeight={'22px'}
              color={'white'}
              textTransform={'capitalize'}
            >
              Team{' '}
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'16px'}
              lineHeight={'22px'}
              color={'white'}
              textTransform={'capitalize'}
            >
              Cliff 6 months, vesting 12 months, then unlock every month for 24
              months @ 1/24th per month, post mainnet{' '}
            </Text>
          </Flex>
          <Flex direction={'column'} width={'350px'} gap={'10px'}>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'16px'}
              lineHeight={'22px'}
              color={'white'}
              textTransform={'capitalize'}
            >
              funding{' '}
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'16px'}
              lineHeight={'22px'}
              color={'white'}
              textTransform={'capitalize'}
            >
              vesting period 12 months, then unlock every month for 12 months @
              1/12th per month, post mainnet
            </Text>
          </Flex>
          <Flex direction={'column'} width={'350px'} gap={'10px'}>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'16px'}
              lineHeight={'22px'}
              color={'white'}
              textTransform={'capitalize'}
            >
              thortstarter IDO{' '}
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'16px'}
              lineHeight={'22px'}
              color={'white'}
              textTransform={'capitalize'}
            >
              30% unlock on TGE, 3 month cliff. then unlock 10% monthly linear{' '}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default UtBetsToken
