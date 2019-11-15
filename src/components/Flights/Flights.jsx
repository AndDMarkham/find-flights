import React, { useState, useEffect } from 'react'

import Flight from './Flight.jsx'
import ErrorMessage from './ErrorMessage.jsx'

const flightsStyle = {
    border: '1px solid black',
    borderRadius: '2rem',
    height: '80vh',
    width: '80vw',
    padding: '2rem'
}

const flightsContainerStyle = {
    display: 'flex',
    flexFlow: 'column wrap',
    width: '75vw',
    height: '75vh'
}

const Flights = props => {
    const { arrival, departure, flightData, loading } = props;
    
    return (
        <div style={flightsStyle}>
            <h2>Flights from {departure} to {arrival}</h2>
            <div style={flightsContainerStyle}>
                {
                    loading ? <h3>Loading...</h3> : ( flightData.length === 0 ? <ErrorMessage /> : <Flight flights={flightData} /> )
                }
            </div>
        </div>
    )
}

export default Flights;