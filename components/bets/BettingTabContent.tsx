import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BettingTabContent = ({ onOpenSecond, choice }: any) => {
  return (
    <Flex
      gap={'40px'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'start'}
    >
      <Flex>
        <Box>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'22px'}
            lineHeight={'30px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            Side to bet:
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'17px'}
            lineHeight={'23px'}
            color={'#739AF0'}
            textTransform={'capitalize'}
          >
            {choice || 'No choice selected'}
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'22px'}
            lineHeight={'30px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            Current Side Pool:{' '}
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'17px'}
            lineHeight={'23px'}
            color={'#739AF0'}
            textTransform={'capitalize'}
          >
            203 FTM
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'22px'}
            lineHeight={'30px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            Enter Amount:
          </Text>
          <Flex justifyContent={'center'} alignItems={'center'}>
            <Input
              width={'100px'}
              variant="flushed"
              // placeholder="Flushed"
            />
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'17px'}
              lineHeight={'23px'}
              color={'#739AF0'}
              textTransform={'capitalize'}
            >
              FTM (Betting Fee: 2%)
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'22px'}
            lineHeight={'30px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            current side pool share %:{' '}
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'17px'}
            lineHeight={'23px'}
            color={'#739AF0'}
            textTransform={'capitalize'}
          >
            5 %
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'22px'}
            lineHeight={'30px'}
            color={'white'}
            textTransform={'capitalize'}
          >
            current expected gain:{' '}
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={'17px'}
            lineHeight={'23px'}
            color={'#739AF0'}
            textTransform={'capitalize'}
          >
            5 FTM
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent={'center'} alignItems={'center'} ml={'70px'}>
        <Button
          onClick={onOpenSecond}
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
          Place Bet
        </Button>
      </Flex>
    </Flex>
  )
}

export default BettingTabContent
