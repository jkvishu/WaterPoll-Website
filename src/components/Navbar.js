import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import logo from '../res/logo.png';
import option from '../res/option.svg';
import search from '../res/search.svg';

export default function Navbar(props) {
    const [searchText, setSearchText] = useState("");
    const water = useSelector(state => state.water.data);

    const makeQueryRequest = async (e) => {
        e.preventDefault();
        if (searchText != "") {
            for (let i = 0; i < water.length; i++) {
                const element = water[i];
                console.log(element);
                console.log(element.monitoring_location.includes(searchText.toUpperCase()));
                if (element.monitoring_location.includes(searchText.toUpperCase())) {
                    props.setSearchData(element);
                    break;
                }
            }
        }
    }

    return (
        <div className="navbar">
            <div className="navbar-item">
                <button className='option-btn'>
                    <img src={option} alt="options" />
                </button>
            </div>
            <div className="navbar-item">
                <img className='logo' src={logo} alt="Logo" />
                <span className='logo-text'>WaterPoll</span>
            </div>
            <div className="navbar-item">
                <input type="text" name="search" id="search" className='search' placeholder='Search for City.' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className='option-btn' style={{ "margin-left": "10px" }} onClick={makeQueryRequest}>
                    <img src={search} alt="options" />
                </button>
            </div>
        </div>
    )
}
