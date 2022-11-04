import { Icon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import '@fontsource/inter'
import { CSSProperties } from 'react'
import CuroselLink from './CuroselLink'
import { useRouter } from 'next/router'

const SquidCurosel = () => {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const arrowStyles: any = {
    position: 'absolute',
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    zIndex: 2,
  }

  const indicatorStyles: CSSProperties = {
    background: '#fff',
    display: 'inline-block',
    margin: '0 8px',
    borderRadius: '50%',
    width: '13px',
    height: '13px',
  }

  return (
    <div
    //  data-sal-delay="500" data-sal={'slide-up'} data-sal-duration="800"
    >
      <Carousel
        transitionTime={600}
        interval={12000}
        showStatus={false}
        // autoPlay
        showArrows
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{ ...indicatorStyles, background: '#E18933' }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            )
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          )
        }}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <Icon
              as={AiOutlineLeft}
              onClick={onClickHandler}
              style={{ ...arrowStyles, left: 15 }}
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <Icon
              name="chevron-right"
              onClick={onClickHandler}
              style={{ ...arrowStyles, right: 15 }}
              as={AiOutlineRight}
            />
          )
        }
        showThumbs={false}
        infiniteLoop={true}
      >
        <Flex
          px={['20px', '20px', '130px', '130px']}
          id="home-curosel-1"
          height={'300px'}
          width={'100%'}
          justifyContent={[
            'center',
            'center',
            'space-between',
            'space-between',
          ]}
          direction={['column', 'column', 'row', 'row']}
          alignItems={'center'}
          boxShadow="inset 0px 4px 60px 5px #000000"
        >
          <Flex direction={'column'}>
            <Flex justifyContent={'center'}>
              <Heading
                fontStyle={'normal'}
                fontWeight={700}
                textAlign={'start'}
                height={['unset', 'unset', '30px', '80px']}
                width={['250px', '250px', 'unset', 'unset']}
                lineHeight={'48px'}
                color={'#FFFFFF'}
                fontSize={['35px', '35px', '35px', '40px']}
              >
                Squid Bet Competition #1
              </Heading>

              <Box
                mt={['53px', '20px', '0px', '5px']}
                ml={'10px'}
                width={'39px'}
                height={'39px'}
                background={"url('/images/svgs/slider/squid-icon.svg')"}
              ></Box>
            </Flex>
            <Button
              mt={['5px', '5px', '0', '0']}
              height={['40px', '40px', '40px', '54px']}
              width={['130px', '100px', '100px', '177px']}
              mb={['0px', '0px', '20px', '20px']}
              boxSizing={'border-box'}
              bottom={'0px'}
              border={'1px solid #FFFFFF'}
              borderRadius={'45px'}
              background={'unset'}
              _hover={{
                background: '#FC541C',
              }}
              onClick={() => {
                router.push('/squid-competition/one/round-one')
              }}
            >
              <Text
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={700}
                fontSize={['16px', '16px', '16px', '24px']}
                lineHeight={'30px'}
                textTransform={'capitalize'}
                color={'#FFFFFF'}
              >
                register now{' '}
              </Text>
            </Button>
          </Flex>
          <Flex ml={['120px', '40px', '0', '0']}>
            <Image
              src="/images/svgs/slider/squid-1.svg"
              alt="squid"
              width={['117px', '200px', '200px', '272px']}
              height={['117px', '200px', '200px', '272px']}
            />
          </Flex>
        </Flex>

        <Flex
          px={['20px', '20px', '130px', '130px']}
          id="home-curosel-2"
          height={'300px'}
          width={'100vw'}
          justifyContent={[
            'center',
            'center',
            'space-between',
            'space-between',
          ]}
          direction={['column', 'column', 'row', 'row']}
          alignItems={'center'}
          background={'url(images/svgs/slider/squid-sider/squid-two.svg)'}
          backgroundPosition={'center'}
          backgroundRepeat={'no-repeat'}
          backgroundSize={'cover'}
        >
          <Flex direction={'column'}>
            <Flex justifyContent={'center'}>
              <Heading
                fontStyle={'normal'}
                fontWeight={700}
                textAlign={'start'}
                height={['unset', 'unset', '30px', '80px']}
                width={['250px', '250px', 'unset', 'unset']}
                lineHeight={'48px'}
                color={'#FFFFFF'}
                fontSize={['35px', '35px', '35px', '40px']}
              >
                Squid Bet Competition #2
              </Heading>

              <Box
                mt={['53px', '20px', '0px', '5px']}
                ml={'10px'}
                width={'39px'}
                height={'39px'}
                background={"url('/images/svgs/slider/squid-icon.svg')"}
              ></Box>
            </Flex>
            <Button
              mt={['5px', '5px', '0', '0']}
              height={['40px', '40px', '40px', '54px']}
              width={['130px', '100px', '100px', '177px']}
              mb={['0px', '0px', '20px', '20px']}
              boxSizing={'border-box'}
              bottom={'0px'}
              border={'1px solid #FFFFFF'}
              borderRadius={'45px'}
              background={'unset'}
              _hover={{
                background: '#FC541C',
              }}
              onClick={() => {
                router.push('/squid-competition/one/round-two')
              }}
            >
              <Text
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={700}
                fontSize={['16px', '16px', '16px', '24px']}
                lineHeight={'30px'}
                textTransform={'capitalize'}
                color={'#FFFFFF'}
              >
                register now{' '}
              </Text>
            </Button>
          </Flex>
          <Flex ml={['120px', '40px', '0', '0']}>
            <Image
              src="/images/svgs/slider/squid-1.svg"
              alt="squid"
              width={['117px', '200px', '200px', '272px']}
              height={['117px', '200px', '200px', '272px']}
            />
          </Flex>
        </Flex>
        <Flex
          px={['20px', '20px', '130px', '130px']}
          id="home-curosel-3"
          height={'300px'}
          width={'100vw'}
          justifyContent={[
            'center',
            'center',
            'space-between',
            'space-between',
          ]}
          direction={['column', 'column', 'row', 'row']}
          alignItems={'center'}
          background={'url(images/svgs/slider/squid-sider/squid-three.svg)'}
          backgroundPosition={'center'}
          backgroundRepeat={'no-repeat'}
          backgroundSize={'cover'}

          //   boxShadow="inset 0px 4px 60px 5px #000000"
        >
          <Flex direction={'column'}>
            <Flex justifyContent={'center'}>
              <Heading
                fontStyle={'normal'}
                fontWeight={700}
                textAlign={'start'}
                height={['unset', 'unset', '30px', '80px']}
                width={['250px', '250px', 'unset', 'unset']}
                lineHeight={'48px'}
                color={'#FFFFFF'}
                fontSize={['35px', '35px', '35px', '40px']}
              >
                Squid Bet Competition #3
              </Heading>

              <Box
                mt={['53px', '20px', '0px', '5px']}
                ml={'10px'}
                width={'39px'}
                height={'39px'}
                background={"url('/images/svgs/slider/squid-icon.svg')"}
              ></Box>
            </Flex>
            <Button
              mt={['5px', '5px', '0', '0']}
              height={['40px', '40px', '40px', '54px']}
              width={['130px', '100px', '100px', '177px']}
              mb={['0px', '0px', '20px', '20px']}
              boxSizing={'border-box'}
              bottom={'0px'}
              border={'1px solid #FFFFFF'}
              borderRadius={'45px'}
              background={'unset'}
              _hover={{
                background: '#FC541C',
              }}
              onClick={() => {
                router.push('/squid-competition/one/round-three')
              }}
            >
              <Text
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={700}
                fontSize={['16px', '16px', '16px', '24px']}
                lineHeight={'30px'}
                textTransform={'capitalize'}
                color={'#FFFFFF'}
              >
                register now{' '}
              </Text>
            </Button>
          </Flex>
          <Flex ml={['120px', '40px', '0', '0']}>
            <Image
              src="/images/svgs/slider/squid-1.svg"
              alt="squid"
              width={['117px', '200px', '200px', '272px']}
              height={['117px', '200px', '200px', '272px']}
            />
          </Flex>
        </Flex>
        <Flex
          px={['20px', '20px', '130px', '130px']}
          id="home-curosel-4"
          height={'300px'}
          width={'100vw'}
          justifyContent={[
            'center',
            'center',
            'space-between',
            'space-between',
          ]}
          direction={['column', 'column', 'row', 'row']}
          alignItems={'center'}
          background={'url(images/svgs/slider/squid-sider/squid-four.svg)'}
          backgroundPosition={'center'}
          backgroundRepeat={'no-repeat'}
          backgroundSize={'cover'}

          //   boxShadow="inset 0px 4px 60px 5px #000000"
        >
          <Flex direction={'column'}>
            <Flex justifyContent={'center'}>
              <Heading
                fontStyle={'normal'}
                fontWeight={700}
                textAlign={'start'}
                height={['unset', 'unset', '30px', '80px']}
                width={['250px', '250px', 'unset', 'unset']}
                lineHeight={'48px'}
                color={'#FFFFFF'}
                fontSize={['35px', '35px', '35px', '40px']}
              >
                Squid Bet Competition #4
              </Heading>

              <Box
                mt={['53px', '20px', '0px', '5px']}
                ml={'10px'}
                width={'39px'}
                height={'39px'}
                background={"url('/images/svgs/slider/squid-icon.svg')"}
              ></Box>
            </Flex>
            <Button
              mt={['5px', '5px', '0', '0']}
              height={['40px', '40px', '40px', '54px']}
              width={['130px', '100px', '100px', '177px']}
              mb={['0px', '0px', '20px', '20px']}
              boxSizing={'border-box'}
              bottom={'0px'}
              border={'1px solid #FFFFFF'}
              borderRadius={'45px'}
              background={'unset'}
              _hover={{
                background: '#FC541C',
              }}
              onClick={() => {
                router.push('/squid-competition/one/round-four')
              }}
            >
              <Text
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={700}
                fontSize={['16px', '16px', '16px', '24px']}
                lineHeight={'30px'}
                textTransform={'capitalize'}
                color={'#FFFFFF'}
              >
                register now{' '}
              </Text>
            </Button>
          </Flex>
          <Flex ml={['120px', '40px', '0', '0']}>
            <Image
              src="/images/svgs/slider/squid-1.svg"
              alt="squid"
              width={['117px', '200px', '200px', '272px']}
              height={['117px', '200px', '200px', '272px']}
            />
          </Flex>
        </Flex>
        <Flex
          px={['20px', '20px', '130px', '130px']}
          id="home-curosel-5"
          height={'300px'}
          width={'100vw'}
          justifyContent={[
            'center',
            'center',
            'space-between',
            'space-between',
          ]}
          direction={['column', 'column', 'row', 'row']}
          alignItems={'center'}
          background={'url(images/svgs/slider/squid-sider/squid-five.svg)'}
          backgroundPosition={'center'}
          backgroundRepeat={'no-repeat'}
          backgroundSize={'cover'}

          //   boxShadow="inset 0px 4px 60px 5px #000000"
        >
          <Flex direction={'column'}>
            <Flex justifyContent={'center'}>
              <Heading
                fontStyle={'normal'}
                fontWeight={700}
                textAlign={'start'}
                height={['unset', 'unset', '30px', '80px']}
                width={['250px', '250px', 'unset', 'unset']}
                lineHeight={'48px'}
                color={'#FFFFFF'}
                fontSize={['35px', '35px', '35px', '40px']}
              >
                Squid Bet Competition #5
              </Heading>

              <Box
                mt={['53px', '20px', '0px', '5px']}
                ml={'10px'}
                width={'39px'}
                height={'39px'}
                background={"url('/images/svgs/slider/squid-icon.svg')"}
              ></Box>
            </Flex>
            <Button
              mt={['5px', '5px', '0', '0']}
              height={['40px', '40px', '40px', '54px']}
              width={['130px', '100px', '100px', '177px']}
              mb={['0px', '0px', '20px', '20px']}
              boxSizing={'border-box'}
              bottom={'0px'}
              border={'1px solid #FFFFFF'}
              borderRadius={'45px'}
              background={'unset'}
              _hover={{
                background: '#FC541C',
              }}
              onClick={() => {
                router.push('/squid-competition/one/round-five')
              }}
            >
              <Text
                fontFamily={'Nunito'}
                fontStyle={'normal'}
                fontWeight={700}
                fontSize={['16px', '16px', '16px', '24px']}
                lineHeight={'30px'}
                textTransform={'capitalize'}
                color={'#FFFFFF'}
              >
                register now{' '}
              </Text>
            </Button>
          </Flex>
          <Flex ml={['120px', '40px', '0', '0']}>
            <Image
              src="/images/svgs/slider/squid-1.svg"
              alt="squid"
              width={['117px', '200px', '200px', '272px']}
              height={['117px', '200px', '200px', '272px']}
            />
          </Flex>
        </Flex>
      </Carousel>
    </div>
  )
}

export default SquidCurosel
