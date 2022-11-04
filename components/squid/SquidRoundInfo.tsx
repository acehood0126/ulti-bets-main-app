import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export type SquidRoundInfoProps = {
  volume?: string
  chianName?: string
  dateAndTime?: string
  bettingDeadline?: string
  countdownDeadline?: string
}
const SquidRoundInfo = ({
  volume,
  chianName,
  dateAndTime,
  bettingDeadline,
  countdownDeadline,
}: SquidRoundInfoProps) => {
  return (
    <Box>
      <Flex
        mt={['20px', '20px', '20px', '20px']}
        display={['grid', 'grid', 'flex', 'flex']}
        // direction={['column', 'column', 'column', 'row']}
        // 2 row 2 column grid
        gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']}
        gap={['10px', '10px', '10px', '45px']}
        overflow={'hidden'}
      >
        {volume && (
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'17px'}
            lineHeight={'23px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            {/* Volume : 234 FTM */}
            Volume : {volume} {chianName}
          </Text>
        )}
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={'17px'}
          lineHeight={'23px'}
          color={'white'}
          textTransform={'capitalize'}
        >
          {/* Date & Time: 07/28 @ 20:00 UTC{' '} */}
          Date & Time: {dateAndTime}
        </Text>
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={'17px'}
          lineHeight={'23px'}
          color={'white'}
          textTransform={'capitalize'}
        >
          {/* betting deadline: 30 min before{' '}
           */}
          betting deadline: {bettingDeadline}
        </Text>
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={'17px'}
          lineHeight={'23px'}
          color={'white'}
          textTransform={'capitalize'}
        >
          {/* countdown deadline: expired{' '} */}
          countdown deadline: {countdownDeadline}
        </Text>
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={'17px'}
          lineHeight={'23px'}
          color={'white'}
          textTransform={'capitalize'}
        >
          results: 30 min after{' '}
        </Text>
      </Flex>
    </Box>
  )
}

export default SquidRoundInfo
