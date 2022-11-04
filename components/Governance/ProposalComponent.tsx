import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export type ProposalComponentProps = {
  title?: string
  status?: string
  voteStatus?: string
  TimeLeft?: string
  id?: string
}
const ProposalComponent = ({
  id,
  title,
  status,
  voteStatus,
  TimeLeft,
}: ProposalComponentProps) => {
  return (
    <Box>
      <Flex
        border={'1px solid'}
        borderColor={
          status === 'Active'
            ? '#E18933'
            : status === 'Passed'
            ? '#19A2A5'
            : '#FC541C'
        }
        width={['100%', '100%', '100%', '400px']}
        borderRadius={'5px'}
        direction={'column'}
        p={'30px'}
        gap={'20px'}
      >
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'300px'}
        >
          <Flex justifyContent={'center'} alignItems={'center'} gap={'10px'}>
            <Box
              width={'12px'}
              height={'12px'}
              borderRadius={'50%'}
              bg={
                status === 'Active'
                  ? '#E18933'
                  : status === 'Passed'
                  ? '#19A2A5'
                  : '#FC541C'
              }
            />
            <Text
              fontFamily={'Nunito'}
              fontStyle={'normal'}
              fontWeight={700}
              fontSize={'12px'}
              lineHeight={'16px'}
              textTransform={'capitalize'}
            >
              {/* Active */}
              {status}
            </Text>
          </Flex>
          <Text
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={700}
            fontSize={'14px'}
            lineHeight={'19px'}
            textTransform={'capitalize'}
          >
            {/* View Only */}
            {voteStatus}
          </Text>
        </Flex>
        <Flex direction={'column'} gap={'6px'}>
          <Text
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={700}
            fontSize={'18px'}
            lineHeight={'25px'}
            textTransform={'capitalize'}
          >
            {/* Add USDT support{' '} */}
            {title}
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontStyle={'normal'}
            fontWeight={700}
            fontSize={'12px'}
            lineHeight={'16px'}
            textTransform={'capitalize'}
          >
            {/* 2 days 11 hours left */}
            {TimeLeft}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProposalComponent
