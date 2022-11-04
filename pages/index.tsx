import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import BettingCardList from '../components/bets/card/BettingCardList'
import Curosel from '../components/Container/Curosel'

const Home: NextPage = () => {
  const router = useRouter()

  // route to the disclaimer page when user arrives to the site for the first time and only once
  useEffect(() => {
    if (localStorage.getItem('disclaimer') === null) {
      localStorage.setItem('disclaimer', 'true')
      router.push('/disclaimer')
    }
  }, [])

  return (
    <Box>
      <Curosel />
      <Flex justifyContent={'center'} alignItems={'center'}>
        <BettingCardList />
      </Flex>
    </Box>
  )
}

export default Home
