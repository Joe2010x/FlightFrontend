import { useState } from "react";
import FlightCard from "./FlightCard";
import "./Trip.css";

const Trip = ({ flightList, passengers, title , handleSelected}) => {
    
    const [flights, setFlights] = useState(flightList)

    const handleSelect = (indexFlight, indexItineraries) => {
        let newTrip = JSON.parse (JSON.stringify(flights));
        for (let j = 0; j < flights.length; j++) {
            // if indexflight loop i
            if (j === indexFlight) {

                for (let i = 0; i < flights[indexFlight].itineraries.length; i++) {
                    if (i !== indexItineraries) {
                        // select false
                        newTrip[indexFlight].itineraries[i].selected = false;
                    } else {
                        //select true
                        newTrip[indexFlight].itineraries[i].selected = true;
                    }
                }
            }
        }
        // console.log("handleSelect ", title, indexFlight, indexItineraries)

        handleSelected({
            title: title,
            departureCity: flights[indexFlight].departureDestination,
            arrivalCity: flights[indexFlight].arrivalDestination,
            flight_id:flights[indexFlight].flight_id,
            itinerary: flights[indexFlight].itineraries[indexItineraries],
            passengers: passengers,
            total : passengers.adult * flights[indexFlight].itineraries[indexItineraries].prices[0].adult + passengers.child * flights[indexFlight].itineraries[indexItineraries].prices[0].child
        })
        setFlights(newTrip);
    }

    return (
        <div className="trip">
            <h2>{title}</h2>
            {(flights.length === 0) &&
                <p> No flight is available</p>}

            {flights && flights.map((flight, indexFlight) =>
                <div key={indexFlight}>

                    {flight.itineraries.map((i, index) =>
                        <FlightCard
                            key={index}
                            flights={flights}
                            passengers={passengers}
                            indexItineraries={index}
                            indexFlight={indexFlight}
                            handleSelect={handleSelect}
                        />)}
                </div>)}
        </div>
    )
}

export default Trip;