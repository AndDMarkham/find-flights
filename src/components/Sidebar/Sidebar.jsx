import React from 'react';

const NavbarStyle = {
    width: '20vw',
    height: '80vh',
    border: '1px solid black',
    borderRadius: '1rem',
    padding: '2rem',
    marginTop: '1rem',
    backgroundColor: 'silver',
}

const formStyle = {
    marginBottom: '1rem'
}

const Sidebar = props => {
    const departLocales = Object.keys(props.departLocales);
    const arrivalLocales = Object.keys(props.arrivalLocales);
    const { getData, departure, arrival, setDeparture, setArrival,
            setDirect, direct, setLoading } = props;

    const handleDepartureSelect = e => {
        setDeparture(e.target.value);
    }

    const handleArrivalSelect = e => {
        setArrival(e.target.value)
    }

    const handleCheckbox = e => {
        if (direct === 0) {
            setDirect(1)
        } else {
            setDirect(0)
        }
    }
    
    const handleButtonPress = e => {
        e.preventDefault();

        console.log(arrival);
        console.log(departure);
        getData();
        setLoading(true);
    }

    return (
        <>
            <div style={NavbarStyle}>
               <form>
                    <label htmlFor="departure">Choose a departure location:</label>
                    <br/>
                    <select style={formStyle} name="departure" id="departure_select" onChange={handleDepartureSelect}>
                        <option hidden="" value="">Departure City:</option>
                        { 
                            departLocales.map((depart, key) => (
                                <option key={key} value={departure}> 
                                    {depart} 
                                </option>
                            ))
                        }
                    </select>
                    <br/>
                    <label  htmlFor="arrivals">Choose a destination:</label>
                    <select style={formStyle} name="arrivals" id="arrival_select" onChange={handleArrivalSelect}>
                        <option hidden="" value="">Arrival City:</option>
                       { 
                            arrivalLocales.map((arr, key) => (
                                <option key={key} value={arrival}> 
                                    {arr} 
                                </option>
                            ))
                       }
                   </select>
                   <br/>
                   <label style={{ marginRight: '0.5rem'}} htmlFor="direct_flights">Direct flights only:</label>
                   <input style={formStyle} id="direct_flights" name="direct_flights" type="checkbox" onChange={handleCheckbox} />
                   <button style={formStyle} onClick={handleButtonPress} >Search Flights</button>
               </form>
            </div>
        </>
    )
}

export default Sidebar;