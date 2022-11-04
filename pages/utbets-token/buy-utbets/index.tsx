import { Box, Flex, Heading, Image, Switch, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const BuyUtbets = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  return (
    <>
      <Flex justifyContent={'center'} direction={'column'}>
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Flex gap={'18px'}>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'17px'}
              lineHeight={'23px'}
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
        <Flex mt={'80px'} justifyContent={'center'} alignItems={'center'}>
          <Flex
            width={'500px'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Flex gap={'20px'}>
              {' '}
              <Switch colorScheme="orange" size="lg" />
              <Text
                // ont-family: 'Nunito';
                // font-style: normal;
                // font-weight: 700;
                // font-size: 18px;
                // line-height: 25px;
                // /* identical to box height */
                // text-transform: capitalize;
                // color: #FFFFFF;

                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                show UTBETS Chart
              </Text>
            </Flex>
            <Image src={'/images/svgs/gear.svg'} alt={'gear'} />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default BuyUtbets
