import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Trip from "./Trip";

import "react-datepicker/dist/react-datepicker.css";
import "./Search.css";

const Search = ({ setFlights }) => {

    const [departureDate, setDepartureDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());

    const [returnBtn, setReturnBtn] = useState(true);
    const [oneWayBtn, setOneWayBtn] = useState(false);

    const [departureCity, setDepartureCity] = useState('Stockholm');
    const [arrivalCity, setArrivalCity] = useState('Oslo');

    const [numAdult, setNumAdult] = useState(1);
    const [numChild, setNumChild] = useState(0);

    const [outBound, setOutBound] = useState(null);
    const [returnBound, setReturnBound] = useState(null);

    const [status, setStuatus] = useState('search');
    const [outBoundStatus, setOutBoundStatus] = useState(false);
    const [returnBoundStatus, setReturnBoundStatus] = useState(false);

    const url = 'https://localhost:5000/api/flight';

    const clickOneWay = () => {
        if (oneWayBtn) return;
        else {
            setOneWayBtn(true);
            setReturnBtn(false);
        }

    }
    const clickReturn = () => {
        if (returnBtn) return;
        else {
            setOneWayBtn(false);
            setReturnBtn(true);
        }

    }
    const fetchAll = () => {
        fetch(url)
            .then(res => res.json())
            .then(json => console.log(json));
    }

    const fetchFlightData = (oneDepartureCity, oneArrivalCity, oneDepartureDate, setFunction, bound) => {
        let requestDTO = {
            departureCity: oneDepartureCity,
            arrivalCity: oneArrivalCity,
            departureDate: oneDepartureDate
        };
        // console.log(requestDTO);

        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(requestDTO),
        })
            .then(res => res.json())
            .then(json => trimItinary(json, setFunction,bound))
    }

    const trimItinary = (trip, setFunction,bound) => {
        let newTrip = [];

        for (let i = 0; i < trip.length; i++) {
            if (trip[i].itineraries.length > 0) {
                for (let j = 0; j < trip[i].itineraries.length; j++) {
                    trip[i].itineraries[j].selected = false;
                }
                newTrip.push(trip[i]);
            }
        };
        // console.log('trimed trip ',bound, newTrip)
        if (bound === 'outBound' && newTrip.length===0)
            {
                //selectStatus.outBound = true;
                setOutBoundStatus(true);
                // console.log('set outbound to true');
            }
        if (bound === 'returnBound' && newTrip.length === 0)
            {
                //selectStatus.returnBound = true;
                setReturnBoundStatus(true);
                // console.log('set returnbound to true');
            }
        setFunction(newTrip);
    }

    const handleSearch = () => {
        //one Way (out bound)
        fetchFlightData(departureCity, arrivalCity, departureDate, setOutBound,"outBound");

        if (returnBtn) {
            fetchFlightData(arrivalCity, departureCity, returnDate, setReturnBound, "returnBound");  
        }
        setStuatus('select');
    }

    const handleSelected = (flightInfo) => {
        // console.log('Search level handle select ', flightInfo);

        if (flightInfo.title === 'Out Bound'){
            if (oneWayBtn) {
                setReturnBoundStatus(true);
                }           
                setOutBoundStatus (true);
            
            setFlights({ outBound: flightInfo })}

        if (flightInfo.title === 'Return Bound'){    
            setReturnBoundStatus(true);
            setFlights({ returnBound: flightInfo })}       
    }

    const handleConfirm = () => {
        // console.log('selectStatus is ',outBoundStatus,returnBoundStatus);
        if (outBoundStatus && returnBoundStatus)
            setFlights('confirmed');
    }

    return (
        <div>

            {(status === 'search') && <div className="SearchBar">
                <div className="ReturnOrOneWay">
                    <button
                        className="return-oneway-button"
                        style={{ backgroundColor: returnBtn ? 'darkgray' : 'white' }}
                        onClick={clickReturn}
                    >Return</button>

                    <button
                        className="return-oneway-button"
                        style={{ backgroundColor: oneWayBtn ? 'darkgray' : 'white' }}
                        onClick={clickOneWay}
                    >One Way </button>
                </div>
                <div className="SearchFields--cities">
                    <div className="search--city">

                        <span>Departure City: </span>
                        {/* <input placeholder="City" type="text" className="city"
                            onChange={e => setDepartureCity(e.target.value)}
                        ></input> */}

                        <select className="city" defaultValue={departureCity} onChange={e => setDepartureCity(e.target.value)} >
                            <option value="Stockholm" >Stockholm</option>
                            <option value="Oslo">Oslo</option>
                            <option value="Amsterdam">Amsterdam</option>
                        </select>
                    </div>

                    <div className="search--city">

                        <span>Arrival City:</span>
                        {/* <input placeholder="City" type="text" className="city"

                            onChange={e => setArrivalCity(e.target.value)}
                        ></input> */}
                        <select className="city" defaultValue={arrivalCity} onChange={e => setArrivalCity(e.target.value)} >
                            <option value="Stockholm">Stockholm</option>
                            <option value="Oslo">Oslo</option>
                            <option value="Amsterdam">Amsterdam</option>
                        </select>
                    </div>

                </div>
                <div className="SearchFields--dates">

                    <div className="DepartureDate">
                        <p>Departure Date:</p>
                        <DatePicker
                            selected={departureDate}
                            onChange={(date) => setDepartureDate(date)}
                        />
                    </div>

                    <div className="ReturnDate">
                        <p>Return Date:</p>
                        {returnBtn &&
                            <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} />}
                    </div>
                </div>

                <div className="Passengers">
                    <div className="passenger--field">

                        <span className="passenger--label">Adult (12+)</span>
                        <input
                            className="passenger--input"
                            type='text' placeholder="1"

                            onChange={e => setNumAdult(e.target.value)}
                        ></input>
                    </div>

                    <div className="passenger--field">
                        <span className="passenger--label">Child (0 - 11)</span>
                        <input
                            className="passenger--input"

                            onChange={e => setNumChild(e.target.value)}
                            type='text' placeholder="0"></input>

                    </div>
                </div>

                <button
                    className="searchBtn"
                    onClick={handleSearch}
                >Search</button>

            </div>}
            {(status === 'select') && <div>

                {outBound && <Trip
                    flightList={outBound}
                    title="Out Bound"
                    passengers={{
                        "adult": numAdult,
                        "child": numChild
                    }}
                    handleSelected={handleSelected}
                />}

                {returnBound && <Trip
                    flightList={returnBound}
                    title="Return Bound"
                    passengers={{
                        "adult": numAdult,
                        "child": numChild
                    }}
                    handleSelected={handleSelected}
                />}

            <button className="searchBtn" onClick={handleConfirm}>Book</button>

            </div>}
        </div>
    )
}

export default Search;