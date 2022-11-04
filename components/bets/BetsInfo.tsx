import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Progress,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  usePrefersReducedMotion,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import BettingTabContent from '../bets/BettingTabContent'

export type BetInfoProps = {
  betQue?: string
  series?: string
  accessRound?: string
  betAmount?: string
  currentRound?: string
  totalPlayers?: string
  chainName?: string
  claimNFT?: string
  currentSidepoolShare?: string
  FinalGainIfWon?: string
  currentExpectedGain?: string
}

const BetInfo = ({
  betQue,
  series,
  accessRound,
  betAmount,
  chainName,
  claimNFT,
  currentSidepoolShare,
  FinalGainIfWon,
  currentExpectedGain,
}: BetInfoProps) => {
  const router = useRouter()
  const [sizeYes, setSizeYes] = useState(false)
  const [sizeNo, setSizeNo] = useState(false)
  const [choice, setChoice] = React.useState('')
  const {
    isOpen: isOpenSecond,
    onOpen: onOpenSecond,
    onClose: onCloseSecond,
  } = useDisclosure()

  const {
    isOpen: isOpenThird,
    onOpen: onOpenThird,
    onClose: onCloseThird,
  } = useDisclosure()
  const scrl = useRef<any>()
  const [scrollX, setscrollX] = useState<number>(0) // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState<boolean>(false) // For detecting end of scrolling

  const slide = (shift: any) => {
    scrl.current.scrollLeft += shift
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true)
    } else {
      setscrolEnd(false)
    }
  }

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft)
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true)
    } else {
      setscrolEnd(false)
    }
  }

  // div {
  //   width: 200px;
  //   height: 200px;
  //   border-radius: 100px;
  //   background-color: #ccc;
  //   animation: glow 1s infinite alternate;
  // }

  // @keyframes glow {
  //   from {
  //     box-shadow: 0 0 10px -10px #aef4af;
  //   }
  //   to {
  //     box-shadow: 0 0 10px 10px #aef4af;
  //   }
  // }

  //   const glow = keyframes`
  //   from { box-shadow: 2 0 6px -3px yellow; }
  //   to { box-shadow: 0 0 6px 3px yellow; }
  // `

  // from {
  //   box-shadow: 0 0 5px -5px yellow;
  // }
  // to {
  //   box-shadow: 0 0 5px 5px yellow;
  // }

  // const prefersReducedMotion = usePrefersReducedMotion()

  // const animation = prefersReducedMotion
  //   ? undefined
  //   : `${glow} 1s infinite alternate`

  useEffect(() => {
    if (
      scrl.current &&
      scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    ) {
      setscrolEnd(true)
    } else {
      setscrolEnd(false)
    }
    return () => {}
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth])

  return (
    <>
      <Box mt={'30px'}>
        <Flex
          gap={'30px'}
          direction={['column-reverse', 'column', 'row', 'row']}
        >
          <Text
            fontFamily={'Inter'}
            fontStyle={'normal'}
            fontWeight={'extrabold'}
            fontSize={'28px'}
            lineHeight={'34px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            {/* Will PSG win against FC Nantes today? {choice} */}
            {betQue}{' '}
          </Text>
          <Flex
            gap={'5px'}
            alignItems={['start', 'center', 'center', 'center']}
            justifyContent={'start'}
          >
            <Image
              width={'25px'}
              height={'25px'}
              src="/images/svgs/sidebar/soccer-ball.svg"
              alt="soccer-ball"
            />
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'17px'}
              lineHeight={'23px'}
            >
              {/* Series B */}
              {series}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box
        ml={['0px', '0px', '-10px', '-20px']}
        width={['auto', 'auto', 'auto', '1200px']}
        position={'relative'}
        mb={'30px'}
      >
        <Progress
          display={['none', 'none', 'none', 'block']}
          mt={'20px'}
          position={'absolute'}
          width={'430px'}
          left={'780px'}
          // top={'335px'}
          value={50}
          colorScheme={'orange'}
          height={'4px'}
          border={'1px solid none'}
          bgColor={'#739AF0'}
        />

        <Flex gap={'30px'}>
          <Flex
            gap={'10px'}
            justifyContent={['center', 'start', 'center', 'space-between']}
            width={['auto', 'auto', 'auto', '1200px']}
            direction={['column', 'row', 'column', 'row']}
          >
            <Flex>
              <Flex
                onClick={() => {
                  setChoice('yes')
                  setSizeYes(true)
                  setSizeNo(false)
                }}
                cursor={'pointer'}
              >
                <Image
                  src="/images/svgs/bets/yes.svg"
                  alt="yes"
                  width={sizeYes ? '120px' : '100px'}
                  height={sizeYes ? '120px' : '100px'}
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                />
              </Flex>
              <Flex
                onClick={() => {
                  setChoice('no')
                  setSizeNo(true)
                  setSizeYes(false)
                }}
                cursor={'pointer'}
              >
                <Image
                  src="/images/svgs/bets/no.svg"
                  alt="no"
                  width={sizeNo ? '120px' : '100px'}
                  height={sizeNo ? '120px' : '100px'}
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                />
              </Flex>
            </Flex>

            <Progress
              display={['block', 'block', 'block', 'none']}
              mt={['0px', '0px', '0px', '20px']}
              width={'370px'}
              value={50}
              colorScheme={'orange'}
              height={'4px'}
              border={'1px solid none'}
              bgColor={'#739AF0'}
            />
            <Flex
              gap={'30px'}
              mt={'30px'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Flex direction={'column'} gap={'20px'}>
                <Text
                  fontFamily={'Nunito'}
                  fontWeight={'700'}
                  fontSize={'22px'}
                  lineHeight={'30px'}
                  color={'white'}
                  textTransform={'capitalize'}
                >
                  {"'Yes' side pool"}
                </Text>
                <Text
                  fontFamily={'Nunito'}
                  fontWeight={'700'}
                  fontSize={'22px'}
                  lineHeight={'30px'}
                  color={'white'}
                  textTransform={'capitalize'}
                  textAlign={'right'}
                >
                  {'55%'}
                </Text>
              </Flex>
              <Flex direction={'column'} gap={'20px'}>
                <Text
                  fontFamily={'Nunito'}
                  fontWeight={'700'}
                  fontSize={'22px'}
                  lineHeight={'30px'}
                  color={'white'}
                  textTransform={'capitalize'}
                >
                  {"'No' side pool"}
                </Text>
                <Text
                  fontFamily={'Nunito'}
                  fontWeight={'700'}
                  fontSize={'22px'}
                  lineHeight={'30px'}
                  color={'#739AF0'}
                  textTransform={'capitalize'}
                  textAlign={'right'}
                >
                  {'45%'}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Flex
          display={['flex', 'flex', 'flex', 'none']}
          position={'relative'}

          //   justifyContent={'space-between'}
        >
          {!scrolEnd && (
            <Box
              id="nextBtn"
              _hover={{
                cursor: 'pointer',
                transform: 'scale(1.2)',
              }}
              position={'absolute'}
              right={['20px', '0px', '20px', '0px']}
              mt={'33px'}
              zIndex={100}
              fontSize={'44px'}
              color={'#FFB11C'}
              onClick={() => slide(50)}
            >
              <Image
                width={'30px'}
                height={'30px'}
                borderRadius={'50%'}
                // animation={animation}
                src="/images/svgs/icon/right.svg"
                alt="right-arrow"
              />
              {/* <Icon
                  borderRadius={'50%'}
                  animation={animation}
                  as={AiOutlineDoubleRight}
                /> */}
            </Box>
          )}
          {scrollX !== 0 && (
            <Box
              _hover={{
                cursor: 'pointer',
                transform: 'scale(1.2)',
              }}
              id="prevBtn"
              position={'absolute'}
              left={'-12px'}
              mt={'33px'}
              zIndex={100}
              fontSize={'44px'}
              color={'#FFB11C'}
              onClick={() => slide(-50)}
            >
              <Image
                width={'30px'}
                height={'30px'}
                borderRadius={'50%'}
                // animation={animation}
                src="/images/svgs/icon/left.svg"
                alt="left-arrow"
              />
            </Box>
          )}
        </Flex>
      </Box>
      <Box
        ref={scrl}
        overflowX={'scroll'}
        overflowY={'hidden'}
        width={['370px', 'auto', '700px', '1200px']}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
            background: 'transparent',
            width: '0',
            height: '0',
          },
        }}
        onScroll={scrollCheck}
      >
        <Flex
          display={['flex', 'flex', 'flex', 'flex']}
          direction={'column'}
          width={['1200px', 'auto', '1200px', 'auto']}
        >
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'20px'}
            lineHeight={'27px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            Bets Summary
          </Text>
          <Box
            mt={'20px'}
            // border: 1px solid #FC541C;
            height={'0px'}
            width={'full'}
            border={'1px solid #FC541C'}
          />
          <Flex mt={'20px'} direction={'column'}>
            <Flex gap={'70px'}>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Side
              </Text>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Bet Amount
              </Text>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Current Sidepool Share %
              </Text>

              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Current Expected Gain{' '}
              </Text>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Final Gain If won
              </Text>
            </Flex>
            <Flex mt={'20px'} gap={'100px'}>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Yes
              </Text>
              <Text
                ml={'0px'}
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                {/* 5 FTM{' '} */}
                {betAmount} {chainName}
              </Text>
              <Text
                ml={'60px'}
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                {/* 1/5 */}
                {currentSidepoolShare} {chainName}
              </Text>
              <Text
                ml={'110px'}
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                {/* 500/500  */}
                {currentExpectedGain} {chainName}
              </Text>

              <Text
                ml={'80px'}
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                {FinalGainIfWon} {chainName}
              </Text>
            </Flex>
            <Flex mt={'20px'} gap={'100px'}>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Yes
              </Text>
              <Text
                ml={'0px'}
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                {/* 5 FTM{' '} */}
                {betAmount} {chainName}
              </Text>
              <Text
                ml={'60px'}
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                {/* 1/5 */}
                {currentSidepoolShare} {chainName}
              </Text>
              <Text
                ml={'110px'}
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                {/* 500/500  */}
                {currentExpectedGain} {chainName}
              </Text>

              <Text
                ml={'80px'}
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                {FinalGainIfWon} {chainName}
              </Text>
            </Flex>
          </Flex>
          <Flex
            display={['none', 'none', 'none', 'flex']}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'20px'}
            mt={'30px'}
            mb={'30px'}
          >
            {claimNFT && (
              <Button
                height={'46px'}
                width={'240px'}
                background={'unset'}
                borderRadius={'34px'}
                border={'1px solid #FC541C'}
                _hover={{
                  background: '#FC541C',
                }}
              >
                {claimNFT}
              </Button>
            )}
            <Button
              onClick={onOpenSecond}
              height={'46px'}
              width={'155px'}
              background={'unset'}
              borderRadius={'34px'}
              border={'1px solid #FC541C'}
              _hover={{
                background: '#FC541C',
              }}
              fontSize={'20px'}
            >
              Bet Now
            </Button>
          </Flex>
          <Box>
            <Modal isOpen={isOpenSecond} onClose={onCloseSecond}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Confirm</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Flex justifyContent={'center'} alignItems={'center'}>
                    <Tabs>
                      <TabList width={'160px'} display={'flex'} ml={'40px'}>
                        <Tab
                          bgColor={'#1F1F1F'}
                          border={'1px solid #E18933'}
                          _selected={{
                            color: 'white',
                            background: '#FF720A3B',
                          }}

                          // borderRadius={'40px 0px 0px 40px'}
                        >
                          <Flex
                            justifyContent={'center'}
                            alignItems={'center'}
                            gap={'5px'}
                            width={'80px'}
                            height={'29px'}
                          >
                            {' '}
                            <Image
                              src={'/images/svgs/chain/bnb.svg'}
                              alt={'bnb'}
                              width={'15px'}
                              height={'15px'}
                            />
                            <Flex direction={'column'}>
                              <Text
                                fontFamily={'Nunito'}
                                fontWeight={'700'}
                                fontSize={'15px'}
                                lineHeight={'20px'}
                                color={'white'}
                                borderRadius={'0 0 10px 10px'}
                                textTransform={'capitalize'}
                              >
                                BNB
                              </Text>
                              <Text
                                fontFamily={'Nunito'}
                                fontWeight={'700'}
                                fontSize={'8px'}
                                color={'white'}
                                textTransform={'capitalize'}
                              >
                                BSC
                              </Text>
                            </Flex>
                          </Flex>
                        </Tab>
                        {/* <Tab
                                    bgColor={'#1F1F1F'}
                                    border={'1px solid #E18933'}
                                    _selected={{
                                      color: 'white',
                                      background: '#FF720A3B',
                                    }}
                                  >
                                    <Flex
                                      justifyContent={'center'}
                                      alignItems={'center'}
                                      gap={'5px'}
                                      width={'80px'}
                                      height={'29px'}
                                    >
                                      {' '}
                                      <Image
                                        src={'/images/svgs/chain/usdc.svg'}
                                        alt={'usdc'}
                                        width={'15px'}
                                        height={'15px'}
                                      />
                                      <Flex direction={'column'}>
                                        <Text
                                          fontFamily={'Nunito'}
                                          fontWeight={'700'}
                                          fontSize={'15px'}
                                          lineHeight={'20px'}
                                          color={'white'}
                                          textTransform={'capitalize'}
                                        >
                                          USDC
                                        </Text>
                                        <Text
                                          fontFamily={'Nunito'}
                                          fontWeight={'700'}
                                          fontSize={'8px'}
                                          color={'white'}
                                          textTransform={'capitalize'}
                                        >
                                          BSC
                                        </Text>
                                      </Flex>
                                    </Flex>
                                  </Tab> */}
                        <Tab
                          bgColor={'#1F1F1F'}
                          border={'1px solid #E18933'}
                          _selected={{
                            color: 'white',
                            background: '#FF720A3B',
                          }}
                        >
                          <Flex
                            justifyContent={'center'}
                            alignItems={'center'}
                            gap={'5px'}
                            width={'80px'}
                            height={'29px'}
                          >
                            {' '}
                            <Image
                              src={'/images/svgs/chain/utbets.svg'}
                              alt={'usdc'}
                              width={'15px'}
                              height={'15px'}
                            />
                            <Flex direction={'column'}>
                              <Text
                                fontFamily={'Nunito'}
                                fontWeight={'700'}
                                fontSize={'15px'}
                                lineHeight={'20px'}
                                color={'white'}
                                textTransform={'capitalize'}
                              >
                                UTBETS
                              </Text>
                              <Text
                                fontFamily={'Nunito'}
                                fontWeight={'700'}
                                fontSize={'8px'}
                                color={'white'}
                                textTransform={'capitalize'}
                              >
                                BSC
                              </Text>
                            </Flex>
                          </Flex>
                        </Tab>
                      </TabList>

                      <TabPanels>
                        <TabPanel>
                          <BettingTabContent
                            choice={choice}
                            onOpenSecond={onOpenThird}
                          />
                        </TabPanel>
                        {/* <TabPanel>
                                    <BettingTabContent
                                      choice={choice}
                                      onOpenSecond={onOpenSecond}
                                    />
                                  </TabPanel> */}
                        <TabPanel>
                          <BettingTabContent
                            choice={choice}
                            onOpenSecond={onOpenThird}
                          />
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
            <Modal isOpen={isOpenThird} onClose={onCloseThird}>
              {' '}
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Success</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Flex
                    justifyContent={'center'}
                    direction={'column'}
                    alignItems={'center'}
                  >
                    <Image
                      width={'250px'}
                      height={'250px'}
                      src={'/images/svgs/chain/congrets.svg'}
                      alt={'win'}
                    />
                    <Text
                      fontFamily={'Nunito'}
                      fontWeight={'700'}
                      fontSize={'25px'}
                      lineHeight={'34px'}
                      color={'white'}
                      textTransform={'capitalize'}
                    >
                      Your bet succesfully placed!
                    </Text>
                    <Button
                      onClick={() => {
                        onCloseThird()
                        onCloseSecond()
                      }}
                      mt={'20px'}
                      height={'46px'}
                      width={'155px'}
                      background={'unset'}
                      borderRadius={'34px'}
                      border={'1px solid #FC541C'}
                      _hover={{
                        background: '#FC541C',
                      }}
                      fontSize={'20px'}
                    >
                      Okay
                    </Button>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Flex>
      </Box>
      <Flex
        ml={'-10px'}
        mt={'20px'}
        mb={'20px'}
        display={['flex', 'flex', 'none', 'none']}
        justifyContent={['center', 'center', 'start', 'start']}
        alignItems={'center'}
        gap={'10px'}
      >
        {claimNFT && (
          <Button
            height={'46px'}
            background={'unset'}
            borderRadius={'34px'}
            border={'1px solid #FC541C'}
            _hover={{
              background: '#FC541C',
            }}
          >
            {/* Claim Winner Round III NFT */}
            {claimNFT}
          </Button>
        )}
        <Button
          onClick={onOpenSecond}
          height={'46px'}
          width={'155px'}
          background={'unset'}
          borderRadius={'34px'}
          border={'1px solid #FC541C'}
          _hover={{
            background: '#FC541C',
          }}
          fontSize={'20px'}
        >
          Bet Now
        </Button>
      </Flex>
    </>
  )
}

export default BetInfo
