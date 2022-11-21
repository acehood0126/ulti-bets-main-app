import { Grid } from '@chakra-ui/react'
import React from 'react'
import { BettingData } from '../../../constants/BettingData'
import Bettingcard from './Bettingcard'

const BettingCardList = () => {
  return (
    <Grid
      gridTemplateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
      ]}
      mt="20px"
      gap={'50px'}
      ml={['40px', '30px', '20px', '5px']}
      p={'10px'}
    >
      {BettingData.map((item) => (
        <Bettingcard
          id={item.id}
          key={item.id}
          series={item.series}
          team1={item.team1}
          team2={item.team2}
          bettingLogo={item.bettingLogo}
          bettingType={item.bettingType}
          bettingTime={item.bettingTime}
          bettingDate={item.bettingDate}
          bettingDeadline={item.bettingDeadline}
          bettingVolume={item.bettingVolume}
        />
      ))}
    </Grid>
  )
}

export default BettingCardList
