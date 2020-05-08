import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import Divider from '@material-ui/core/Divider'
import styles from './Cards2.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
const fatalityRate = deaths.value/confirmed.value*100;
const recoveryRate = recovered.value/confirmed.value*100;
const fr = fatalityRate.toFixed(2);
const rr = recoveryRate.toFixed(2);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.rate)} style={{backgroundColor:"#1F2426"}}>
         {/* <Typography variant="h4" gutterBottom style={{color: "white"}}> {fr}% </Typography> */}
          <h2 style={{fontFamily: "Audiowide", color:"white"}}> {fr} % </h2>
          <Divider />
          <CardContent>
          <h5 style={{fontFamily: "Basic", color:"#9B9A9A"}}> Fatality Rate </h5>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.rate)} style={{backgroundColor:"#1F2426"}}>
        {/* <Typography variant="h4" gutterBottom style={{color: "white"}}> {rr}% </Typography> */}
        <h2 style={{fontFamily: "Audiowide", color:"white"}}> {rr} % </h2>
          <Divider />
          <CardContent>
          <h5 style={{fontFamily: "Basic", color:"#9B9A9A"}}> Recovery Rate </h5>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Info;
