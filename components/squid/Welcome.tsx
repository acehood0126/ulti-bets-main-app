import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export type WelcomeProps = {
  title: string
  round?: string
}

const Welcome = ({ title, round }: WelcomeProps) => {
  return (
    <Flex
      direction={['column', 'column', 'column', 'row']}
      width={['100%', '100%', '100%', '600px']}
      justifyContent={['center', 'center', 'space-between', 'space-between']}
      alignItems={'start'}
    >
      <Flex justifyContent={'center'} mt={'20px'} alignItems={'center'}>
        <Text
          fontWeight={'700'}
          fontSize={['22px', '20px', '20px', '27px']}
          lineHeight={['27px', '27px', '27px', '33px']}
          color={'white'}
          textTransform={'capitalize'}
        >
          {/* Welcome to Squid Bet #1 */}
          {title}
        </Text>
        <Box
          ml={['5px', '10px', '10px', '10px']}
          width={'39px'}
          height={'39px'}
          background={"url('/images/svgs/slider/squid-icon.svg')"}
        ></Box>
      </Flex>
      <Flex mt={'20px'} justifyContent={'center'} alignItems={'center'}>
        <Text
          fontWeight={'700'}
          fontSize={'27px'}
          lineHeight={'33px'}
          color={'white'}
          textTransform={'capitalize'}
        >
          {/* Round 1 */}
          {round ? round : ''}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Welcome
