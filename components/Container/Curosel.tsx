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

const HomeCurosel = () => {
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
    <div data-sal-delay="500" data-sal={'slide-up'} data-sal-duration="800">
      <Carousel
        transitionTime={600}
        interval={12000}
        showStatus={false}
        autoPlay
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
          position={'relative'}
          id="home-curosel-1"
          height={'300px'}
          width={'100%'}
          direction={['column-reverse', 'column-reverse', 'row', 'row']}
          style={{
            background: '#1F1F1F',
            boxShadow: 'inset 0px 4px 60px 5px #000000',
          }}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            width={['300px', '100%', '250px', '276px']}
            height={['300px', '100%', '250px', '276px']}
            left={['80px', '-50px', '40px', '341px']}
            top={['30px', '50px', '30px', '5px']}
            opacity={0.8}
            style={{
              background:
                'radial-gradient(50% 50% at 50% 50%, rgba(225, 137, 51, 0.4) 0%, rgba(225, 136, 51, 0.4) 0.01%, rgba(190, 59, 49, 0) 100%)',
            }}
            position={'absolute'}
          />

          <Flex>
            <Box></Box>
            <Image
              src={'images/svgs/slider/UltiBetsTransparent.svg'}
              alt="UltiBets Logo"
            />
          </Flex>
          <Heading
            // fontFamily={'Inter'}
            fontStyle={'normal'}
            fontSize={['35px', '35px', '35px', '40px']}
            fontWeight={700}
            textAlign={'start'}
            m={'20px'}
            mt={'30px'}
            height="96px"
            width="324px"
          >
            UltiBets Mainnet Launch
          </Heading>
        </Flex>
        <Flex
          px={['20px', '20px', '100px', '100px']}
          id="home-curosel-2"
          width={'100%'}
          height={'300px'}
          direction={['column', 'column', 'row', 'row']}
          justifyContent={[
            'center',
            'center',
            'space-between',
            'space-between',
          ]}
          alignItems={['center', 'center', 'center', 'center']}
          background={
            'linear-gradient(360deg, #FF720A 0%, rgba(255, 114, 10, 0) 100%)'
          }
          boxShadow="inset 0px 4px 60px 5px #000000"
        >
          <Flex direction={'column'} gap={'20px'}>
            <Text
              // fontFamily={'Inter'}
              fontStyle={'bold'}
              fontSize={['35px', '35px', '35px', '40px']}
              fontWeight={700}
              textAlign={'start'}
              height={'96px'}
              width={'324px'}
              lineHeight={'48px'}
              color={'#FFFFFF'}
            >
              UltiBets Merch Shop Now
            </Text>
            <Button
              _hover={{
                background: '#FC541C',
              }}
              height={['40px', '40px', '40px', '54px']}
              width={['150px', '100px', '100px', '200px']}
              boxSizing={'border-box'}
              border={'1px solid #FFFFFF'}
              borderRadius={'45px'}
              background={'unset'}
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
                Shop Now
              </Text>
            </Button>
          </Flex>
          <Flex>
            <Image
              ml={'90px'}
              src="/images/svgs/slider/mug.svg"
              alt="mug"
              width={['100px', '200px', '200px', '270px']}
              height={['100px', '200px', '200px', '270px']}
            />
          </Flex>
        </Flex>

        <Flex
          px={['20px', '20px', '130px', '130px']}
          id="home-curosel-4"
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
          width={'100%'}
          direction={['column', 'column', 'row', 'row']}
          justifyContent={[
            'center',
            'center',
            'space-between',
            'space-between',
          ]}
          alignItems={['center', 'center', 'center', 'center']}
          background={
            'linear-gradient(360deg, #FF720A 0%, rgba(255, 114, 10, 0) 100%)'
          }
          boxShadow="inset 0px 4px 60px 5px #000000"
        >
          <Flex mt={'30px'} direction={'column'} gap={'20px'}>
            <Heading
              fontStyle={'normal'}
              fontWeight={700}
              textAlign={'start'}
              // height={'96px'}
              width={'310px'}
              lineHeight={'48px'}
              color={'#FFFFFF'}
              fontSize={['35px', '35px', '35px', '40px']}
            >
              $UTBETS Token Buy now{' '}
            </Heading>
            <Button
              _hover={{
                background: '#FC541C',
              }}
              height={['40px', '40px', '40px', '54px']}
              width={['150px', '100px', '100px', '200px']}
              boxSizing={'border-box'}
              bottom={'0px'}
              border={'1px solid #FFFFFF'}
              borderRadius={'45px'}
              background={'unset'}
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
                Buy $UTBETS{' '}
              </Text>
            </Button>
          </Flex>
          <Flex alignItems={'center'}>
            {' '}
            <Image
              mb={['30px', '0px', '0px', '0px']}
              ml={['160px', '160px', '0px', '0px']}
              src="/images/svgs/slider/man.svg"
              alt="mug"
              width={['120px', '200px', '200px', '272px']}
              height={['120px', '200px', '200px', '230px']}
            />
          </Flex>
        </Flex>

        <Flex
          id="home-curosel-5"
          height={'300px'}
          width={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          // boxShadow="inset 0px 4px 60px 5px #000000"
          background={[
            'url(/images/svgs/slider/slider-bg-4-mobile.svg)',
            'url(/images/svgs/slider/slider-bg-4-mobile.svg)',
            'url(/images/svgs/slider/slider-4-bg.svg)',
            'url(/images/svgs/slider/slider-4-bg.svg)',
          ]}
        >
          <Flex direction={'column'}>
            <Heading>Follow UltiBets on</Heading>
            <CuroselLink />
          </Flex>
        </Flex>
      </Carousel>
    </div>
  )
}

export default HomeCurosel
