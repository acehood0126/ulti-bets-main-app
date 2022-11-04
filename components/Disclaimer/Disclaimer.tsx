import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import '@fontsource/nunito'
import { useRouter } from 'next/router'

const Disclaimer = () => {
  // set localStorage to true when user clicks on the checkbox
  const handleCheckbox = () => {
    localStorage.setItem('disclaimer', 'false')
  }

  const router = useRouter()
  //Checkbox State
  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <Flex direction={'column'}>
      <Flex justifyContent={'start'} alignItems={'center'} direction={'column'}>
        <Flex m={'30px'}>
          <Heading>Disclaimer</Heading>
        </Flex>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          direction={'column'}
          gap={'20px'}
        >
          <Text
            width={['330px', 'auto', 'auto', '640px']}
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            textAlign={'justify'}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            {`   I hereby that I'm not accessing the UltiBets Website ("Main App") or
            any UltiBets Platform/Ecosystem/Website from a sanctioned or banned
            country due to regulations`}
            <Text as={'span'} color={'#E18933'}>
              {`    (Afghanistan, Belarus, Central African Republic, Democratic
              Republic of China, Cuba, France, Haiti, Republic of Iran, Italy,
              Libya, Mali, Myanmar, North Korea, Federation of Russia, Somalia,
              Syria, United Kingdom, United States of America and all its
              territories, Yemen, Zimbabwe).
          `}
            </Text>
          </Text>
          <Text
            width={['330px', 'auto', 'auto', '640px']}
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            textAlign={'justify'}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            {`   I hereby that I'm over 18 years old and do not have any gambling addictions in order to access the UltiBets Website ("Main App") or any UltiBets Platform/Ecosystem/Website.
        `}
          </Text>
          <Text
            width={['330px', 'auto', 'auto', '640px']}
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            textAlign={'justify'}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            {` I understand and accept the inherent risks of betting and accept that I should never spend more than I can afford to lose. `}
          </Text>
          <Text
            width={['330px', 'auto', 'auto', '640px']}
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            textAlign={'justify'}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            {`I understand and accept the terms and conditions of Binary Bets format (Yes/No, Team A/B etc..) and its outcomes on the UltiBets Platform.`}
          </Text>
          <Text
            width={['330px', 'auto', 'auto', '640px']}
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            textAlign={'justify'}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            {`I understand and accept the terms and conditions of the Squid Bet Competitions ("SBC") and its outcomes on the UltiBets Platform. `}
          </Text>
          <Text
            width={['330px', 'auto', 'auto', '640px']}
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            textAlign={'justify'}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            {` I understand and accept that UltiBets and its Team cannot be held responsible nor accountable for any delays/cancellations/bugs/hacks/exploits happening on real-life for events or on the UltiBets website/smart contracts. `}
          </Text>
          <Text
            width={['330px', 'auto', 'auto', '640px']}
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            textAlign={'justify'}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            {`I understand and accept the inherent latency of the blockchain technology and cannot held Ultibets and its Team responsible nor accountable for any problems concerning the bets placed in relation to these situations (failed bets after deadline, lack of gas funds to claim winnings/NFT's, swap/bridge errors etc...).`}
          </Text>
          <Text
            width={['330px', 'auto', 'auto', '640px']}
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            textAlign={'justify'}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            {`I understand and accept that the randomness of the VRF technology from ChainLink for the random solo winner during the last round of SBC cannot be guaranteed by UltiBets and as such cannot be held accountable nor responsible for the outcomes involving the VRF technology from ChainLink .  `}
          </Text>
          <Text
            width={['330px', 'auto', 'auto', '640px']}
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            textAlign={'justify'}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            {`I understand and accept the volatility of CryptoCurrencies as asset class and its global market, and thus cannot held Ultibets and its Team responsible nor accountable for any amount variation in Fiat Currencies (National denominated Currencies) of my CryptoCurrencies from the moment of placing a bet or accessing a SBC and its outcome later on a few minutes/hours/days/months after.`}
          </Text>
          <Text
            width={['330px', 'auto', 'auto', '640px']}
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            textAlign={'justify'}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            {`I understand and accept the volatility of CryptoCurrencies as asset class and its global market, and thus cannot held Ultibets and its Team responsible nor accountable for any price movement of the UTBETS Token on the market at any moments, as well as any amount variation in Fiat Currencies (National denominated Currencies) of my UTBETS Tokens from the moment of placing a bet or accessing a SBC and its outcome later on a few minutes/hours/days/months after.`}
          </Text>
          <Text
            width={['330px', 'auto', 'auto', '640px']}
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={'700'}
            fontSize={'12px'}
            lineHeight={'16px'}
            textAlign={'justify'}
            textTransform={'capitalize'}
            color={'#FFFFFF'}
          >
            {`I understand and accept that for any cancelled events/matchs/games due to real-life conditions, I will be reimbursed the totality of my betting amount minus the 2% fee kept by UltiBets. These fees will be used as designed and mentioned from the Whitepaper: split in half between the Buyback process of UTBETS Tokens and being integrating into the Treasury contracts for diverses operations/allocations (maintenance, marketing and legal fees plus team salaries).`}
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent={'center'} alignItems={'center'} mt={'20px'}>
        <Flex width={['330px', 'auto', 'auto', '640px']}>
          <form>
            <Checkbox
              size="lg"
              colorScheme="orange"
              onChange={(e) => setIsChecked(e.target.checked)}
            >
              I have read and accept the terms and conditions mentioned above.
            </Checkbox>{' '}
            <Flex>
              <Button
                isDisabled={!isChecked}
                mb={'30px'}
                mt={'30px'}
                height={'36px'}
                width={'160px'}
                background={'unset'}
                borderRadius={'34px'}
                border={'1px solid #FC541C'}
                _hover={{
                  background: '#FC541C',
                }}
                onClick={() => {
                  router.push('/')
                  handleCheckbox()
                }}
              >
                Read & Accept
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Disclaimer
