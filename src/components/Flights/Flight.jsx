import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const flightCardStyle = {
    width: '20rem',
    height: '8rem',
    border: '1px solid black',
    borderRadius: '1rem',
    padding: '1rem',
    fontSize: '12px',
    marginTop: '2rem'
}

const Flight = props => {


    return (
        <>
            {   
                props.flights.map((flight, key) => (
                    <div style={flightCardStyle} key={key}>
                        <p>Departing from { flight.cityFrom } at {DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')}</p>
                        <p>Arriving to { flight.cityTo } at {DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')}</p>
                        <p> Price: { flight.price }€ </p>
                        <p> Transfers: { flight.route.length - 1 } </p>
                    </div>
                ))
            }
        </>
    )
}

export default Flight;