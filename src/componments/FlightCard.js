import { useState } from "react";
import "./FlightCard.css";

const FlightCard = ({flights,indexItineraries,indexFlight,setFlights}) => {

    console.log("flightcard, flights info ", flights.flightList[indexFlight].itineraries[indexItineraries].selected)
    let arriveAt = flights.flightList[indexFlight].itineraries[indexItineraries].arriveAt;
    arriveAt = new Date (arriveAt);
    let departureAt = flights.flightList[indexFlight].itineraries[indexItineraries].departureAt;
    departureAt = new Date (departureAt);

    //const [selected, setSelected] = useState(false)

    const handleSelect = () => {
        flights.flightList[indexFlight].itineraries[indexItineraries].selected = true;
        setFlights(flights);
        console.log('flight selected');
    }

    return (
        <div className="flightCard" style={flights.flightList[indexFlight].itineraries[indexItineraries].selected
            ? {backgroundColor: 'lightcoral'}
            : {backgroundColor:'lightgray'}}>
            {/* Flight Details */}
                <div>
                    <span className="city--label">Departure City: </span>
                    <span className="city">{flights.flightList[indexFlight].departureDestination} </span>
                    <br />

                    {/* <span>Departure At</span> */}
                    <span>{departureAt.toString()} </span>
                    <br />
                    <span className="city--label">Arrival City: </span>
                    <span className="city">{flights.flightList[indexFlight].arrivalDestination} </span>
                    <br />
                    {/* <span>Arrival At</span> */}
                    <span>{arriveAt.toString()} </span>
                    <br />
                </div>
                    <div className="flightCard--buttons--field">
                        <button className="flightCard-btn">Details</button>

                        <button className="flightCard-btn" onClick={handleSelect}>Select</button>
                    </div>
                
        </div>
    )
}

export default FlightCard;