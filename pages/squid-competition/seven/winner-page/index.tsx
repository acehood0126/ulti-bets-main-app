import {
  Box,
  Button,
  Flex,
  Grid,
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
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '@fontsource/inter'
import '@fontsource/nunito'
import { useRouter } from 'next/router'
import BettingTabContent from '../../../../components/bets/BettingTabContent'
import Timeline from '../../../../components/squid/Timeline'

const WinnerPage = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  const { isOpen, onOpen, onClose } = useDisclosure()
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

  const [choice, setChoice] = React.useState('')

  const players = Array.from({ length: 500 }, (_, i) => ({
    name: `Player ${i + 1}`,
    score: 100,
    // only 5 players are active
    active: i < 328,
  }))

  useEffect(() => {
    document.title = 'Squid Competitions | UltiBets'
  }, [])

  return (
    <>
      <Box ml={['20px', '0px', '0px', '120px']} mt={'40px'}>
        <Flex direction={'column'}>
          <Box>
            <Flex gap={'18px'}>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={currentRoute === '/' ? '#E18833' : '#FFFFFF'}
                textTransform={'capitalize'}
                cursor={'pointer'}
                onClick={() => router.push('/')}
              >
                Betting menu{' '}
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
                color={currentRoute !== '/' ? '#E18833' : '#FFFFFF'}
                textTransform={'capitalize'}
                cursor={'pointer'}
              >
                my bets
              </Text>
            </Flex>
            <Box>
              <Timeline />
            </Box>
          </Box>
          <Flex
            width={['auto', '100%', '100%', '750px']}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Flex
              direction={'column'}
              mt={'100px'}
              //  gap={'10px'}
            >
              <Text
                fontWeight={'700'}
                fontSize={['20px', '20px', '20px', '27px']}
                lineHeight={['25px', '25px', '25px', '33px']}
                color={'white'}
                textTransform={'capitalize'}
              >
                PLAYER
                <Text as={'span'} color={'#E18833'}>
                  #456{' '}
                </Text>
              </Text>
              <Flex>
                <Text
                  fontWeight={'700'}
                  fontSize={['22x', '20px', '20px', '27px']}
                  lineHeight={['27px', '25px', '25px', '33px']}
                  color={'white'}
                  textTransform={'capitalize'}
                >
                  Congratulations for winning Squid Bet #1{' '}
                </Text>
                <Box
                  ml={['0px', '10px', '10px', '10px']}
                  width={['35px', '25px', '39px', '39px']}
                  height={['35px', '25px', '39px', '39px']}
                  background={"url('/images/svgs/slider/squid-icon.svg')"}
                ></Box>
              </Flex>
            </Flex>
          </Flex>
          {/* Final Prize Pool: 11680 FTM
Final Decision: Random Pick Solo Winner
Final winner prize: 11680 FTM
 */}
          <Box mt={'80px'}>
            <Flex direction={'column'} gap={'10px'}>
              <Text
                fontWeight={'700'}
                fontSize={'27px'}
                lineHeight={'33px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Final Prize Pool: 11680 FTM{' '}
              </Text>
              <Text
                fontWeight={'700'}
                fontSize={'27px'}
                lineHeight={'33px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Final Decision: Random Pick Solo Winner
              </Text>
              <Text
                fontWeight={'700'}
                fontSize={'27px'}
                lineHeight={'33px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Final winner prize: 11680 FTM
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex mt={'50px'} gap={'50px'}>
              <Button
                height={'41px'}
                // width={'200px'}
                background={'unset'}
                borderRadius={'34px'}
                border={'1px solid #FC541C'}
                _hover={{
                  background: '#FC541C',
                }}
                onClick={() => {
                  router.push('/squid-competition/round-four')
                }}
              >
                Claim Winner Prize
              </Button>
              <Button
                height={'41px'}
                // width={'200px'}
                background={'unset'}
                borderRadius={'34px'}
                border={'1px solid #FC541C'}
                _hover={{
                  background: '#FC541C',
                }}
                onClick={() => {
                  router.push('/squid-competition/round-four')
                }}
              >
                Claim Winner NFT
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default WinnerPage
