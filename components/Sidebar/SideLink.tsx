import { Box, Flex, Image, Tooltip } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

type SideLinkProps = {
  name: string
  href?: string
  icon: string
}
const SideLink = ({ name, href, icon }: SideLinkProps) => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <Flex
      ml={'7px'}
      borderRadius={'5px'}
      background={currentRoute === href ? '#FF9100' : 'unset'}
      _hover={{
        background: '#FF9100',
      }}
      onClick={() => router.push({ pathname: href })}
    >
      <Tooltip
        label={name}
        hasArrow
        bg={'#FF9100'}
        placement={'top'}
        borderRadius={'5px'}
      >
        <Image
          px={icon === '/images/svgs/sidebar/nfl.svg' ? '4px' : '1px'}
          py={'1px'}
          src={icon}
          alt={name}
          width={['30px', '30px', '42px', '42px']}
          height={['30px', '30px', '42px', '42px']}
        />
      </Tooltip>
    </Flex>
  )
}

export default SideLink
