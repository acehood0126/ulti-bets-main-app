import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const BridgeUtbets = () => {
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
      </Flex>
    </>
  )
}

export default BridgeUtbets
