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

export type SquidQueInfoProps = {
  betQue?: string
  series?: string
  accessRound?: string
  betAmount?: string
  currentRound?: string
  totalPlayers?: string
  chainName?: string
  claimNFT?: string
}

const FinalVoteInfo = ({
  betQue,
  series,
  accessRound,
  betAmount,
  currentRound,
  totalPlayers,
  chainName,
  claimNFT,
}: SquidQueInfoProps) => {
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
                  setChoice('Split Equally')
                  setSizeYes(true)
                  setSizeNo(false)
                }}
                cursor={'pointer'}
              >
                <Image
                  src="/images/svgs/icon/split.svg"
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
                  setChoice('Random Solo Winner')
                  setSizeNo(true)
                  setSizeYes(false)
                }}
                cursor={'pointer'}
              >
                <Image
                  src="/images/svgs/icon/random.svg"
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
                  {'Split Equally'}
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
                  {'Random Solo Winner'}
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
          width={['1200px', 'auto', '1200px', '1200px']}
        >
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'20px'}
            lineHeight={'27px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            Vote Summary
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
                Final Gain If Won
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
                ml={'0px'}
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                {/* 1/5 */}0 FTM
              </Text>
              <Text
                ml={'20px'}
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                {/* 500/500  */}0 FTM
              </Text>

              <Text
                ml={'20px'}
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                0 FTM
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
              Vote Now
            </Button>
          </Flex>
          <Box>
            <Modal isOpen={isOpenSecond} onClose={onCloseSecond}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Confirm Vote</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Flex
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Text
                      fontFamily={'Nunito'}
                      fontWeight={'700'}
                      fontSize={'17px'}
                      lineHeight={'23px'}
                      color={'white'}
                      textTransform={'capitalize'}
                    >
                      {!choice
                        ? // Are you sure to vote Split Equally / Random Solo Winner"
                          'You have not selected an option'
                        : `Are you sure to vote ${choice} ?`}
                    </Text>
                    <Button
                      onClick={() => {
                        onOpenThird()
                      }}
                      disabled={!choice}
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
                      {'Confirm'}
                    </Button>
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
                      alt={'congrets'}
                    />
                    <Text
                      fontFamily={'Nunito'}
                      fontWeight={'700'}
                      fontSize={'25px'}
                      lineHeight={'34px'}
                      color={'white'}
                      textTransform={'capitalize'}
                    >
                      Congratulations!
                    </Text>

                    <Text
                      fontFamily={'Nunito'}
                      fontWeight={'700'}
                      fontSize={'25px'}
                      lineHeight={'34px'}
                      color={'white'}
                      textTransform={'capitalize'}
                      align={'center'}
                    >
                      You have succesfully voted {choice}.
                    </Text>
                    <Button
                      onClick={() => {
                        onCloseThird()
                        onCloseSecond()
                      }}
                      mt={'20px'}
                      height={'46px'}
                      width={'auto'}
                      background={'unset'}
                      borderRadius={'34px'}
                      border={'1px solid #FC541C'}
                      _hover={{
                        background: '#FC541C',
                      }}
                      fontSize={'20px'}
                    >
                      Go Back
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
        display={['flex', 'flex', 'none', 'none']}
        justifyContent={'start'}
        alignItems={'center'}
        gap={'10px'}
      >
        {' '}
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
          Vote Now{' '}
        </Button>
      </Flex>
    </>
  )
}

export default FinalVoteInfo
