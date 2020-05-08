import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import Divider from '@material-ui/core/Divider'
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';  
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)} style={{backgroundColor:"#1F2426"}}>
          <h1 style={{fontFamily: "Audiowide", color:"#5BA2CC"}}> <CountUp start={0} end={confirmed.value} duration={2.75} separator="," /> </h1>
          <Divider />
          <CardContent>
          <h5 style={{fontFamily: "Basic", color:"#9B9A9A"}}> Confirmed </h5>

          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)} style={{backgroundColor:"#1F2426"}}>
        <h1 style={{fontFamily: "Audiowide", color:"#D66679"}}> <CountUp start={0} end={deaths.value} duration={2.75} separator="," /> </h1>
          <Divider />
          <CardContent>
          <h5 style={{fontFamily: "Basic", color:"#9B9A9A"}}> Deaths </h5>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)} style={{backgroundColor:"#1F2426"}}>
        <h1 style={{fontFamily: "Audiowide", color:"#71FF2F"}}> <CountUp start={0} end={recovered.value} duration={2.75} separator="," /> </h1>
          <Divider />
          <CardContent>
          <h5 style={{fontFamily: "Basic", color:"#9B9A9A"}}> Recovered </h5>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Info;
