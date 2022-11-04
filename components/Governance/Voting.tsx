import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import NewProposal from './NewProposal'

const Voting = () => {
  return (
    <Flex direction={'column'} gap={'30px'}>
      <Flex
        justifyContent={'start'}
        alignItems={'start'}
        direction={'column'}
        gap={'25px'}
      >
        <Text
          ml={'40px'}
          fontFamily={'Inter'}
          fontStyle={'normal'}
          fontWeight={700}
          fontSize={'20px'}
          lineHeight={'24px'}
          textTransform={'capitalize'}
          color={'#FFFFFF'}
        >
          Voting Wallet
        </Text>
        <Flex
          width={'312px'}
          height={'275px'}
          borderRadius={'5px'}
          border={'1px solid #FFFFFF'}
          direction={'column'}
          p={'30px'}
          gap={'15px'}
        >
          <Flex direction={'column'}>
            <Text
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={700}
              fontSize={'12px'}
              lineHeight={'16px'}
              textTransform={'capitalize'}
              color={'#FFFFFF'}
            >
              Votes Recieved
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={700}
              fontSize={'22px'}
              lineHeight={'30px'}
              textTransform={'capitalize'}
              color={'#FFFFFF'}
            >
              0
            </Text>
          </Flex>
          <Flex direction={'column'}>
            <Text
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={700}
              fontSize={'12px'}
              lineHeight={'16px'}
              textTransform={'capitalize'}
              color={'#FFFFFF'}
            >
              FTM Balance
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={700}
              fontSize={'22px'}
              lineHeight={'30px'}
              textTransform={'capitalize'}
              color={'#FFFFFF'}
            >
              0
            </Text>
          </Flex>
          <Flex direction={'column'}>
            <Text
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={700}
              fontSize={'12px'}
              lineHeight={'16px'}
              textTransform={'capitalize'}
              color={'#FFFFFF'}
            >
              Delegating To
            </Text>

            <Text
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={700}
              fontSize={'22px'}
              lineHeight={'30px'}
              textTransform={'capitalize'}
              color={'#FFFFFF'}
            >
              Undelegated
            </Text>
          </Flex>
          <Flex justifyContent={'center'} alignItems={'center'}>
            {' '}
            <Button
              width={'145px'}
              background={'unset'}
              borderRadius={'34px'}
              border={'1px solid #FC541C'}
              _hover={{
                background: '#FC541C',
              }}
              // onClick={() => router.push('/squid-competition/one/round-one')}
            >
              Delegate
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <NewProposal />
    </Flex>
  )
}

export default Voting
