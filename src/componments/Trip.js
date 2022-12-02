import { useState } from "react";
import FlightCard from "./FlightCard";
import "./Trip.css";

const Trip = ({ flightList, passengers, title }) => {
    const [flights, setFlights] = useState({
        flightList,
        passengers
    })

    console.log(flights);
    return (
        <div className="trip">
            <h2>{title}</h2>
            {(flightList.length === 0) &&
                <p> No flight is available</p>}

            {flights && flightList.map((flight, indexFlight) =>
                <div key={indexFlight}>

                    {flight.itineraries.map((i, index) =>
                        <FlightCard
                            key={index}
                            flights={flights}
                            indexItineraries={index}
                            indexFlight={indexFlight}
                            setFlights={setFlights}
                        />)}
                </div>)}
        </div>
    )
}

export default Trip;