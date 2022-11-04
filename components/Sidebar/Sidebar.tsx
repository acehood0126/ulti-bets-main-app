import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import SideLink from './SideLink'

type SidebarItemProps = {
  id: string
  name: string
  href?: string
  icon: string
}
const Sidebar = () => {
  const router = useRouter()
  const currentRoute = router.pathname

  const SidebarItems: Array<SidebarItemProps> = [
    {
      id: '13',
      name: 'World Cup',
      href: '/world-cup',
      icon: '/images/svgs/sidebar/world-cup.svg',
    },
    {
      id: '1',
      name: 'Soccer',
      href: '/',
      icon: '/images/svgs/sidebar/soccer-ball.svg',
    },
    {
      id: '2',
      name: 'Basketball',
      href: '/basketball',
      icon: '/images/svgs/sidebar/basketball.svg',
    },
    {
      id: '12',
      name: 'US Football',
      href: '/us-football',
      icon: '/images/svgs/sidebar/nfl.svg',
    },
    {
      id: '3',
      name: 'Tennis',
      href: '/tennis',
      icon: '/images/svgs/sidebar/tennis-ball.svg',
    },
    {
      id: '4',
      name: 'Combat Sports',
      href: '/combat-sports',
      icon: '/images/svgs/sidebar/boxing.svg',
    },
    {
      id: '5',
      name: 'Motor Sports',
      href: '/motor-sports',
      icon: '/images/svgs/sidebar/finish-flag.svg',
    },
    {
      id: '6',
      name: 'Cryptos',
      href: '/cryptos',
      icon: '/images/svgs/sidebar/bitcoin.svg',
    },
    {
      id: '7',
      name: 'Stocks',
      href: '/stocks',
      icon: '/images/svgs/sidebar/profit.svg',
    },
    {
      id: '8',
      name: 'Politics',
      href: '/politics',
      icon: '/images/svgs/sidebar/elections.svg',
    },
    {
      id: '9',
      name: 'Movies/TV Series',
      href: '/movies-tv-Series',
      icon: '/images/svgs/sidebar/clapperboard.svg',
    },
    {
      id: '10',
      name: 'Music',
      href: '/music',
      icon: '/images/svgs/sidebar/musical.svg',
    },
    {
      id: '11',
      name: 'Squid Bet Competitions',
      href: '/squid-competition',
      icon: '/images/svgs/sidebar/squid.svg',
    },
  ]
  return (
    <>
      {currentRoute !== '/disclaimer' ? (
        <Flex
          m={'10px'}
          marginTop={
            currentRoute === '/' ||
            currentRoute === '/squid-competition' ||
            currentRoute === '/bets' ||
            currentRoute === '/squid-competition/one/'
              ? '330px'
              : '30px'
          }
          gap={'10px'}
          display={['none', 'none', 'none', 'flex']}
          position="absolute"
          flexDirection={'column'}
          cursor="pointer"
          zIndex={1}
        >
          {SidebarItems?.map((item) => (
            <div key={item.id}>
              <SideLink name={item.name} icon={item.icon} href={item.href} />
            </div>
          ))}
        </Flex>
      ) : null}
    </>
  )
}

export default Sidebar
