import React from 'react';
import cx from 'classnames';
import styles from '../About/About.module.css'
import covid from '../bacteria.png'
import globe from '../globe.png'
import question from '../question.png'
import { Grid } from '@material-ui/core';

class About extends React.Component{
    render(){
        return(
          <div className={styles.container}>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} md={3}>
              <div className={styles.card} style={{backgroundColor:"#1F2426",margin:"10px"}}>
                <div style={{margin:"10px", textAlign:"center"}}>
                  <img src={covid} style={{height:"70px", width:"70px"}} />
                  <h2 style={{color:"white"}}>About<br></br></h2>
                  <h5 style={{color:"#9B9A9A"}}>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</h5>
                  <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses" target="_blank" style={{color:"green"}}>Stay Informed</a>
                </div>
              </div>
              </Grid>
              <Grid item xs={12} md={3}>              
                <div className={styles.card} style={{backgroundColor:"#1F2426",margin:"10px"}}>
                  <div style={{margin:"10px", textAlign:"center"}}>
                    <img src={globe} style={{height:"70px", width:"70px"}} />
                    <h2 style={{color:"white"}}>Travel<br></br></h2>
                    <h5 style={{color:"#9B9A9A"}}>Countries around the world are increasingly adopting sweeping measures to contain the new coronavirus.</h5>
                    <a href="https://blog.wego.com/covid19-travel-restrictions-by-destination-country/" target="_blank" style={{color:"green"}}>Travel Bans</a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={3}>
              <div className={styles.card} style={{backgroundColor:"#1F2426",margin:"10px"}}>
                <div style={{margin:"10px", textAlign:"center"}}>
                  <img src={question} style={{height:"70px", width:"70px"}} />
                  <h2 style={{color:"white"}}>History<br></br></h2>
                  <h5 style={{color:"#9B9A9A"}}>Here’s what we know about the virus that was first detected in Wuhan, China, in late 2019 and has set off a global pandemic.</h5>
                  <a href="https://www.devex.com/news/covid-19-a-timeline-of-the-coronavirus-outbreak-96396" target="_blank" style={{color:"green"}}>View History</a>
                </div>
              </div>
              </Grid>
            </Grid>
          </div>
        )
    }
}

export default About