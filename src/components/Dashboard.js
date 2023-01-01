import React from 'react';

export default function Dashboard(props) {
    const data = props.searchData;

    return (
        <div className="dashboard-container">
            <div className="title-layer">
                <span>Today</span>
                <span>Factors</span>
            </div>
            <div className="dashboard-main">
                <div className="dashboard-first">
                    <div className="ph">
                        <span className='ph-title'>PH</span>
                        <span className="ph-value">{data.ph.max}</span>
                    </div>
                </div>
                <div className="dashboard-second">
                    <div className="cards">
                        <div className="card">
                            <span className='heading'>Water info</span>
                            <div className="card-in-holder nitrate-holder">
                                <span className='card-in-title nitrate-title'>Nitrate</span>
                                <span className='card-in-value'>{data.nitrate.max}</span>
                            </div>
                            <div className="card-in-holder fluoride-holder">
                                <span className='card-in-title fluoride-title'>Fluoride</span>
                                <span className='card-in-value'>{data.fluoride.max}</span>
                            </div>
                            <div className="card-in-holder arsenic-holder">
                                <span className='card-in-title arsenic-title'>Arsenic</span>
                                <span className='card-in-value'>{data.arsenic.max}</span>
                            </div>
                        </div>
                        <div className="card">
                            <span className='heading'>Total</span>
                            <div className="card-in-holder faecal-coliform-holder">
                                <span className='card-in-title faecal-coliform-title'>Faecal Coliform</span>
                                <span className='card-in-value'>{data.faecal_coliform.max}</span>
                            </div>
                            <div className="card-in-holder total-coliform-holder">
                                <span className='card-in-title total-coliform-title'>Total Coliform</span>
                                <span className='card-in-value'>{data.total_coliform.max}</span>
                            </div>
                            <div className="card-in-holder total-dissolved-holder">
                                <span className='card-in-title total-dissolved-title'>Total Dissolved</span>
                                <span className='card-in-value'>{data.total_dissolved.max}</span>
                            </div>
                        </div>
                    </div>
                    <div className="some-values">
                        <div className="card-in-holder faecal-coliform-holder">
                            <span className='card-in-title faecal-coliform-title' style={{"color": "white"}}>Biological oxygen demand</span>
                            <span className='card-in-value' style={{"marginLeft": "10px", "color": "white"}}>{data.bod.max}</span>
                        </div>
                        <div className="card-in-holder faecal-coliform-holder">
                            <span className='card-in-title faecal-coliform-title' style={{"color": "white"}}>Conductivity</span>
                            <span className='card-in-value' style={{"marginLeft": "10px", "color": "white"}}>{data.conductivity.max}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
