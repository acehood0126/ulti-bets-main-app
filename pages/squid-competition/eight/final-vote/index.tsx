// import {
//   Box,
//   Button,
//   Flex,
//   Grid,
//   Image,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalHeader,
//   ModalOverlay,
//   Progress,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
//   Text,
//   useDisclosure,
// } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
// import '@fontsource/inter'
// import '@fontsource/nunito'
// import { useRouter } from 'next/router'
// import BettingTabContent from '../../../../components/bets/BettingTabContent'
// import Timeline from '../../../../components/squid/Timeline'

// const FinalVote = () => {
//   const router = useRouter()
//   const currentRoute = router.pathname
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const {
//     isOpen: isOpenSecond,
//     onOpen: onOpenSecond,
//     onClose: onCloseSecond,
//   } = useDisclosure()

//   const [sizeYes, setSizeYes] = useState(false)
//   const [sizeNo, setSizeNo] = useState(false)

//   const {
//     isOpen: isOpenThird,
//     onOpen: onOpenThird,
//     onClose: onCloseThird,
//   } = useDisclosure()

//   const [choice, setChoice] = React.useState('')

//   const players = Array.from({ length: 500 }, (_, i) => ({
//     name: `Player ${i + 1}`,
//     score: 100,
//     // only 5 players are active
//     active: i < 328,
//   }))

//   useEffect(() => {
//     document.title = 'Squid Competitions | UltiBets'
//   }, [])

//   return (
//     <>
//       <Box ml={'120px'} mt={'40px'}>
//         <Flex direction={'column'}>
//           <Box>
//             <Flex gap={'18px'}>
//               <Text
//                 fontFamily={'Nunito'}
//                 fontWeight={'700'}
//                 fontSize={'17px'}
//                 lineHeight={'23px'}
//                 color={currentRoute === '/' ? '#E18833' : '#FFFFFF'}
//                 textTransform={'capitalize'}
//                 cursor={'pointer'}
//                 onClick={() => router.push('/')}
//               >
//                 Betting menu{' '}
//               </Text>
//               <Text
//                 fontFamily={'Nunito'}
//                 fontWeight={'700'}
//                 fontSize={'17px'}
//                 lineHeight={'23px'}
//                 color={'white'}
//                 textTransform={'capitalize'}
//               >
//                 |
//               </Text>
//               <Text
//                 fontFamily={'Nunito'}
//                 fontWeight={'700'}
//                 fontSize={'17px'}
//                 lineHeight={'23px'}
//                 color={currentRoute !== '/' ? '#E18833' : '#FFFFFF'}
//                 textTransform={'capitalize'}
//                 cursor={'pointer'}
//               >
//                 my bets
//               </Text>
//             </Flex>
//           </Box>
//           <Box>
//             <Timeline />
//           </Box>

//           <Flex
//             width={'750px'}
//             justifyContent={'space-between'}
//             alignItems={'center'}
//           >
//             <Flex justifyContent={'center'} mt={'20px'} alignItems={'center'}>
//               <Text
//                 fontWeight={'700'}
//                 fontSize={'27px'}
//                 lineHeight={'33px'}
//                 color={'white'}
//                 textTransform={'capitalize'}
//               >
//                 Welcome to Squid Bet #1
//               </Text>
//               <Box
//                 ml={'10px'}
//                 width={'39px'}
//                 height={'39px'}
//                 background={"url('/images/svgs/slider/squid-icon.svg')"}
//               ></Box>
//             </Flex>
//             <Flex mt={'20px'} justifyContent={'center'} alignItems={'center'}>
//               <Text
//                 fontWeight={'700'}
//                 fontSize={'27px'}
//                 lineHeight={'33px'}
//                 color={'white'}
//                 textTransform={'capitalize'}
//               >
//                 final Round Vote{' '}
//               </Text>
//             </Flex>
//           </Flex>
//           <Box mt={'20px'}>
//             <Flex gap={'45px'}>
//               {/* <Text
//                 fontFamily={'Nunito'}
//                 fontWeight={'700'}
//                 fontSize={'17px'}
//                 lineHeight={'23px'}
//                 color={'white'}
//                 textTransform={'capitalize'}
//               >
//                 Volume : 234 FTM
//               </Text> */}
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
//                 voting deadline: 30 min before{' '}
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
//                 color={'#FF9100'}
//                 textTransform={'capitalize'}
//               >
//                 Closed
//               </Text>
//             </Flex>
//           </Box>
//           <Box mt={'30px'}>
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
//                 Will PSG win against FC Nantes today?{' '}
//               </Text>
//               <Flex gap={'5px'} alignItems={'center'} justifyContent={'center'}>
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
//                   Series B
//                 </Text>
//               </Flex>
//             </Flex>
//           </Box>
//           <Box ml={'-20px'} width={'1200px'} position={'relative'}>
//             <Progress
//               mt={'20px'}
//               position={'absolute'}
//               width={'430px'}
//               left={'780px'}
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
//                 width={'1200px'}
//               >
//                 <Flex>
//                   <Flex
//                     onClick={() => {
//                       setChoice('Split Equally')
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
//                       setChoice('Random Solo Winner')
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
//                   mt={'30px'}
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
//                       {/* Are you sure to vote Split Equally / Random Solo Winner"  */}
//                       {'Split Equally'}
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
//                       {'Random Solo Winner'}
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
//             <Flex direction={'column'} width={'1200px'}>
//               <Text
//                 fontFamily={'Nunito'}
//                 fontWeight={'700'}
//                 fontSize={'20px'}
//                 lineHeight={'27px'}
//                 color={'white'}
//                 textTransform={'capitalize'}
//               >
//                 vote Summary
//               </Text>
//               <Box
//                 mt={'20px'}
//                 // border: 1px solid #FC541C;
//                 height={'0px'}
//                 width={'full'}
//                 border={'1px solid #FC541C'}
//               />
//               <Flex mt={'20px'} direction={'column'}>
//                 <Flex gap={'70px'}>
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
//                     Current Sidepool Share %
//                   </Text>
//                   <Text
//                     fontFamily={'Nunito'}
//                     fontWeight={'700'}
//                     fontSize={'17px'}
//                     lineHeight={'23px'}
//                     color={'white'}
//                     textTransform={'capitalize'}
//                   >
//                     Current Expected Gain{' '}
//                   </Text>

//                   <Text
//                     fontFamily={'Nunito'}
//                     fontWeight={'700'}
//                     fontSize={'17px'}
//                     lineHeight={'23px'}
//                     color={'white'}
//                     textTransform={'capitalize'}
//                   >
//                     Final Gain If Won
//                   </Text>
//                   {/* <Text
//                     fontFamily={'Nunito'}
//                     fontWeight={'700'}
//                     fontSize={'17px'}
//                     lineHeight={'23px'}
//                     color={'white'}
//                     textTransform={'capitalize'}
//                   >
//                     Access Round II
//                   </Text> */}
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
//                     ml={'0px'}
//                     fontFamily={'Nunito'}
//                     fontWeight={'700'}
//                     fontSize={'17px'}
//                     lineHeight={'23px'}
//                     color={'white'}
//                     textTransform={'capitalize'}
//                   >
//                     5 FTM{' '}
//                   </Text>
//                   <Text
//                     ml={'50px'}
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
//                     ml={'120px'}
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
//                     ml={'70px'}
//                     fontFamily={'Nunito'}
//                     fontWeight={'700'}
//                     fontSize={'17px'}
//                     lineHeight={'23px'}
//                     color={'white'}
//                     textTransform={'capitalize'}
//                   >
//                     0 FTM{' '}
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
//                     ml={'5px'}
//                     fontFamily={'Nunito'}
//                     fontWeight={'700'}
//                     fontSize={'17px'}
//                     lineHeight={'23px'}
//                     color={'white'}
//                     textTransform={'capitalize'}
//                   >
//                     5 FTM{' '}
//                   </Text>
//                   <Text
//                     ml={'50px'}
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
//                     ml={'120px'}
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
//                     ml={'70px'}
//                     fontFamily={'Nunito'}
//                     fontWeight={'700'}
//                     fontSize={'17px'}
//                     lineHeight={'23px'}
//                     color={'white'}
//                     textTransform={'capitalize'}
//                   >
//                     0 FTM{' '}
//                   </Text>
//                 </Flex>
//               </Flex>
//               <Flex justifyContent={'center'} alignItems={'center'}>
//                 <Button
//                   onClick={onOpenSecond}
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
//                   Vote Now
//                 </Button>
//               </Flex>
//               <Box>
//                 <Modal isOpen={isOpenSecond} onClose={onCloseSecond}>
//                   <ModalOverlay />
//                   <ModalContent>
//                     <ModalHeader>Confirm Vote</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>
//                       <Flex
//                         direction={'column'}
//                         justifyContent={'center'}
//                         alignItems={'center'}
//                       >
//                         <Text
//                           fontFamily={'Nunito'}
//                           fontWeight={'700'}
//                           fontSize={'17px'}
//                           lineHeight={'23px'}
//                           color={'white'}
//                           textTransform={'capitalize'}
//                         >
//                           {!choice
//                             ? // Are you sure to vote Split Equally / Random Solo Winner"
//                               'You have not selected an option'
//                             : `Are you sure to vote ${choice} ?`}
//                         </Text>
//                         <Button
//                           onClick={() => {
//                             onOpenThird()
//                           }}
//                           disabled={!choice}
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
//                           {'Confirm'}
//                         </Button>
//                       </Flex>
//                     </ModalBody>
//                   </ModalContent>
//                 </Modal>
//                 <Modal isOpen={isOpenThird} onClose={onCloseThird}>
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
//                           Congratulations!
//                         </Text>

//                         <Text
//                           fontFamily={'Nunito'}
//                           fontWeight={'700'}
//                           fontSize={'25px'}
//                           lineHeight={'34px'}
//                           color={'white'}
//                           textTransform={'capitalize'}
//                         >
//                           You have succesfully voted {choice}.
//                         </Text>
//                         <Button
//                           onClick={() => {
//                             onCloseThird()
//                             onCloseSecond()
//                           }}
//                           mt={'20px'}
//                           height={'46px'}
//                           width={'auto'}
//                           background={'unset'}
//                           borderRadius={'34px'}
//                           border={'1px solid #FC541C'}
//                           _hover={{
//                             background: '#FC541C',
//                           }}
//                           fontSize={'20px'}
//                         >
//                           Go Back
//                         </Button>
//                       </Flex>
//                     </ModalBody>
//                   </ModalContent>
//                 </Modal>
//               </Box>
//             </Flex>
//           </Box>
//         </Flex>
//       </Box>
//     </>
//   )
// }

// export default FinalVote

import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import '@fontsource/inter'
import '@fontsource/nunito'
import { useRouter } from 'next/router'
import Timeline from '../../../../components/squid/Timeline'
import Welcome from '../../../../components/squid/Welcome'
import SquidRoundStats from '../../../../components/squid/SquidRoundStats'
import SquidGrid from '../../../../components/squid/SquidGrid'
import SquidRoundInfo from '../../../../components/squid/SquidRoundInfo'
import MyBetsComponent from '../../../../components/mybets/MyBetsComponent'
import SquidBetInfo from '../../../../components/squid/SquidBetInfo'
import FinalVoteInfo from '../../../../components/squid/FInalVoteInfo'

const FinalVote = () => {
  const router = useRouter()
  const currentRoute = router.pathname

  const players = Array.from({ length: 500 }, (_, i) => ({
    name: `Player ${i + 1}`,
    score: 100,
    // only 5 players are active
    active: i <= 500,
  }))

  useEffect(() => {
    document.title = 'Squid Competitions | UltiBets'
  }, [])

  return (
    <>
      <Box
        ml={['20px', '0px', '20px', '120px']}
        mt={['30px', '30px', '40px', '40px']}
        mr={['0px', '0px', '20px', '0px']}
      >
        <Flex direction={'column'}>
          <Box>
            <MyBetsComponent />
            <Box
            // display={['none', 'none', 'none', 'block']}
            >
              <Timeline />
            </Box>
            <Welcome title={'Welcome to Squid Bet #1'} round={'Round 1'} />
            <SquidRoundStats
              players="500"
              poolPrize="7000"
              ChainName="FTM"
              currentPlayer="456"
            />
          </Box>

          {/* <SquidGrid players={players} /> */}
          <SquidRoundInfo
            bettingDeadline="30 minutes before"
            countdownDeadline="expired"
            dateAndTime=" 07/28 @ 20:00 UTC"
          />
          <FinalVoteInfo
            betQue=" Will PSG win against FC Nantes today?"
            series="Series B"
            accessRound="Access Round II"
            betAmount="5"
            currentRound="1"
            chainName="FTM"
            totalPlayers="500"
          />
        </Flex>
      </Box>
    </>
  )
}

export default FinalVote
