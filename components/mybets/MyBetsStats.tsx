import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export type MyBetsStatsProps = {
  status?: string
  returnReward?: string
  rewardInpercent?: string
  chainName?: string
  betChoice?: string
  betTime?: string
  betTitle?: string
  odds?: string
  betAmount?: string
  poolSide?: string
  betId?: string
}

const MyBetsStats = ({
  status,
  returnReward,
  chainName,
  rewardInpercent,
  betChoice,
  betTime,
  betTitle,
  odds,
  betAmount,
  poolSide,
}: MyBetsStatsProps) => {
  return (
    <Flex
      direction={['column', 'column', 'row', 'column']}
      mt={['10px', '20px', '40px', '30px']}
      width={['100%', '100%', '100%', '550px']}
      height={['100%', '100%', '100%', '210px']}
      border={['1px solid #E18933', '1px solid #E18933', '1px solid #E18933']}
      borderRadius={['5px', '5px', '5px']}
      p={['10px', '20px', '30px', '20px']}
    >
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Flex
          gap={'18px'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box
            width={['12px', '12px', '12px']}
            height={['12px', '12px', '12px']}
            background={
              status === 'Pending'
                ? '#E18933'
                : status === 'Won'
                ? '#19A2A5'
                : '#FC541C'
            }
            borderRadius={['50%', '50%', '50%']}
          />
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            color={'#FFFFFF'}
            textTransform={'capitalize'}
          >
            {/* Pending */}
            {status}
          </Text>
        </Flex>
        <Flex>
          <Button
            border={'1px solid '}
            borderColor={
              status === 'Pending'
                ? '#E18933'
                : status === 'Won'
                ? '#19A2A5'
                : '#FC541C'
            }
            background={'unset'}
            _hover={{
              background: 'unset',
            }}
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={700}
            fontSize={['16px', '16px', '16px', '18px']}
            lineHeight={'25px'}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            {`Return : `}
            <Text
              as={'span'}
              color={
                status === 'Pending'
                  ? '#E18933'
                  : status === 'Won'
                  ? '#19A2A5'
                  : '#FC541C'
              }
            >
              &nbsp;
              {/* {' 0 FTM (0%)'} */}
              {returnReward} {chainName} ({rewardInpercent}%)
            </Text>
          </Button>
        </Flex>
        <Flex
          justifyContent={'center'}
          //   alignItems={'center'}
          direction={'column'}
        >
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            color={'#FFFFFF'}
            textTransform={'capitalize'}
          >
            Bet Choice
            {/* {betChoice} */}
          </Text>
          <Image
            src={
              betChoice === 'Yes'
                ? '/images/svgs/bets/yes.svg'
                : '/images/svgs/bets/no.svg'
            }
            width={['12px', '12px', '66px']}
            height={['12px', '12px', '66px']}
          />
        </Flex>
      </Flex>
      <Flex
        gap={'5px'}
        justifyContent={'start'}
        alignItems={'start'}
        direction={'column'}
      >
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={'12px'}
          lineHeight={'16px'}
          color={
            status === 'Pending'
              ? '#E18933'
              : status === 'Won'
              ? '#19A2A5'
              : '#FC541C'
          }
          textTransform={'capitalize'}
        >
          {/* Wed 11 Nov - 12:10:00{' '} */}
          {betTime}
        </Text>
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={'20px'}
          lineHeight={'27px'}
          color={'#FFFFFF'}
          textTransform={'capitalize'}
        >
          {/* Will Atalanta win against sampdoria?{' '} */}
          {betTitle}
        </Text>
      </Flex>
      <Flex
        mt={['10px', '20px', '40px', '10px']}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={'15px'}
          lineHeight={'20px'}
          color={'#FFFFFF'}
          textTransform={'capitalize'}
        >
          Odd :
          <Text
            as={'span'}
            color={
              status === 'Pending'
                ? '#E18933'
                : status === 'Won'
                ? '#19A2A5'
                : '#FC541C'
            }
          >
            &nbsp;
            {/* {'15 %'} */}
            {odds}%
          </Text>
        </Text>
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={'15px'}
          lineHeight={'20px'}
          color={'#FFFFFF'}
          textTransform={'capitalize'}
        >
          Bet Amount :
          <Text
            as={'span'}
            color={
              status === 'Pending'
                ? '#E18933'
                : status === 'Won'
                ? '#19A2A5'
                : '#FC541C'
            }
          >
            &nbsp;
            {/* {'10 FTM'} */}
            {betAmount} {chainName}
          </Text>
        </Text>
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={'15px'}
          lineHeight={'20px'}
          color={'#FFFFFF'}
          textTransform={'capitalize'}
        >
          % of side pool:
          <Text
            as={'span'}
            color={
              status === 'Pending'
                ? '#E18933'
                : status === 'Won'
                ? '#19A2A5'
                : '#FC541C'
            }
          >
            &nbsp;
            {/* {'10% '} */}
            {poolSide}%
          </Text>
        </Text>
      </Flex>
    </Flex>
  )
}

export default MyBetsStats
