import {
  Box,
  Button,
  Container,
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
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BettingData } from '../../../constants/BettingData'
import '@fontsource/nunito'
import '@fontsource/inter'
import SquidRoundInfo from '../../../components/squid/SquidRoundInfo'
import SquidBetInfo from '../../../components/squid/SquidBetInfo'
import BettingTabContent from '../../../components/bets/BettingTabContent'
import MyBetsComp from '../../../components/mybets/MyBetsComp'
import BetInfo from '../../../components/bets/BetsInfo'

const DetailedBets = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  const slug = router.query.betid

  const [choice, setChoice] = React.useState('')

  const [sizeYes, setSizeYes] = useState(false)
  const [sizeNo, setSizeNo] = useState(false)

  const filterdBet = slug && BettingData.filter((item) => item.id === slug[0])
  useEffect(() => {
    console.log('bettinng id', slug)
    console.log('filterdBet', filterdBet)
  }, [slug, filterdBet])

  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    isOpen: isOpenSecond,
    onOpen: onOpenSecond,
    onClose: onCloseSecond,
  } = useDisclosure()

  useEffect(() => {
    document.title = `Detailed Bets | Bets`
  }, [currentRoute])

  // return (
  //   <Box height={['auto', 'auto', 'auto', '100vh']}>
  //     <Flex justifyContent={'center'} alignItems={'center'}>
  //       <Flex justifyContent={'center'} alignItems={'center'}>
  //         <Flex direction={'column'} gap={'40px'}>
  //           <Box>
  //             <MyBetsComp />
  //           </Box>
  //           <Box>
  //             <Flex gap={'45px'}>
  //               <Text
  //                 fontFamily={'Nunito'}
  //                 fontWeight={'700'}
  //                 fontSize={'17px'}
  //                 lineHeight={'23px'}
  //                 color={'white'}
  //                 textTransform={'capitalize'}
  //               >
  //                 Volume : 234 FTM
  //               </Text>
  //               <Text
  //                 fontFamily={'Nunito'}
  //                 fontWeight={'700'}
  //                 fontSize={'17px'}
  //                 lineHeight={'23px'}
  //                 color={'white'}
  //                 textTransform={'capitalize'}
  //               >
  //                 Date & Time: 07/28 @ 20:00 UTC{' '}
  //               </Text>
  //               <Text
  //                 fontFamily={'Nunito'}
  //                 fontWeight={'700'}
  //                 fontSize={'17px'}
  //                 lineHeight={'23px'}
  //                 color={'white'}
  //                 textTransform={'capitalize'}
  //               >
  //                 betting deadline: 30 min before{' '}
  //               </Text>
  //               <Text
  //                 fontFamily={'Nunito'}
  //                 fontWeight={'700'}
  //                 fontSize={'17px'}
  //                 lineHeight={'23px'}
  //                 color={'white'}
  //                 textTransform={'capitalize'}
  //               >
  //                 countdown deadline: expired{' '}
  //               </Text>
  //               <Text
  //                 fontFamily={'Nunito'}
  //                 fontWeight={'700'}
  //                 fontSize={'17px'}
  //                 lineHeight={'23px'}
  //                 color={'white'}
  //                 textTransform={'capitalize'}
  //               >
  //                 results: 30 min after{' '}
  //               </Text>
  //             </Flex>
  //           </Box>
  //           <Box>
  //             <Flex gap={'30px'}>
  //               <Text
  //                 fontFamily={'Inter'}
  //                 fontStyle={'normal'}
  //                 fontWeight={'extrabold'}
  //                 fontSize={'28px'}
  //                 lineHeight={'34px'}
  //                 color={'white'}
  //                 textTransform={'capitalize'}
  //               >
  //                 Will Atalanta win against sampdoria?
  //               </Text>
  //               <Flex
  //                 gap={'5px'}
  //                 alignItems={'center'}
  //                 justifyContent={'center'}
  //               >
  //                 <Image
  //                   width={'25px'}
  //                   height={'25px'}
  //                   src="/images/svgs/sidebar/soccer-ball.svg"
  //                   alt="soccer-ball"
  //                 />
  //                 <Text
  //                   fontFamily={'Nunito'}
  //                   fontWeight={'700'}
  //                   fontSize={'17px'}
  //                   lineHeight={'23px'}
  //                 >
  //                   Series A
  //                 </Text>
  //               </Flex>
  //             </Flex>
  //           </Box>
  //           <Box ml={'-20px'} position={'relative'}>
  //             <Progress
  //               position={'absolute'}
  //               width={'430px'}
  //               left={'370px'}
  //               // top={'335px'}
  //               value={50}
  //               colorScheme={'orange'}
  //               height={'4px'}
  //               border={'1px solid none'}
  //               bgColor={'#739AF0'}
  //             />

  //             <Flex gap={'30px'}>
  //               <Flex
  //                 gap={'10px'}
  //                 justifyContent={'space-between'}
  //                 width={'800px'}
  //               >
  //                 <Flex>
  //                   <Flex
  //                     onClick={() => {
  //                       setChoice('yes')
  //                       setSizeYes(true)
  //                       setSizeNo(false)
  //                     }}
  //                     cursor={'pointer'}
  //                   >
  //                     <Image
  //                       src="/images/svgs/bets/yes.svg"
  //                       alt="yes"
  //                       width={sizeYes ? '120px' : '100px'}
  //                       height={sizeYes ? '120px' : '100px'}
  //                       _hover={{
  //                         transform: 'scale(1.1)',
  //                       }}
  //                     />
  //                   </Flex>
  //                   <Flex
  //                     onClick={() => {
  //                       setChoice('no')
  //                       setSizeNo(true)
  //                       setSizeYes(false)
  //                     }}
  //                     cursor={'pointer'}
  //                   >
  //                     <Image
  //                       src="/images/svgs/bets/no.svg"
  //                       alt="no"
  //                       width={sizeNo ? '120px' : '100px'}
  //                       height={sizeNo ? '120px' : '100px'}
  //                       _hover={{
  //                         transform: 'scale(1.1)',
  //                       }}
  //                     />
  //                   </Flex>
  //                 </Flex>
  //                 <Flex
  //                   gap={'30px'}
  //                   justifyContent={'center'}
  //                   alignItems={'center'}
  //                 >
  //                   <Flex direction={'column'} gap={'20px'}>
  //                     <Text
  //                       fontFamily={'Nunito'}
  //                       fontWeight={'700'}
  //                       fontSize={'22px'}
  //                       lineHeight={'30px'}
  //                       color={'white'}
  //                       textTransform={'capitalize'}
  //                     >
  //                       {"'Yes' side pool"}
  //                     </Text>
  //                     <Text
  //                       fontFamily={'Nunito'}
  //                       fontWeight={'700'}
  //                       fontSize={'22px'}
  //                       lineHeight={'30px'}
  //                       color={'white'}
  //                       textTransform={'capitalize'}
  //                       textAlign={'right'}
  //                     >
  //                       {'55%'}
  //                     </Text>
  //                   </Flex>
  //                   <Flex direction={'column'} gap={'20px'}>
  //                     <Text
  //                       fontFamily={'Nunito'}
  //                       fontWeight={'700'}
  //                       fontSize={'22px'}
  //                       lineHeight={'30px'}
  //                       color={'white'}
  //                       textTransform={'capitalize'}
  //                     >
  //                       {"'No' side pool"}
  //                     </Text>
  //                     <Text
  //                       fontFamily={'Nunito'}
  //                       fontWeight={'700'}
  //                       fontSize={'22px'}
  //                       lineHeight={'30px'}
  //                       color={'#739AF0'}
  //                       textTransform={'capitalize'}
  //                       textAlign={'right'}
  //                     >
  //                       {'45%'}
  //                     </Text>
  //                   </Flex>
  //                 </Flex>
  //               </Flex>
  //             </Flex>
  //           </Box>
  //           <Box>
  //             <Flex direction={'column'}>
  //               <Text
  //                 fontFamily={'Nunito'}
  //                 fontWeight={'700'}
  //                 fontSize={'20px'}
  //                 lineHeight={'27px'}
  //                 color={'white'}
  //                 textTransform={'capitalize'}
  //               >
  //                 Bets Summary
  //               </Text>
  //               <Box
  //                 mt={'20px'}
  //                 // border: 1px solid #FC541C;
  //                 height={'0px'}
  //                 width={'800px'}
  //                 border={'1px solid #FC541C'}
  //               />
  //               <Flex mt={'20px'} direction={'column'}>
  //                 <Flex gap={'40px'}>
  //                   <Text
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     Side
  //                   </Text>
  //                   <Text
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     Bet Amount
  //                   </Text>
  //                   <Text
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     current sidepool share %{' '}
  //                   </Text>
  //                   <Text
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     Current Expected Gain
  //                   </Text>

  //                   <Text
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     Final Gain if won{' '}
  //                   </Text>
  //                 </Flex>
  //                 <Flex mt={'20px'} gap={'100px'}>
  //                   <Text
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     Yes
  //                   </Text>
  //                   <Text
  //                     ml={'-30px'}
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     0 FTM{' '}
  //                   </Text>
  //                   <Text
  //                     ml={'30px'}
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     0 FTM{' '}
  //                   </Text>
  //                   <Text
  //                     ml={'80px'}
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     0 FTM
  //                   </Text>

  //                   <Text
  //                     ml={'40px'}
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     0 FTM
  //                   </Text>
  //                 </Flex>
  //                 <Flex mt={'20px'} gap={'100px'}>
  //                   <Text
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     No
  //                   </Text>
  //                   <Text
  //                     ml={'-27px'}
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     0 FTM{' '}
  //                   </Text>
  //                   <Text
  //                     ml={'31px'}
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     0 FTM{' '}
  //                   </Text>
  //                   <Text
  //                     ml={'80px'}
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     0 FTM
  //                   </Text>

  //                   <Text
  //                     ml={'40px'}
  //                     fontFamily={'Nunito'}
  //                     fontWeight={'700'}
  //                     fontSize={'17px'}
  //                     lineHeight={'23px'}
  //                     color={'white'}
  //                     textTransform={'capitalize'}
  //                   >
  //                     0 FTM
  //                   </Text>
  //                 </Flex>
  //               </Flex>
  //               <Flex justifyContent={'center'} alignItems={'center'}>
  //                 <Button
  //                   onClick={onOpen}
  //                   mt={'20px'}
  //                   height={'46px'}
  //                   width={'155px'}
  //                   background={'unset'}
  //                   borderRadius={'34px'}
  //                   border={'1px solid #FC541C'}
  //                   _hover={{
  //                     background: '#FC541C',
  //                   }}
  //                   fontSize={'20px'}
  //                 >
  //                   Bet Now
  //                 </Button>
  //               </Flex>
  //               <Box>
  //                 <Modal isOpen={isOpen} onClose={onClose}>
  //                   <ModalOverlay />
  //                   <ModalContent>
  //                     <ModalHeader>Confirm</ModalHeader>
  //                     <ModalCloseButton />
  //                     <ModalBody>
  //                       <Flex justifyContent={'center'} alignItems={'center'}>
  //                         <Tabs>
  //                           <TabList
  //                             width={'160px'}
  //                             display={'flex'}
  //                             ml={'40px'}
  //                           >
  //                             <Tab
  //                               bgColor={'#1F1F1F'}
  //                               border={'1px solid #E18933'}
  //                               _selected={{
  //                                 color: 'white',
  //                                 background: '#FF720A3B',
  //                               }}

  //                               // borderRadius={'40px 0px 0px 40px'}
  //                             >
  //                               <Flex
  //                                 justifyContent={'center'}
  //                                 alignItems={'center'}
  //                                 gap={'5px'}
  //                                 width={'80px'}
  //                                 height={'29px'}
  //                               >
  //                                 {' '}
  //                                 <Image
  //                                   src={'/images/svgs/chain/bnb.svg'}
  //                                   alt={'bnb'}
  //                                   width={'15px'}
  //                                   height={'15px'}
  //                                 />
  //                                 <Flex direction={'column'}>
  //                                   <Text
  //                                     fontFamily={'Nunito'}
  //                                     fontWeight={'700'}
  //                                     fontSize={'15px'}
  //                                     lineHeight={'20px'}
  //                                     color={'white'}
  //                                     borderRadius={'0 0 10px 10px'}
  //                                     textTransform={'capitalize'}
  //                                   >
  //                                     BNB
  //                                   </Text>
  //                                   <Text
  //                                     fontFamily={'Nunito'}
  //                                     fontWeight={'700'}
  //                                     fontSize={'8px'}
  //                                     color={'white'}
  //                                     textTransform={'capitalize'}
  //                                   >
  //                                     BSC
  //                                   </Text>
  //                                 </Flex>
  //                               </Flex>
  //                             </Tab>
  //                             {/* <Tab
  //                                 bgColor={'#1F1F1F'}
  //                                 border={'1px solid #E18933'}
  //                                 _selected={{
  //                                   color: 'white',
  //                                   background: '#FF720A3B',
  //                                 }}
  //                               >
  //                                 <Flex
  //                                   justifyContent={'center'}
  //                                   alignItems={'center'}
  //                                   gap={'5px'}
  //                                   width={'80px'}
  //                                   height={'29px'}
  //                                 >
  //                                   {' '}
  //                                   <Image
  //                                     src={'/images/svgs/chain/usdc.svg'}
  //                                     alt={'usdc'}
  //                                     width={'15px'}
  //                                     height={'15px'}
  //                                   />
  //                                   <Flex direction={'column'}>
  //                                     <Text
  //                                       fontFamily={'Nunito'}
  //                                       fontWeight={'700'}
  //                                       fontSize={'15px'}
  //                                       lineHeight={'20px'}
  //                                       color={'white'}
  //                                       textTransform={'capitalize'}
  //                                     >
  //                                       USDC
  //                                     </Text>
  //                                     <Text
  //                                       fontFamily={'Nunito'}
  //                                       fontWeight={'700'}
  //                                       fontSize={'8px'}
  //                                       color={'white'}
  //                                       textTransform={'capitalize'}
  //                                     >
  //                                       BSC
  //                                     </Text>
  //                                   </Flex>
  //                                 </Flex>
  //                               </Tab> */}
  //                             <Tab
  //                               bgColor={'#1F1F1F'}
  //                               border={'1px solid #E18933'}
  //                               _selected={{
  //                                 color: 'white',
  //                                 background: '#FF720A3B',
  //                               }}
  //                             >
  //                               <Flex
  //                                 justifyContent={'center'}
  //                                 alignItems={'center'}
  //                                 gap={'5px'}
  //                                 width={'80px'}
  //                                 height={'29px'}
  //                               >
  //                                 {' '}
  //                                 <Image
  //                                   src={'/images/svgs/chain/utbets.svg'}
  //                                   alt={'usdc'}
  //                                   width={'15px'}
  //                                   height={'15px'}
  //                                 />
  //                                 <Flex direction={'column'}>
  //                                   <Text
  //                                     fontFamily={'Nunito'}
  //                                     fontWeight={'700'}
  //                                     fontSize={'15px'}
  //                                     lineHeight={'20px'}
  //                                     color={'white'}
  //                                     textTransform={'capitalize'}
  //                                   >
  //                                     UTBETS
  //                                   </Text>
  //                                   <Text
  //                                     fontFamily={'Nunito'}
  //                                     fontWeight={'700'}
  //                                     fontSize={'8px'}
  //                                     color={'white'}
  //                                     textTransform={'capitalize'}
  //                                   >
  //                                     BSC
  //                                   </Text>
  //                                 </Flex>
  //                               </Flex>
  //                             </Tab>
  //                           </TabList>

  //                           <TabPanels>
  //                             <TabPanel>
  //                               <BettingTabContent
  //                                 choice={choice}
  //                                 onOpenSecond={onOpenSecond}
  //                               />
  //                             </TabPanel>
  //                             {/* <TabPanel>
  //                                 <BettingTabContent
  //                                   choice={choice}
  //                                   onOpenSecond={onOpenSecond}
  //                                 />
  //                               </TabPanel> */}
  //                             <TabPanel>
  //                               <BettingTabContent
  //                                 choice={choice}
  //                                 onOpenSecond={onOpenSecond}
  //                               />
  //                             </TabPanel>
  //                           </TabPanels>
  //                         </Tabs>
  //                       </Flex>
  //                     </ModalBody>
  //                   </ModalContent>
  //                 </Modal>
  //                 <Modal isOpen={isOpenSecond} onClose={onCloseSecond}>
  //                   {' '}
  //                   <ModalOverlay />
  //                   <ModalContent>
  //                     <ModalHeader>Success</ModalHeader>
  //                     <ModalCloseButton />
  //                     <ModalBody>
  //                       <Flex
  //                         justifyContent={'center'}
  //                         direction={'column'}
  //                         alignItems={'center'}
  //                       >
  //                         <Image
  //                           width={'250px'}
  //                           height={'250px'}
  //                           src={'/images/svgs/chain/congrets.svg'}
  //                           alt={'win'}
  //                         />
  //                         <Text
  //                           fontFamily={'Nunito'}
  //                           fontWeight={'700'}
  //                           fontSize={'25px'}
  //                           lineHeight={'34px'}
  //                           color={'white'}
  //                           textTransform={'capitalize'}
  //                         >
  //                           Your bet succesfully placed!
  //                         </Text>
  //                         <Button
  //                           onClick={onCloseSecond}
  //                           mt={'20px'}
  //                           height={'46px'}
  //                           width={'155px'}
  //                           background={'unset'}
  //                           borderRadius={'34px'}
  //                           border={'1px solid #FC541C'}
  //                           _hover={{
  //                             background: '#FC541C',
  //                           }}
  //                           fontSize={'20px'}
  //                         >
  //                           Okay
  //                         </Button>
  //                       </Flex>
  //                     </ModalBody>
  //                   </ModalContent>
  //                 </Modal>
  //               </Box>
  //             </Flex>
  //           </Box>
  //         </Flex>
  //       </Flex>
  //     </Flex>
  //   </Box>
  // )

  return (
    <>
      <Box
        ml={['20px', '0px', '20px', '120px']}
        mt={['30px', '30px', '40px', '40px']}
        mr={['0px', '0px', '20px', '0px']}
        height={['auto', 'auto', 'auto', '100vh']}
      >
        <MyBetsComp />
        <SquidRoundInfo
          volume="2500"
          chianName="FTM"
          bettingDeadline="30 minutes before"
          countdownDeadline="expired"
          dateAndTime=" 07/28 @ 20:00 UTC"
        />
        <BetInfo
          betQue=" Will PSG win against FC Nantes today?"
          series="Series B"
          accessRound="Access Round II"
          betAmount="5"
          currentRound="1"
          chainName="FTM"
          totalPlayers="500"
          FinalGainIfWon="0"
          currentExpectedGain="0"
          currentSidepoolShare="0"
        />
      </Box>
    </>
  )
}

export default DetailedBets

{
  /* <div data-sal-delay="3000" data-sal={'fade'} data-sal-duration="800">
detailed bets {slug}
</div> */
}
{
  /* <div>
{filterdBet &&
filterdBet.map((item) => (
  <div key={item.id}>
    <div>{item.series}</div>
    <div>{item.team1}</div>

    <div>{item.team2}</div>
    <div>{item.bettingType}</div>
    <div>{item.bettingTime}</div>
    <div>{item.bettingDate}</div>
    <div>{item.bettingDeadline}</div>
    <div>{item.bettingVolume}</div>

    <img src={item.bettingLogo} alt="bettingLogo" />
  </div>
))}
</div> */
}
