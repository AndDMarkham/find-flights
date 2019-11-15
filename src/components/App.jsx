import React, {useState, useEffect} from 'react';
import Flights from './Flights/Flights.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';

const pageStyle = {
    display: 'flex',
    flexDirection: 'row',
}


const App = props => {
    const [flightData, setFlightData] = useState();
    const [loading, setLoading] = useState(true);
    const [departure, setDeparture] = useState();
    const [arrival, setArrival] = useState();
    const [direct, setDirect] = useState(0);

    const arrivalLocales = {
        'Valencia': 'VLC',
        'Madrid': 'MAD',
        'Barcelona': 'BCN',
        'Milan': 'LIN',
        'Athens': 'ATH',
        'Istanbul': 'IST',
        'Košice': 'KSC'
    }

    const departLocales = {
        'Prague': 'PRG',
        'Berlin': 'TXL',
        'Warsaw': 'WAW',
        'Pardubice': 'PED'
    }

    async function getData() {
        const response = await fetch('https://api.skypicker.com/flights?fly_from='+(departLocales[departure])+'&fly_to='+(arrivalLocales[arrival])+'&date_from=18/11/2019&date_to=18/11/2019&v=3&partner=picky&limit=5&direct_flights='+(direct));
        const data = await response.json();
        if (!data.data) {
            setFlightData(null)
        } else {
            setFlightData(data.data)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (loading) {
            setDeparture();
            setArrival();
        }
    }, [])

    return (
        <>
            <div style={pageStyle}>

                <Sidebar 
                    arrivalLocales={arrivalLocales} 
                    departLocales={departLocales} 
                    departure={departure}
                    arrival={arrival}
                    setDeparture={setDeparture}
                    setArrival={setArrival}
                    getData={getData}
                    direct={direct}
                    setDirect={setDirect}
                    setLoading={setLoading}
                />

                <Flights 
                    arrivalLocales={arrivalLocales} 
                    departLocales={departLocales}
                    departure={departure}
                    arrival={arrival}
                    flightData={flightData}
                    loading={loading}
                />

            </div>
        </>    
    )
}

export default App;