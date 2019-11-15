import React, { useState, useEffect } from 'react';

const flightCardStyle = {
    width: '20rem',
    height: '10rem',
    border: '1px solid black',
    borderRadius: '1rem',
    padding: '1rem',
    fontSize: '12px',
    marginTop: '2rem'
}

const Flight = props => {
    const [loading, setLoading] = useState(true);
    const [flightData, setFlightData] = useState([]);

    return (
        <>
             {
                props.flights.map((flight, key) => (
                    <div style={flightCardStyle}>
                        <h4>Flight number { key + 1 }</h4>
                        <p>Departing at { flight.departure_time }</p>
                        <p>Arriving at { flight.arrival_time }</p>
                    </div>
                ))
            }
        </>
    )
}

export default Flight;