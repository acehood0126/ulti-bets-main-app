/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'
import { getEllipsisTxt } from '../utils/formatters'
import { useEffect, useState } from 'react'
import { getExplorer } from '../utils/networks'
import {
  connectors,
  walletconnect,
  resetWalletConnector,
  injected,
  walletlink,
} from '../utils/config'
import { useWeb3React } from '@web3-react/core'
import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useClipboard,
} from '@chakra-ui/react'
import { CheckCircleIcon, CopyIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { ethers } from 'ethers'
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css'
import '@fontsource/nunito'
import { AbstractConnector } from '@web3-react/abstract-connector'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any

const styles = {
  account: {
    height: '42px',
    padding: '0 15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    borderRadius: '12px',
    backgroundColor: 'rgb(244, 244, 244)',
    cursor: 'pointer',
  },

  connector: {
    alignItems: 'center',
    display: 'flex',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    flexDirection: 'column' as any,
    height: 'auto',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px 5px',
    cursor: 'pointer',
  },
}

function Account() {
  const { account, activate, deactivate, chainId } = useWeb3React()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { hasCopied, onCopy } = useClipboard(account as string)

  const ACCOUNT_KEY = 'LAST_ACTIVE_ACCOUNT'
  const CONNECTOR_KEY = 'LAST_WALLET_CONNECTOR'

  const connetHandler = async (provider: AbstractConnector) => {
    try {
      if (provider === walletconnect) {
        resetWalletConnector(walletconnect)
        await activate(provider)
      }
      if (provider === injected) {
        if (window.ethereum === undefined) {
          alert('Please install metamask ')
        }
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          'any'
        )
        // Prompt user for account connections
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
        const last = await signer.getAddress()
        setLastConnector(last)
        activate(injected)

        setLastActiveAccount(last)
      }

      if (provider === walletlink) {
        await activate(provider)
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log(e.message)
    }
  }

  const setLastActiveAccount = (account: string) => {
    localStorage?.setItem(ACCOUNT_KEY, account)
  }

  const clearLastActiveAccount = () => {
    localStorage?.removeItem(ACCOUNT_KEY)
  }

  const getLastActiveAccount = () => {
    return localStorage?.getItem(ACCOUNT_KEY)
  }

  const setLastConnector = (connector: string) => {
    localStorage?.setItem(CONNECTOR_KEY, connector)
  }

  const getLastConnector = () => {
    return localStorage?.getItem(CONNECTOR_KEY)
  }

  useEffect(() => {
    const lastConnector = getLastConnector()
    const lastActiveAccount = getLastActiveAccount()

    if (lastActiveAccount && lastConnector) {
      activate(injected)
    }
    //eslint-disable-next-line
  }, [])

  if (!account) {
    return (
      <>
        <Button
          onClick={onOpen}
          variant={'solid'}
          width={['150px', '150px', '150x', '240px']}
          height={['35px', '35px', '35px', '41px']}
          borderRadius={['35px', '35px', '35px', '35px']}
          border="1px solid #FC541C"
          backgroundColor={'#1F1F1F'}
          color={'white'}
          _hover={{
            backgroundColor: '#FC541C',
          }}
          _selected={{
            backgroundColor: '#FC541C',
          }}
        >
          <Text
            fontSize={['14px', '14px', '16px', '18px']}
            fontFamily={'Nunito'}
            fontWeight="700px"
            lineHeight={'25px'}
          >
            Connect Wallet
          </Text>
        </Button>

        <Modal
          motionPreset="slideInBottom"
          size={'md'}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <Box
              style={{
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Text fontSize="20px" fontWeight={'semibold'}>
                {' '}
                Connect Wallet
              </Text>
            </Box>{' '}
            <ModalCloseButton />
            <ModalBody>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                {connectors.map(({ title, icon, provider }, key) => (
                  <div
                    style={styles.connector}
                    key={title}
                    onClick={async () => {
                      await connetHandler(provider)
                    }}
                  >
                    <Image src={icon} alt={title} width={50} height={50} />
                    <Text style={{ fontSize: '16px' }}>{title}</Text>
                  </div>
                ))}
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

  return (
    <>
      <Button
        zIndex={10}
        variant={'solid'}
        width={['150px', '120px', '120px', '240px']}
        height={['35px', '35px', '35px', '41px']}
        borderRadius={['35px', '35px', '30px', '35px']}
        border="1px solid #FC541C"
        backgroundColor={'#1F1F1F'}
        color={'white'}
        _hover={{
          backgroundColor: '#FC541C',
        }}
        _selected={{
          backgroundColor: '#FC541C',
        }}
        onClick={() => setIsModalVisible(true)}
      >
        <Text
          ml={'5px'}
          fontSize={['14px', '14px', '15px', '18px']}
          fontFamily={'Nunito'}
          fontWeight="700px"
          lineHeight={'25px'}
        >
          {getEllipsisTxt(account, 5)}
        </Text>
      </Button>

      <Modal
        motionPreset="slideInBottom"
        variant="wide"
        isCentered
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        size={'sm'}
      >
        <ModalOverlay />
        <ModalContent borderRadius="3xl">
          <ModalHeader px={4} fontSize="lg" fontWeight="medium">
            Account
          </ModalHeader>
          <ModalCloseButton fontSize="sm" />
          <ModalBody pt={0} px={4}>
            <Box borderRadius="3xl" border="1px" px={5} pt={4} pb={2} mb={3}>
              <Flex justifyContent="space-between" alignItems="center" mb={3}>
                <Text fontSize="md" fontWeight={'normal'}>
                  Connected with Wallet
                </Text>
                <Button
                  size="sm"
                  border="1px solid #FC541C"
                  borderRadius="3xl"
                  backgroundColor={'#1F1F1F'}
                  fontSize="13px"
                  fontWeight="normal"
                  px={2}
                  height="26px"
                  onClick={() => {
                    deactivate()
                    clearLastActiveAccount()
                  }}
                  _hover={{
                    backgroundColor: '#FC541C',
                  }}
                  _selected={{
                    backgroundColor: '#FC541C',
                  }}
                >
                  Change
                </Button>
              </Flex>
              <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  ml="4"
                  lineHeight="1.1"
                >
                  {account && getEllipsisTxt(account, 5)}
                </Text>
              </Flex>
              <Flex alignContent="center" width="200">
                <Button
                  textDecoration={'none'}
                  _hover={{
                    textDecoration: 'none',
                  }}
                  _focus={{
                    border: 'none',
                    textDecoration: 'none',
                  }}
                  onClick={onCopy}
                  fontSize={'16px'}
                  fontWeight={'normal'}
                  variant="ghost"
                >
                  {hasCopied ? <CheckCircleIcon /> : <CopyIcon />}
                  {hasCopied ? ` copied` : `copy Address`}
                </Button>
                <Link
                  fontWeight={'normal'}
                  fontSize="16px"
                  display="flex"
                  alignItems="center"
                  href={`${getExplorer(chainId as number)}/address/${account}`}
                  isExternal
                  marginLeft={'3'}
                >
                  <Text> View on Explorer</Text>{' '}
                  <ExternalLinkIcon marginLeft={'.2px'} />
                </Link>
              </Flex>
            </Box>
            <Button
              variant={'solid'}
              style={{
                width: '100%',
                marginTop: '10px',
                marginBottom: '10px',
                borderRadius: '0.8rem',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
              border="1px solid #FC541C"
              backgroundColor={'#1F1F1F'}
              color={'white'}
              _hover={{
                backgroundColor: '#FC541C',
              }}
              _selected={{
                backgroundColor: '#FC541C',
              }}
              onClick={() => {
                deactivate()
                setIsModalVisible(false)
                clearLastActiveAccount()
              }}
            >
              <Text> Disconnect </Text>{' '}
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Account
