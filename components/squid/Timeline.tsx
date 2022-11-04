/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Box,
  Flex,
  Image,
  keyframes,
  Text,
  usePrefersReducedMotion,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

const Timeline = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  // create object of active  states for each timeline item
  const [active, setActive] = React.useState({
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
    register: false,
    final: false,
    winner: false,
  })

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

  // div {
  //   width: 200px;
  //   height: 200px;
  //   border-radius: 100px;
  //   background-color: #ccc;
  //   animation: glow 1s infinite alternate;
  // }

  // @keyframes glow {
  //   from {
  //     box-shadow: 0 0 10px -10px #aef4af;
  //   }
  //   to {
  //     box-shadow: 0 0 10px 10px #aef4af;
  //   }
  // }

  const glow = keyframes`
  from { box-shadow: 2 0 6px -3px yellow; }
  to { box-shadow: 0 0 6px 3px yellow; }
`

  // from {
  //   box-shadow: 0 0 5px -5px yellow;
  // }
  // to {
  //   box-shadow: 0 0 5px 5px yellow;
  // }

  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${glow} 1s infinite alternate`

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
  const content = [
    {
      id: '1',
      title: 'squid bet registration',
      href: '/squid-competition',
    },
    {
      id: '2',
      title: 'Round I',
      href: '/squid-competition/one/round-one',
    },
    {
      id: '3',
      title: 'Round II',
      href: '/squid-competition/one/round-two',
    },
    {
      id: '4',
      title: 'Round III',
      href: '/squid-competition/one/round-three',
    },
    {
      id: '5',
      title: 'Round IV',
      href: '/squid-competition/one/round-four',
    },
    {
      id: '6',
      title: 'Final Round',
      href: '/squid-competition/one/round-five',
    },
    {
      id: '7',
      title: 'Final vote',
      href: '/squid-competition/one/final-vote',
    },
    {
      id: '8',
      title: 'Squid bet winner page',
      href: '/squid-competition/one/winner-page',
    },
  ]

  return (
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
            right={['20px', '0px', '68px', '0px']}
            mt={'45px'}
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
            mt={'45px'}
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

      <Box
        ref={scrl}
        width={['370px', '100%', '700px', '100%']}
        overflowX={'scroll'}
        overflowY={'hidden'}
        onScroll={scrollCheck}
        // scrollBehavior={'smooth'}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
            background: 'transparent',
            width: '0',
            height: '0',
          },
        }}
      >
        <Box
          width={'84vw'}
          //  width={['1200px', '100%', '100%', '84vw']}
          mt={'30px'}
        >
          <Flex
            width={['1200px', '1200px', '1200px', '84vw']}
            overflowX={'hidden'}
            justifyContent={'space-between'}

            //   gap={'20px'}
          >
            {content.map((item) => (
              <Flex
                key={item.id}
                ml={
                  item.id === '3'
                    ? '20px'
                    : item.id === '4'
                    ? '20px'
                    : item.id === '5'
                    ? '0px'
                    : item.id === '6'
                    ? '0px'
                    : item.id === '7'
                    ? '0px'
                    : '0px'
                }
              >
                <Text
                  fontFamily={'Nunito'}
                  fontWeight={'700'}
                  fontSize={'15px'}
                  lineHeight={'20px'}
                  color={'#E18933'}
                  textTransform={'capitalize'}
                  //   ml={item.id === '7' ? '20px' : '0px'}
                  onClick={() => router.push(item.href)}
                  cursor={'pointer'}
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                >
                  {item.title}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Flex
            mt={'10px'}
            height={'0px'}
            width={['1200px', '100%', '100%', '84vw']}
            border={'1px solid white'}
          ></Flex>
          <Flex
            height={'0px'}
            width={
              currentRoute === '/squid-competition'
                ? '150px'
                : currentRoute === '/squid-competition/one/round-one'
                ? '300px'
                : currentRoute === '/squid-competition/one/round-two'
                ? '450px'
                : currentRoute === '/squid-competition/one/round-three'
                ? '600px'
                : currentRoute === '/squid-competition/one/round-four'
                ? '750px'
                : currentRoute === '/squid-competition/one/round-five'
                ? '900px'
                : currentRoute === '/squid-competition/one/final-vote'
                ? '1050px'
                : currentRoute === '/squid-competition/one/winner-page'
                ? '1200px'
                : '0px'
            }
            border={'1px solid #E18933'}
            mt={'-2px'}
          ></Flex>

          <Flex gap={'140px'} width={['1200px', '1200px', '100%', '100%']}>
            {[...Array(9)].map((dot, index) => (
              <Flex
                key={index}
                mt={'-6px'}
                width={'10px'}
                height={'10px'}
                background={'#FFB11C'}
                justifyContent={'space-between'}
                boxShadow={'0px 0px 8px rgba(0, 0, 0, 0.4)'}
                borderRadius={'50%'}
              />
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Timeline
