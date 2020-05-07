import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import Cards2 from './components/Cards/Cards2'
import { fetchData } from './api/';
import styles from './App.module.css';
import image from './images/image.png';
import Navbar from 'react-bootstrap/Navbar'
import Typography from '@material-ui/core/Typography'

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
        <Navbar bg="#22282A" variant="dark">
          <Navbar.Brand >
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          </Navbar.Brand>    
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              COVID-19 Updates as of {this.state.curTime}
            </Navbar.Text>
          </Navbar.Collapse>     
        </Navbar>
        </div>
        <div className={styles.container}>
        <h1 style={{fontFamily: "Audiowide", color:"#f5f5f5"}}>
        {country.toUpperCase()}  
        </h1>
        <Cards data={data} />
        <Cards2 data={data} />
        <Chart data={data} country={country} /> 
      </div>
      </div>
      
    );
  }
}

export default App;