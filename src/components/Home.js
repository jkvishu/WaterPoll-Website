import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

export default function Home() {
    const [searchData, setSearchData] = useState({
        "stn_code": 0,
        "monitoring_location": "",
        "state_name": "",
        "temperature": {
          "min": 0,
          "max": 0
        },
        "ph": {
          "min": 0,
          "max": 0
        },
        "conductivity": {
          "min": 0,
          "max": 0
        },
        "bod": {
          "min": 0,
          "max": 0
        },
        "nitrate": {
          "min": 0,
          "max": 0
        },
        "faecal_coliform": {
          "min": 0,
          "max": 0
        },
        "total_coliform": {
          "min": 0,
          "max": 0
        },
        "total_dissolved": {
          "min": 0,
          "max": 0
        },
        "fluoride": {
          "min": 0,
          "max": 0
        },
        "arsenic": {
          "min": 0,
          "max": 0
        }
      });

    return (
        <div className="home-container">
            <Navbar setSearchData={setSearchData}/>
            <Dashboard searchData={searchData}/>
        </div>
    )
}
