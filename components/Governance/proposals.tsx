import { Box, Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import ProposalComponent from './ProposalComponent'

const Proposals = () => {
  const proposalsData = [
    {
      id: '1',
      title: 'Add USDT support',
      status: 'Active',
      voteStatus: 'View Only',
      TimeLeft: '2 days 11 hours left',
    },
    {
      id: '2',
      title: 'Add USDT support',
      status: 'Active',
      voteStatus: 'View Only',
      TimeLeft: '2 days 11 hours left',
    },

    {
      id: '3',
      title: 'reduce WBTC reserves by 10!',
      status: 'Passed',
      voteStatus: 'No Vote',
      TimeLeft: 'succed 1 august 2022',
    },
    {
      id: '4',
      title: 'reduce WBTC reserves by 10!',
      status: 'Passed',
      voteStatus: 'No Vote',
      TimeLeft: 'succed 1 august 2022',
    },

    {
      id: '5',
      title: 'add FTM support',
      status: 'Failed',
      voteStatus: 'No Vote',
      TimeLeft: 'succed 1 august 2022',
    },
    {
      id: '6',
      title: 'add FTM support',
      status: 'Failed',
      voteStatus: 'No Vote',
      TimeLeft: 'succed 1 august 2022',
    },
  ]

  return (
    <Box>
      <Flex
        justifyContent={'start'}
        alignItems={'start'}
        direction={'column'}
        gap={'25px'}
      >
        <Flex
          ml={'40px'}
          fontFamily={'Inter'}
          fontStyle={'normal'}
          fontWeight={700}
          fontSize={'20px'}
          lineHeight={'24px'}
          textTransform={'capitalize'}
          color={'#FFFFFF'}
        >
          Governance Praposals
        </Flex>
        <Grid
          // 2 columns and 2 rows  template
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={['20px', '20px', '10px', '10px']}
          m={['10px', '20px', '0px', '0px']}
        >
          {proposalsData.map((item) => (
            <ProposalComponent
              key={item.id}
              title={item.title}
              status={item.status}
              voteStatus={item.voteStatus}
              TimeLeft={item.TimeLeft}
            />
          ))}
        </Grid>
      </Flex>{' '}
    </Box>
  )
}

export default Proposals
