/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'

const SquidGrid = ({ players }: any) => {
  return (
    <Box>
      <Box display={['none', 'none', 'none', 'block']}>
        <Box width={'850px'}>
          {' '}
          <Grid
            templateColumns={'repeat(50, 1fr)'}
            templateRows={'repeat(10, 1fr)'}
          >
            {players.map((dot: any, index: any) => (
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
        <Box mb={'20px'}>
          <Flex mt={'10px'} alignItems={'center'} gap={'20px'}>
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
      </Box>
      <Box
        ml={'10px'}
        my={'20px'}
        // ml={'-10px'}
        // m={'40px'}
        // m={'20px'}
        // mt={'20px'}
        // mr={'10px'}
        display={['block', 'block', 'block', 'none']}
        border={'1px solid #FFFFFF'}
        borderRadius={'10px'}
        width={'360px'}
        height={'100px'}
      >
        <Flex justifyContent={'center'} alignItems={'center'} gap={'50px'}>
          <Flex direction={'column'}>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'700'}
              fontSize={'41px'}
              lineHeight={'56px'}
              color={'#E18933'}
              textTransform={'capitalize'}
            >
              {players.filter((player: any) => player.active === true).length -
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
              {players.filter((player: any) => player.active === false).length +
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
    </Box>
  )
}

export default SquidGrid
