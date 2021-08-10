import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardItem from '../components/CardItem';

export default function Card({ cardInfo }) {
  return (
	<Container>
      <Grid container spacing={3}>
        {cardInfo.map(cardInfo => (
          <Grid item key={cardInfo.id} xs={12} sm={6} md={3} lg={3}>
            <CardItem cardInfo={cardInfo} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
