import React from 'react'

import Flight from './Flight.jsx'

const flightsStyle = {
    display: 'flex',
    flexFlow: 'column wrap',
    border: '1px solid black',
    borderRadius: '2rem',
    height: '90vh',
    width: '90vw',
    padding: '2rem'
}

const Flights = props => {

    const flights = [
        {
            departure_time: '09:00',
            arrival_time: '11:00'
        },
        {
            departure_time: '13:30',
            arrival_time: '15:30'
        }
    ]

    return (
        <div style={flightsStyle}>
            <h2>Flights from Prague to Valencia</h2>
            <Flight flights={flights} />
        </div>
    )
}

export default Flights;