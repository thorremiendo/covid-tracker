import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { fetchCountries } from '../../api';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <div>
    <div>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple" style={{color:"#9A9DA0"}}>Country</InputLabel>
        <Select native defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} style={{color:"#9A9DA0"}}>
          <option aria-label="None" value="" />
          <option value="">Global</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </Select>
    </FormControl>
    </div>
    </div>
  );
};

export default Countries;
