import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export type WelcomeProps = {
  players: string
  poolPrize: string
  currentPlayer: string
  ChainName: string
}

const SquidRoundStats = ({
  players,
  poolPrize,
  currentPlayer,
  ChainName,
}: WelcomeProps) => {
  return (
    <>
      <Flex
        justifyContent={'start'}
        gap={['10px', '10px', '10px', '125px']}
        direction={['column', 'column', 'column', 'row']}
        alignItems={'start'}
      >
        <Flex
          justifyContent={'center'}
          mt={'20px'}
          width={['300px', 'unset', 'unset', 'unset']}
          direction={['column', 'column', 'column', 'row']}
          alignItems={['start', 'start', 'center', 'center']}
        >
          <Text
            fontWeight={'700'}
            fontSize={'27px'}
            lineHeight={'33px'}
            color={'white'}
            width={['unset', 'unset', 'unset', 'unset']}
            textTransform={'capitalize'}
          >
            Players Remaining:
            <Text
              display={['none', 'none', 'inline-block', 'inline-block']}
              as={'span'}
              color={'#FF9100'}
            >
              {/* 500 / 500{' '} */}
              {players} / {500}
            </Text>
          </Text>
          <Text
            fontWeight={'700'}
            fontSize={'27px'}
            lineHeight={'33px'}
            width={['unset', 'unset', 'unset', 'unset']}
            textTransform={'capitalize'}
            display={['block', 'block', 'none', 'none']}
            color={'#FF9100'}
          >
            {/* 500 / 500{' '} */}
            {players} / {500}
          </Text>
        </Flex>
        <Flex
          width={['300px', 'unset', 'unset', 'unset']}
          direction={['column', 'column', 'column', 'row']}
          mt={'20px'}
          justifyContent={'center'}
          alignItems={['start', 'start', 'center', 'center']}
        >
          <Text
            fontWeight={'700'}
            fontSize={'27px'}
            lineHeight={'33px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            Current prize pool:
            <Text
              display={['none', 'none', 'inline', 'inline']}
              as={'span'}
              color={'#FF9100'}
            >
              {/* 7000 FTM{' '} */}
              {poolPrize} {ChainName}
            </Text>
          </Text>
          <Text
            fontWeight={'700'}
            fontSize={'27px'}
            lineHeight={'33px'}
            color={'#FF9100'}
            display={['block', 'block', 'none', 'none']}
          >
            {/* 7000 FTM{' '} */}
            {poolPrize} {ChainName}
          </Text>
        </Flex>

        <Flex
          width={['300px', 'unset', 'unset', 'unset']}
          direction={['column', 'column', 'column', 'row']}
          mt={'20px'}
          justifyContent={'center'}
          alignItems={['start', 'start', 'center', 'center']}
        >
          <Text
            fontWeight={'700'}
            fontSize={'27px'}
            lineHeight={'33px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            your player #:
            <Text
              display={['none', 'none', 'inline', 'inline']}
              as={'span'}
              color={'#FF9100'}
            >
              {/* 456 */}
              {currentPlayer}
            </Text>
          </Text>
          <Text
            fontWeight={'700'}
            fontSize={'27px'}
            lineHeight={'33px'}
            color={'#FF9100'}
            display={['block', 'block', 'none', 'none']}
          >
            {/* 456 */}
            {currentPlayer}
          </Text>
        </Flex>
      </Flex>
      {/* <Flex mt={'25px'} direction={'column'} gap={'25px'}>
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={'20px'}
          lineHeight={'27px'}
          color={'#E18933'}
          textTransform={'capitalize'}
          width={['unset', 'unset', 'unset', '592px']}
        >
          {`
             The betting competition where only 1 player will win-it-all ! base
             prize pool is ${poolPrize} FTM MINIMUM*!
            `}{' '}
        </Text>
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={'17px'}
          lineHeight={'23.19px'}
        >
          {`  *(500 Players x 10 FTM) / 10% organisator fee + 5 fTM for the first
               Bet)`}
        </Text>
      </Flex> */}
    </>
  )
}

export default SquidRoundStats
