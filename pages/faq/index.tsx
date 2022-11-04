import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import '@fontsource/nunito'
import { AddIcon, CloseIcon, PlusSquareIcon } from '@chakra-ui/icons'

const FAQS = () => {
  const [activeOne, setActiveOne] = useState(false)
  const [activeTwo, setActiveTwo] = useState(false)
  const [activeThree, setActiveThree] = useState(false)
  const [activeFour, setActiveFour] = useState(false)
  const [activeFive, setActiveFive] = useState(false)

  const toggleAccordionOne = () => {
    setActiveOne(!activeOne)
  }
  const toggleAccordionTwo = () => {
    setActiveTwo(!activeTwo)
  }
  const toggleAccordionThree = () => {
    setActiveThree(!activeThree)
  }
  const toggleAccordionFour = () => {
    setActiveFour(!activeFour)
  }
  const toggleAccordionFive = () => {
    setActiveFive(!activeFive)
  }
  return (
    <Flex
      height={['auto', 'auto', 'auto', '100vh']}
      direction={'column'}
      justifyContent={'start'}
      alignItems={'center'}
      gap={'20px'}
      mb={'30px'}
    >
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Heading fontSize={'30px'} mt={'20px'}>
          Frequently Asked Questions
        </Heading>
      </Flex>
      <Flex
        mt={'20px'}
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'30px'}
      >
        <Flex
          width={['370px', '350px', '650px', '650px']}
          height={activeOne ? 'auto' : '50px'}
          borderRadius={'5px'}
          border={'1px solid #FFFFFF'}
          justifyContent={'center'}
          alignItems={'center'}
          direction={'column'}
          gap={'20px'}
          px={['0px', '20px', '40px', '40px']}
          onClick={toggleAccordionOne}
          cursor={'pointer'}
        >
          <Flex
            width={['340px', '300px', '500px', '500px']}
            onClick={toggleAccordionOne}
            justifyContent={'space-between'}
            alignItems={'center'}
            // gap={'40px'}
          >
            <Text
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={'700'}
              fontSize={['14px', '14px', '22px', '22px']}
              lineHeight={'30px'}
              color={'white'}
              mt={activeOne ? '15px' : '0px'}
            >
              What is UltiBets?
            </Text>
            {activeOne ? (
              <CloseIcon cursor={'pointer'} fontSize={'15px'} />
            ) : (
              <AddIcon cursor={'pointer'} fontSize={'15px'} />
            )}
          </Flex>
          {activeOne && (
            <Flex direction={'column'} gap={'10px'} mb={'20px'}>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                UltiBets is the first Cryptocurrency Multichain Betting
                Platform, operating on 4 Blockchains:
              </Text>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                <ul
                  style={{
                    listStyleType: 'none',
                    paddingLeft: '0px',
                    width: '100%',
                  }}
                >
                  <li> - Avalanche</li>
                  <li> - Binance Smart Chain</li>
                  <li> - Polygon</li>
                  <li> - Fantom</li>
                </ul>
              </Text>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                UltiBets offers Binary Bets (Yes / No, Team A / Team B) over 11
                Categories:
              </Text>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                <ul
                  style={{
                    listStyleType: 'none',
                    paddingLeft: '0px',
                    width: '100%',
                  }}
                >
                  <li> - Soccer</li>
                  <li> - Basketball</li>
                  <li> - Us FootBall</li>
                  <li> - Tennis</li>
                  <li> - Combat Sports</li>
                  <li>- Motorsports</li>
                  <li>- Crypto</li>
                  <li>- Politics</li>
                  <li>- Stocks</li>
                  <li>- Movies & TV Shows</li>
                  <li>- Music</li>
                </ul>
              </Text>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                We also added an amazing touch of GameFi with a weekly
                tournament called Squid Bet Competition
              </Text>
            </Flex>
          )}
        </Flex>
        <Flex
          width={['370px', '350px', '650px', '650px']}
          height={activeTwo ? 'auto' : '50px'}
          borderRadius={'5px'}
          border={'1px solid #FFFFFF'}
          justifyContent={'center'}
          alignItems={'center'}
          direction={'column'}
          gap={'20px'}
          px={['0px', '20px', '40px', '40px']}
          onClick={toggleAccordionTwo}
          cursor={'pointer'}
        >
          <Flex
            width={['340px', '300px', '500px', '500px']}
            onClick={toggleAccordionTwo}
            justifyContent={'space-between'}
            alignItems={'center'}
            // gap={'40px'}
          >
            <Text
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={'700'}
              fontSize={['14px', '14px', '22px', '22px']}
              lineHeight={'30px'}
              color={'white'}
              mt={activeTwo ? '15px' : '0px'}
            >
              {/* 2) What is Squid Bet Competition (SBC)?

SBC is a weekly win it all tournament with 500 participants over 5 rounds (1 round per day) where the losing side is eliminated after each round (Binary Bets will also be used for SBC).

After the last round, if one player is remaining, he/she will win the entire prize pool. If more than one player is still alive, an on-chain vote will take place to either split equally the prize pool between the remaining participants or let the fate decide and use the Chainlink VRF feature to generate a true random number to pick only one winner among the last players!  */}
              What is Squid Bet Competition (SBC)?{' '}
            </Text>
            {activeTwo ? (
              <CloseIcon cursor={'pointer'} fontSize={'15px'} />
            ) : (
              <AddIcon cursor={'pointer'} fontSize={'15px'} />
            )}
          </Flex>
          {activeTwo && (
            <Flex direction={'column'} gap={'10px'} mb={'20px'}>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                SBC is a weekly win it all tournament with 500 participants over
                5 rounds (1 round per day) where the losing side is eliminated
                after each round (Binary Bets will also be used for SBC).
              </Text>
              <Text
                mt={'20px'}
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                After the last round, if one player is remaining, he/she will
                win the entire prize pool. If more than one player is still
                alive, an on-chain vote will take place to either split equally
                the prize pool between the remaining participants or let the
                fate decide and use the Chainlink VRF feature to generate a true
                random number to pick only one winner among the last players!
              </Text>
            </Flex>
          )}
        </Flex>
        <Flex
          width={['370px', '350px', '650px', '650px']}
          height={activeThree ? 'auto' : '50px'}
          borderRadius={'5px'}
          border={'1px solid #FFFFFF'}
          justifyContent={'center'}
          alignItems={'center'}
          direction={'column'}
          gap={'20px'}
          px={['0px', '20px', '40px', '40px']}
          onClick={toggleAccordionThree}
          cursor={'pointer'}
        >
          <Flex
            width={['340px', '300px', '500px', '500px']}
            onClick={toggleAccordionThree}
            justifyContent={'space-between'}
            alignItems={'center'}
            // gap={'40px'}
          >
            <Text
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={'700'}
              fontSize={['14px', '14px', '22px', '22px']}
              lineHeight={'30px'}
              color={'white'}
              mt={activeThree ? '15px' : '0px'}
            >
              How do you place a bet on UltiBets?{' '}
            </Text>
            {activeThree ? (
              <CloseIcon cursor={'pointer'} fontSize={'15px'} />
            ) : (
              <AddIcon cursor={'pointer'} fontSize={'15px'} />
            )}
          </Flex>
          {activeThree && (
            <Flex m={'25px'} direction={'column'} gap={'10px'} mb={'20px'}>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                {`
                A) First you must own a cryptocurrency wallet to connect and
                place your bets onto the UltiBets platform (Metamask is the best
                option)`}
              </Text>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                {`
                B) First you must own a cryptocurrency wallet to connect and
                place your bets onto the UltiBets platform (Metamask is the best
                option)`}
              </Text>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                {`
                 C) Configure your wallet to be connected onto one of the 4
                 blockchains mentioned above (Avalanche / Binance Chain / Fantom
                 / Polygon).`}
              </Text>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                {`
             D) Purchase any native chain token (AVAX / BNB / FTM / MATIC) or
             UltiBets only official Token UTBETS.`}
              </Text>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                {`
              E) Click on the "Bets" tab menu or any icon on the left sidebar
              to select you desired category and event/match by clicking on
              "Bet Now".`}
              </Text>

              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                {`
             F) Pick a side (Yes / No, Team A / Team B) by clicking on the
             corresponding button, then click on the "Bet Now" button, a
             popup will appear.`}
              </Text>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                {`
            G) Select the betting currency desired (native chain token
              you're connected on or UTBETS Tokens for the chain you're
              connected on) and enter a betting amount then click on the
              "Place Bet" button, a Metamask popup will appear, simply confirm
              the transaction. `}
              </Text>

              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                {`
               H) Once the transaction is confirmed, the popup will update
               accordingly once done.
             `}
              </Text>

              <Text mt={`20px`}>
                {' '}
                Congratulations! You just place your first bet on UltiBets!
              </Text>
            </Flex>
          )}
        </Flex>

        {/* 4) How to purchase UTBETS Tokens ($UTBETS)?
You have 2 options:
a) Go over https://app.sushi.com/swap and swap any compatible token (AVAX / BNB / FTM / MATIC / USDC / USDT / DAI) for UTBETS Tokens.
b) Visit the UtBets section of the website, on this page you will find 3 submenus: Token Information | Buy $UTBETS | Bridge $UTBETS, simply click on the "Buy $UTBETS" submenu and swap any compatible token (same list) for UTBETS Tokens.
5) How to bridge my UTBETS Tokens?
Visit the UtBets section of the website, on this page you will find 3 submenus: Token Information | Buy $UTBETS | Bridge $UTBETS, simply click on the "Bridge $UTBETS" submenu and bridge your UTBETS Tokens between the four compatible blockchain (Avalanche / Binance Chain / Fantom / Polygon).  */}

        <Flex
          width={['370px', '350px', '650px', '650px']}
          height={activeFour ? 'auto' : '50px'}
          borderRadius={'5px'}
          border={'1px solid #FFFFFF'}
          justifyContent={'center'}
          alignItems={'center'}
          direction={'column'}
          gap={'20px'}
          px={['0px', '20px', '40px', '40px']}
          // onClick={toggleAccordionFour}
          cursor={'pointer'}
        >
          <Flex
            width={['340px', '300px', '500px', '500px']}
            onClick={toggleAccordionFour}
            justifyContent={'space-between'}
            alignItems={'center'}
            // gap={'40px'}
          >
            <Text
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={'700'}
              fontSize={['14px', '14px', '22px', '22px']}
              lineHeight={'30px'}
              color={'white'}
              mt={activeFour ? '15px' : '0px'}
            >
              How to purchase UTBETS Tokens ($UTBETS){' '}
            </Text>
            {activeFour ? (
              <CloseIcon cursor={'pointer'} fontSize={'15px'} />
            ) : (
              <AddIcon cursor={'pointer'} fontSize={'15px'} />
            )}
          </Flex>
          {activeFour && (
            <Flex direction={'column'} gap={'20px'} mb={`20px`}>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                {`A) Go over`}
                <Text as={'span'} color={'#FFD700'}>
                  {' '}
                  <a
                    href="https://app.sushi.com/swap"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://app.sushi.com/swap
                  </a>
                </Text>
                {`
                 and swap any compatible token (AVAX / BNB / FTM / MATIC / USDC /
                USDT / DAI) for UTBETS Tokens.
              `}
              </Text>
              <Text
                width={['300px', '300px', '500px', '500px']}
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'18px'}
                lineHeight={'25px'}
                color={'#BDBDBD'}
              >
                {`  B) Visit the UtBets section of the website, on this page you
                will find 3 submenus: Token Information | Buy $UTBETS | Bridge
                $UTBETS, simply click on the "Buy $UTBETS" submenu and swap any
                compatible token (same list) for UTBETS Tokens.`}
              </Text>
            </Flex>
          )}
        </Flex>
        <Flex
          width={['370px', '350px', '650px', '650px']}
          height={activeFive ? 'auto' : '50px'}
          borderRadius={'5px'}
          border={'1px solid #FFFFFF'}
          justifyContent={'center'}
          alignItems={'center'}
          direction={'column'}
          gap={'20px'}
          px={['0px', '20px', '40px', '40px']}
          onClick={toggleAccordionFive}
          cursor={'pointer'}
        >
          <Flex
            width={['340px', '300px', '500px', '500px']}
            onClick={toggleAccordionFive}
            justifyContent={'space-between'}
            alignItems={'center'}
            // gap={'40px'}
          >
            <Text
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={'700'}
              fontSize={['14px', '14px', '22px', '22px']}
              lineHeight={'30px'}
              color={'white'}
              mt={activeFive ? '15px' : '0px'}
            >
              How to bridge my UTBETS Tokens?{' '}
            </Text>
            {activeFive ? (
              <CloseIcon cursor={'pointer'} fontSize={'15px'} />
            ) : (
              <AddIcon cursor={'pointer'} fontSize={'15px'} />
            )}
          </Flex>
          {activeFive && (
            <Text
              mb={`20px`}
              width={['300px', '300px', '500px', '500px']}
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={'500'}
              fontSize={'18px'}
              lineHeight={'25px'}
              color={'#BDBDBD'}
            >
              {`  Visit the UtBets section of the website, on this page you will
              find 3 submenus: Token Information | Buy $UTBETS | Bridge $UTBETS,
              simply click on the "Bridge $UTBETS" submenu and bridge your
              UTBETS Tokens between the four compatible blockchain (Avalanche /
              Binance Chain / Fantom / Polygon).`}
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default FAQS
