import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import Cards2 from './components/Cards/Cards2'
import { fetchData } from './api/';
import styles from './App.module.css';
import image from './images/image.png';
import Navbar from 'react-bootstrap/Navbar'
import Typography from '@material-ui/core/Typography'
import About from './components/About/About'
import Divider from '@material-ui/core/Divider'
import live from './components/live.png'
import virus from './components/virus.png'

class App extends React.Component {
  state = {
    data: {},
    country: '',
    curTime : new Date().toLocaleString()
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
  
  render() {
    const { data, country } = this.state;
    return (
      <div>
        <div>
        <Navbar>
          <Navbar.Brand >
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          </Navbar.Brand>    
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{color:"#9B9A9A"}}>
              <img src={live} style={{height:"50px", width:"50px"}}/> COVID-19 Updates as of {this.state.curTime}
            </Navbar.Text>
          </Navbar.Collapse>     
        </Navbar>
        </div>
        <div className={styles.container}>
        <img src={virus}  style={{height:"140px", width:"140px", opacity:"0.8"}}/>
        <h1 style={{fontFamily: "Audiowide", color:"#f5f5f5", marginTop:"20px"}}>
        {country.toUpperCase()}  
        </h1>
        <Cards data={data} />
        <Cards2 data={data} />
        <Chart data={data} country={country} /> 
        <div style={{marginTop:"20px"}}>
            <div style={{marginBottom:"10px"}}>
              <hr style={{border:"2px solid #1F2426", borderRadius: "10px", width:"100%"}}></hr>
            </div>
            <h4 style={{fontFamily:"Audiowide", color:"white"}}>NOVEL CORONA VIRUS</h4>
            <hr style={{border:"2px solid white", borderRadius: "10px", width:"30%"}}></hr>  
          </div>
        <About />
        <div style={{color:"#9B9A9A", textAlign:"center", marginTop:"50px"}}>
          <p>Sources: <br></br>API: https://covid19.mathdro.id/api</p>
        </div>
      </div>
      </div>
      
    );
  }
}

export default App;