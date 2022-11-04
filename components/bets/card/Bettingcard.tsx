import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '@fontsource/nunito'
import { useRouter } from 'next/router'

export type BettingcardProps = {
  id?: string
  series: string
  team1: string
  team2: string
  bettingType: string
  bettingLogo: string
  bettingTime: string
  bettingDate: string
  bettingDeadline: string
  bettingVolume: string
  results?: string
}
const Bettingcard = ({
  id,
  series,
  team1,
  team2,
  bettingLogo,
  bettingType,
  bettingTime,
  bettingDate,
  bettingDeadline,
  bettingVolume,
}: BettingcardProps) => {
  const router = useRouter()

  useEffect(() => {
    console.log('id', id)
  }, [id])

  return (
    <Flex
      position={'relative'}
      data-sal-delay="500"
      data-sal={'slide-up'}
      data-sal-duration="800"
      width={'250px'}
      height={'185px'}
      background={'url("images/svgs/card/svgviewer-output.svg")'}
      borderRadius={'5px'}
      boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.25)'}
      direction={'column'}
      justifyContent={'space-between'}
      _hover={{
        boxShadow: '0px 0px 10px rgba(255, 145, 0, 0.25)',
      }}
      cursor={'pointer'}
      onClick={() => console.log(router.push(`bets/detailed-bets/${id}`))}
      p={'10px'}
      // margin={'10px'}
    >
      {/* <Box
        // height: 176.85499572753906px;
        // width: 217px;
        // left: 141px;
        // top: -86.3900146484375px;
        // border-radius: 0px;
        // background: #ff9100;

      //   height={'176px'}
      //   width={'217px'}
      //   left={'341px'}
      //   top={'286px'}
      //   background={
      //     'radial-gradient(51.19% 51.19% at 58.33% 42.75%, rgba(225, 136, 51, 0.4) 0%, rgba(255, 177, 28, 0.4) 0.01%, rgba(225, 136, 51, 0) 100%)'
      //   }
      // ></Box> */}
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Flex direction={'column'}>
          <Flex alignItems={'center'} gap={'5px'}>
            <Image
              width={'21px'}
              height={'21px'}
              src={bettingLogo}
              alt={bettingType}
            />
            <Text
              fontFamily={'Nunito'}
              fontSize={'18px'}
              fontWeight={'700'}
              lineHeight={'25px'}
              letterSpacing={'0em'}
              textAlign={'left'}
            >
              {/* Series A */}
              {series}
            </Text>
          </Flex>
          <Text
            fontFamily={'Nunito'}
            fontSize={'17px'}
            fontWeight={'700'}
            lineHeight={'23px'}
            letterSpacing={'0em'}
            textAlign={'left'}
          >
            {/* Atalanta - Sampdoria */}
            {team1} - {team2}
          </Text>
        </Flex>
        <Flex direction={'column'}>
          <Text
            fontFamily={'Nunito'}
            fontSize={'12px'}
            fontWeight={'700'}
            lineHeight={'16px'}
            letterSpacing={'0em'}
            textAlign={'left'}
          >
            {/* 20:00 UTC */}
            {bettingTime} UTC
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontSize={'12px'}
            fontWeight={'700'}
            lineHeight={'16px'}
            letterSpacing={'0em'}
            textAlign={'right'}
          >
            {/* 08.03.22 */}
            {bettingDate}
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <Flex direction={'column'}>
          <Text
            fontFamily={'Nunito'}
            fontSize={'12px'}
            fontWeight={'700'}
            lineHeight={'16px'}
            letterSpacing={'0em'}
            textAlign={'left'}
          >
            Betting Deadline
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontSize={'17px'}
            fontWeight={'700'}
            lineHeight={'23px'}
            letterSpacing={'0em'}
            textAlign={'left'}
            // color={bettingDeadline == 'Expired' ? 'pink' : '#FF9100'}
            color={bettingDeadline === 'expired' ? 'red' : '#8DE104'}
            textTransform={'capitalize'}
          >
            {/* Expired */}
            {bettingDeadline}
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent={'space-between'}>
        <Flex direction={'column'}>
          <Text
            fontFamily={'Nunito'}
            fontSize={'12px'}
            fontWeight={'700'}
            lineHeight={'16px'}
            letterSpacing={'0em'}
            textAlign={'left'}
          >
            Bets volume:
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontSize={'17px'}
            fontWeight={'700'}
            lineHeight={'23px'}
            letterSpacing={'0em'}
            textAlign={'left'}
            color={'#8DE104'}
          >
            {/* 171 FTM */}
            {bettingVolume} FTM
          </Text>
        </Flex>
        <Button
          height={'36px'}
          width={'95px'}
          background={'unset'}
          borderRadius={'34px'}
          border={'1px solid #FC541C'}
          _hover={{
            background: '#FC541C',
          }}
        >
          Bet Now
        </Button>
      </Flex>
    </Flex>
  )
}

export default Bettingcard
