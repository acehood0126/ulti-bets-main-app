import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const NewProposal = () => {
  return (
    <Flex
      width={'312px'}
      height={'160px'}
      justifyContent={'center'}
      alignItems={'center'}
      borderRadius={'5px'}
      border={'1px solid #FFFFFF'}
      direction={'column'}
      gap={'30px'}
    >
      <Text
        fontFamily={'Inter'}
        fontStyle={'normal'}
        fontWeight={700}
        fontSize={'20px'}
        lineHeight={'24px'}
        textTransform={'capitalize'}
        color={'#FFFFFF'}
      >
        Add a new proposal
      </Text>
      <Button
        mb={'30px'}
        // width={'145px'}
        background={'unset'}
        borderRadius={'34px'}
        border={'1px solid #FC541C'}
        _hover={{
          background: '#FC541C',
        }}
        // onClick={() => router.push('/squid-competition/one/round-one')}
      >
        submit proposal
      </Button>
    </Flex>
  )
}

export default NewProposal
