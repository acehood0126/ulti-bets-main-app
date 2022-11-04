import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '@fontsource/inter'
import '@fontsource/nunito'
import { useRouter } from 'next/router'
import SquidCurosel from '../../../components/Container/SquidCurosel'
import Timeline from '../../../components/squid/Timeline'
import Welcome from '../../../components/squid/Welcome'
import MyBetsComponent from '../../../components/mybets/MyBetsComponent'

const SquidCompatition = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  const { isOpen, onOpen, onClose } = useDisclosure()

  const players = Array.from({ length: 500 }, (_, i) => ({
    name: `Player ${i + 1}`,
    score: 100,
    // only 5 players are active
    active: i < 5,
  }))

  useEffect(() => {
    document.title = 'Squid Competitions | UltiBets'
  }, [])

  return (
    <>
      {/* <SquidCurosel /> */}
      <Box ml={['20px', '20px', '120px', '120px']} mt={'30px'}>
        <Flex direction={'column'}>
          <Box>
            <MyBetsComponent />
            <Box
            // display={['none', 'none', 'none', 'block']}
            >
              <Timeline />
            </Box>
            <Welcome title={'Welcome to Squid Bet #1'} />

            <Flex mt={'25px'} direction={'column'} gap={'25px'}>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'20px'}
                lineHeight={'27px'}
                color={'#E18933'}
                textTransform={'capitalize'}
                width={['100%', '100%', '100%', '592px']}
              >
                The betting competition where only 1 player will win-it-all !
                base prize pool is 7000 FTM MINIMUM*!{' '}
              </Text>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={['13px', '13px', '13px', '17px']}
                lineHeight={['17px', '17px', '17px', '23px']}
              >
                *(500 Players x 10 FTM) / 10% organisator fee + 5 fTM for the
                first Bet)
              </Text>
            </Flex>
          </Box>

          <Box width={'850px'} display={['none', 'none', 'blcok', 'block']}>
            {' '}
            <Grid
              templateColumns={'repeat(50, 1fr)'}
              templateRows={'repeat(10, 1fr)'}
            >
              {players.map((dot, index) => (
                <Box
                  key={index}
                  width={'14px'}
                  height={'14px'}
                  background={dot.active ? '#FF9100' : '#3D3D3D'}
                  borderRadius={'50%'}
                  margin={'5px'}
                />
              ))}
            </Grid>
          </Box>

          <Box display={['none', 'none', 'block', 'block']}>
            <Flex
              mt={'10px'}
              alignItems={'center'}
              justifyContent={'space-between'}
              width={'650px'}
            >
              <Box>
                <Text
                  fontFamily={'Nunito'}
                  fontWeight={'700'}
                  fontSize={'13px'}
                  lineHeight={'15px'}
                  color={'white'}
                  textTransform={'capitalize'}
                >
                  {' '}
                  <Text as={'span'} color={'#FF9100'}>
                    {'4 '}
                  </Text>
                  Player(s) Registered for the Squid Bet Competition
                </Text>
              </Box>
              <Flex justifyContent={'center'} alignItems={'center'}>
                <Box
                  width={'14px'}
                  height={'14px'}
                  background={'#FF9100'}
                  borderRadius={'50%'}
                  margin={'6px'}
                />
                <Text
                  fontFamily={'Nunito'}
                  fontWeight={'700'}
                  fontSize={'13px'}
                  lineHeight={'15px'}
                  color={'white'}
                  textTransform={'capitalize'}
                >
                  Registered Players
                </Text>
              </Flex>
              <Flex justifyContent={'center'} alignItems={'center'}>
                <Box
                  width={'14px'}
                  height={'14px'}
                  background={'#3D3D3D'}
                  borderRadius={'50%'}
                  margin={'6px'}
                />
                <Text
                  fontFamily={'Nunito'}
                  fontWeight={'700'}
                  fontSize={'13px'}
                  lineHeight={'15px'}
                  color={'white'}
                  textTransform={'capitalize'}
                >
                  Remaining spots
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            mx={'10px'}
            mt={'20px'}
            display={['block', 'block', 'none', 'none']}
            border={'1px solid #FFFFFF'}
            borderRadius={'10px'}
            width={'auto'}
            height={'100px'}
          >
            <Flex justifyContent={'center'} alignItems={'center'} gap={'30px'}>
              <Flex direction={'column'}>
                <Text
                  fontFamily={'Nunito'}
                  fontWeight={'700'}
                  fontSize={'41px'}
                  lineHeight={'56px'}
                  color={'#E18933'}
                  textTransform={'capitalize'}
                >
                  {players.filter((player) => player.active === true).length -
                    1}
                </Text>
                <Text
                  fontFamily={'Nunito'}
                  fontWeight={'700'}
                  fontSize={'11px'}
                  lineHeight={'15px'}
                  // color={'#E18933'}
                  textTransform={'capitalize'}
                >
                  Player(s) Registered{' '}
                </Text>
              </Flex>
              <Flex direction={'column'}>
                <Text
                  fontFamily={'Nunito'}
                  fontWeight={'700'}
                  fontSize={'41px'}
                  lineHeight={'56px'}
                  color={'#E18933'}
                  textTransform={'capitalize'}
                >
                  {players.filter((player) => player.active === false).length +
                    1}
                </Text>
                <Text
                  fontFamily={'Nunito'}
                  fontWeight={'700'}
                  fontSize={'11px'}
                  lineHeight={'15px'}
                  // color={'#E18933'}
                  textTransform={'capitalize'}
                >
                  Spots remains
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            mt={['20px', '20px', '20px', '60px']}
            width={['auto', 'auto', '600px', '600px']}
            height={'280px'}
            border={[
              'none',
              '1px solid #FFFFFF',
              '1px solid #FFFFFF',
              '1px solid #FFFFFF',
            ]}
            borderRadius={'7px'}
          >
            <Flex
              justifyContent={'center'}
              alignItems={'start'}
              direction={'column'}
              pl={['0px', '0px', '20px', '30px']}
              pt={'30px'}
            >
              <Text
                fontWeight={'700'}
                fontSize={'27px'}
                lineHeight={'33px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Total Current Prize Pool: 40 FTM
              </Text>
            </Flex>
            <Flex
              justifyContent={'center'}
              alignItems={'start'}
              direction={'column'}
              pl={['0px', '0px', '20px', '30px']}
              pt={'20px'}
            >
              <Text
                display={['none', 'none', 'none', 'block']}
                // fontFamily={'Inter'}
                fontWeight={'700'}
                fontSize={'20px'}
                lineHeight={'27px'}
                color={'#E18933'}
                textTransform={'capitalize'}
              >
                Entry Fee: 10 FTM** &nbsp; &nbsp; &nbsp; Betting Amount / Round:
                5 FTM
              </Text>
              <Text
                display={['flex', 'flex', 'flex', 'none']}
                // fontFamily={'Inter'}
                fontWeight={'700'}
                fontSize={'20px'}
                lineHeight={'27px'}
                color={'#E18933'}
                textTransform={'capitalize'}
              >
                Entry Fee: 10 FTM**
              </Text>
              <Text
                display={['flex', 'flex', 'flex', 'none']}
                // fontFamily={'Inter'}
                fontWeight={'700'}
                fontSize={'20px'}
                lineHeight={'27px'}
                color={'#E18933'}
                textTransform={'capitalize'}
              >
                Betting Amount / Round: 5 FTM
              </Text>
            </Flex>
            <Flex
              justifyContent={'center'}
              alignItems={'start'}
              direction={'column'}
              pl={['0px', '0px', '20px', '30px']}
              pt={'20px'}
            >
              <Text
                // fontFamily={'Inter'}
                fontWeight={'700'}
                width={['auto', 'auto', 'auto', '540px']}
                fontSize={'13px'}
                lineHeight={'18px'}
                color={'white'}
                textTransform={'capitalize'}
                px={['10px', '0px', '0px', '0px']}
              >
                **(10% of the total Entry Fee amount will be collected as the
                Organisator Fee and sent to the BlockBet Treasury. No other fee
                will be collected afterwards).{' '}
              </Text>
            </Flex>
            <Flex pl={['0px', '0px', '20px', '30px']} mt={'40px'} gap={'30px'}>
              <Button
                height={'36px'}
                width={'152px'}
                background={'unset'}
                borderRadius={'34px'}
                border={'1px solid #FC541C'}
                _hover={{
                  background: '#FC541C',
                }}
                onClick={onOpen}
              >
                Register Now
              </Button>
              <Button
                height={'36px'}
                width={'92px'}
                background={'unset'}
                borderRadius={'34px'}
                border={'1px solid #FC541C'}
                _hover={{
                  background: '#FC541C',
                }}
              >
                View
              </Button>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent maxW="550px" maxHeight={'700px'}>
                <ModalHeader>Confirm</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box>
                    <Flex>
                      <Flex justifyContent={'center'} alignItems={'start'}>
                        <Text
                          fontFamily={'Inter'}
                          fontWeight={'700'}
                          fontSize={'27px'}
                          lineHeight={'33px'}
                          color={'white'}
                          textTransform={'capitalize'}
                        >
                          Squid Bet rules
                        </Text>
                        <Box
                          ml={'10px'}
                          width={'39px'}
                          height={'39px'}
                          background={
                            "url('/images/svgs/slider/squid-icon.svg')"
                          }
                        ></Box>
                      </Flex>
                    </Flex>
                    <Flex
                      justifyContent={'center'}
                      alignItems={'start'}
                      direction={'column'}
                      gap={'20px'}
                    >
                      <Flex mt={'30px'}>
                        <Text
                          fontFamily={'Inter'}
                          fontWeight={'700'}
                          fontSize={'13px'}
                          lineHeight={'18px'}
                        >
                          I. 500 Players will compete during 5 rounds over 5
                          days (1 round per day).
                        </Text>
                      </Flex>
                      <Flex>
                        <Text
                          fontFamily={'Inter'}
                          fontWeight={'700'}
                          fontSize={'13px'}
                          lineHeight={'18px'}
                        >
                          II. Each Player can only bet once per round.
                          <Text>
                            At the end of each bet, the losing side is
                            eliminated.
                          </Text>{' '}
                        </Text>
                      </Flex>
                      <Flex>
                        <Text
                          fontFamily={'Inter'}
                          fontWeight={'700'}
                          fontSize={'13px'}
                          lineHeight={'18px'}
                        >
                          III. Entry Fee* + every bets from every Players will
                          be placed in the Prize Pool.
                          <Text fontSize={'10px'}>
                            *10% of the Total Entry Fee will be collected as the
                            Organisator Fee and sent the the UltiBets Treasury
                          </Text>{' '}
                        </Text>
                      </Flex>
                      <Flex>
                        <Text
                          fontFamily={'Inter'}
                          fontWeight={'700'}
                          fontSize={'13px'}
                          lineHeight={'18px'}
                        >
                          {`IV. If, for any reasons, you can't or don't have
                            enough funds to place a bet before the round deadline,
                            you will be eliminated.`}
                        </Text>
                      </Flex>
                      <Flex>
                        <Text
                          fontFamily={'Inter'}
                          fontWeight={'700'}
                          fontSize={'13px'}
                          lineHeight={'18px'}
                        >
                          {`IV. If, for any reasons, you can't or don't have
                            enough funds to place a bet before the round deadline,
                            you will be eliminated.`}
                        </Text>
                      </Flex>
                      <Flex>
                        <Text
                          fontFamily={'Inter'}
                          fontWeight={'700'}
                          fontSize={'13px'}
                          lineHeight={'18px'}
                        >
                          {`If there is still more than 1 Player standing, then a random player number** among the remaining Players will be picked, thereby designating the Winner of the Squid Bet Competition !
  `}
                          <Text fontSize={'11px'}>
                            {` **The Squid Bet smart contract has Chainlink VRF
                              (Verifiable Random Function) implemented to assure a
                              fair result. *`}
                          </Text>{' '}
                        </Text>
                      </Flex>
                    </Flex>
                    {
                      // As a reward, for any round successfully passed, a Player will receive a unique Squid Bet NFT !
                      // As the number of eliminated Players won't be the same for any rounds, this will create unique Squid Bet NFT Collections with their own scarcity based on the remaining Players after each round.
                      // As you progress further down the end of the game, the rarity will increase as the bet difficulty will arise after each bet and fewer Players will remain after each round!
                    }
                    <Flex
                      mt={'20px'}
                      justifyContent={'center'}
                      alignItems={'start'}
                      direction={'column'}
                    >
                      <Text
                        fontFamily={'Inter'}
                        fontWeight={'700'}
                        fontSize={'13px'}
                        lineHeight={'18px'}
                        color={'#E18933'}
                      >
                        As a reward, for any round successfully passed, a Player
                        will receive a unique Squid Bet NFT !
                      </Text>
                      <Text
                        fontFamily={'Inter'}
                        fontWeight={'700'}
                        fontSize={'13px'}
                        lineHeight={'18px'}
                        color={'#E18933'}
                      >
                        {` As the number of eliminated Players won't be the same
                          for any rounds, this will create unique Squid Bet NFT
                          Collections with their own scarcity based on the
                          remaining Players after each round.`}
                      </Text>
                      <Text
                        fontFamily={'Inter'}
                        fontWeight={'700'}
                        fontSize={'13px'}
                        lineHeight={'18px'}
                        color={'#E18933'}
                      >
                        {` 
                             As you progress further down the end of the game, the rarity will increase as the bet difficulty will arise after each bet and fewer Players will remain after each round!
                              `}
                      </Text>
                    </Flex>
                    <Flex justifyContent={'center'} alignItems={'start'}>
                      <Button
                        mb={'30px'}
                        height={'36px'}
                        width={'160px'}
                        background={'unset'}
                        borderRadius={'34px'}
                        border={'1px solid #FC541C'}
                        _hover={{
                          background: '#FC541C',
                        }}
                        onClick={() =>
                          router.push('/squid-competition/one/round-one')
                        }
                      >
                        Read & Accept
                      </Button>
                    </Flex>
                  </Box>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default SquidCompatition
