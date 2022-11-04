import { Box, Button, Flex, Image, Progress, Text } from '@chakra-ui/react'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BetsModule = ({ onOpen }: any) => {
  const [choice, setChoice] = React.useState('')

  return (
    <>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Flex direction={'column'} gap={'40px'}>
          <Box>
            <Flex gap={'18px'}>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'#E18833'}
                textTransform={'capitalize'}
                cursor={'pointer'}
              >
                Open Bets
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
                color={'white'}
                textTransform={'capitalize'}
                cursor={'pointer'}
              >
                Closed bets
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex gap={'45px'}>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Volume : 234 FTM
              </Text>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Date & Time: 07/28 @ 20:00 UTC{' '}
              </Text>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                betting deadline: 30 min before{' '}
              </Text>
              <Text
                fontFamily={'Nunito'}
                fontWeight={'700'}
                fontSize={'17px'}
                lineHeight={'23px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                countdown deadline: expired{' '}
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
          <Box>
            <Flex gap={'30px'}>
              <Text
                fontFamily={'Inter'}
                fontStyle={'normal'}
                fontWeight={'extrabold'}
                fontSize={'28px'}
                lineHeight={'34px'}
                color={'white'}
                textTransform={'capitalize'}
              >
                Will Atalanta win against sampdoria?
              </Text>
              <Flex gap={'5px'} alignItems={'center'} justifyContent={'center'}>
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
                  Series A
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box ml={'-20px'} position={'relative'}>
            <Progress
              position={'absolute'}
              width={'430px'}
              left={'370px'}
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
                justifyContent={'space-between'}
                width={'800px'}
              >
                <Flex>
                  <Flex onClick={() => setChoice('yes')} cursor={'pointer'}>
                    <Image
                      src="/images/svgs/bets/yes.svg"
                      alt="yes"
                      width={'100px'}
                      height={'100px'}
                      _hover={{
                        transform: 'scale(1.1)',
                      }}
                    />
                  </Flex>
                  <Flex onClick={() => setChoice('no')} cursor={'pointer'}>
                    <Image
                      src="/images/svgs/bets/no.svg"
                      alt="no"
                      width={'100px'}
                      height={'100px'}
                      _hover={{
                        transform: 'scale(1.1)',
                      }}
                    />
                  </Flex>
                </Flex>
                <Flex
                  gap={'30px'}
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
            <Flex direction={'column'}>
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
                width={'800px'}
                border={'1px solid #FC541C'}
              />
              <Flex mt={'20px'} direction={'column'}>
                <Flex gap={'40px'}>
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
                    current sidepool share %{' '}
                  </Text>
                  <Text
                    fontFamily={'Nunito'}
                    fontWeight={'700'}
                    fontSize={'17px'}
                    lineHeight={'23px'}
                    color={'white'}
                    textTransform={'capitalize'}
                  >
                    Current Expected Gain
                  </Text>

                  <Text
                    fontFamily={'Nunito'}
                    fontWeight={'700'}
                    fontSize={'17px'}
                    lineHeight={'23px'}
                    color={'white'}
                    textTransform={'capitalize'}
                  >
                    Final Gain if won{' '}
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
                    ml={'-30px'}
                    fontFamily={'Nunito'}
                    fontWeight={'700'}
                    fontSize={'17px'}
                    lineHeight={'23px'}
                    color={'white'}
                    textTransform={'capitalize'}
                  >
                    0 FTM{' '}
                  </Text>
                  <Text
                    ml={'30px'}
                    fontFamily={'Nunito'}
                    fontWeight={'700'}
                    fontSize={'17px'}
                    lineHeight={'23px'}
                    color={'white'}
                    textTransform={'capitalize'}
                  >
                    0 FTM{' '}
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
                    0 FTM
                  </Text>

                  <Text
                    ml={'40px'}
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
                <Flex mt={'20px'} gap={'100px'}>
                  <Text
                    fontFamily={'Nunito'}
                    fontWeight={'700'}
                    fontSize={'17px'}
                    lineHeight={'23px'}
                    color={'white'}
                    textTransform={'capitalize'}
                  >
                    No
                  </Text>
                  <Text
                    ml={'-27px'}
                    fontFamily={'Nunito'}
                    fontWeight={'700'}
                    fontSize={'17px'}
                    lineHeight={'23px'}
                    color={'white'}
                    textTransform={'capitalize'}
                  >
                    0 FTM{' '}
                  </Text>
                  <Text
                    ml={'31px'}
                    fontFamily={'Nunito'}
                    fontWeight={'700'}
                    fontSize={'17px'}
                    lineHeight={'23px'}
                    color={'white'}
                    textTransform={'capitalize'}
                  >
                    0 FTM{' '}
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
                    0 FTM
                  </Text>

                  <Text
                    ml={'40px'}
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
              <Flex justifyContent={'center'} alignItems={'center'}>
                <Button
                  onClick={onOpen}
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
                  Bet Now
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default BetsModule
