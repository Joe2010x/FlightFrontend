import { useState } from "react";
import "./FlightCard.css";

const FlightCard = ({
    flights,
    passengers,
    indexItineraries,
    indexFlight, 
    handleSelect}) => {

    // console.log("flightcard, flights info ", flights)
    // console.log('passenger info ', passengers);
    const [details, setDetails] = useState(false);
    const [durationText, setDurationText] = useState(null);

    let arriveAt = flights[indexFlight].itineraries[indexItineraries].arriveAt;

    arriveAt = new Date (arriveAt);
    
    let departureAt = flights[indexFlight].itineraries[indexItineraries].departureAt;
    
    departureAt = new Date (departureAt);
    
    
    const handleSelectCard = () => {
        handleSelect(indexFlight, indexItineraries)
        console.log('flight selected');
    }

    const handleDetails = ( ) => {
        
        let duration = (arriveAt - departureAt) / 1000 ;
        let hours = Math.floor(duration / 3600);
        duration = duration - hours * 3600;
        let minutes = Math.floor(duration / 60);
        
        setDurationText(`${hours} hours ${minutes} mins`);
        setDetails(!details);
    }

    return (
        <div className="flightCard" style={flights[indexFlight].itineraries[indexItineraries].selected
            ? {backgroundColor: 'lightcoral'}
            : {backgroundColor:'lightgray'}}>
            {/* Flight Details */}
                <div>
                    <span className="city--label">Departure City: </span>
                    <span className="city">{flights[indexFlight].departureDestination} </span>
                    <br />

                    {/* <span>Departure At</span> */}
                    <span>{departureAt.toString()} </span>
                    <br />
                    <span className="city--label">Arrival City: </span>
                    <span className="city">{flights[indexFlight].arrivalDestination} </span>
                    <br />
                    {/* <span>Arrival At</span> */}
                    <span>{arriveAt.toString()} </span>
                    <br />
                    {details && <div className="flight--details">
                        
                        <span>Flight duration: {durationText}</span>
                        <br></br>
                        <span>Adult {passengers.adult} x {flights[indexFlight].itineraries[indexItineraries].prices[0].adult} {flights[indexFlight].itineraries[indexItineraries].prices[0].currency}</span> ¨¨¨
                        <span>Child {passengers.child} x {flights[indexFlight].itineraries[indexItineraries].prices[0].child} {flights[indexFlight].itineraries[indexItineraries].prices[0].currency}</span>
                        <br></br>
                        <span>Total price: {passengers.adult * flights[indexFlight].itineraries[indexItineraries].prices[0].adult + passengers.child * flights[indexFlight].itineraries[indexItineraries].prices[0].child} {flights[indexFlight].itineraries[indexItineraries].prices[0].currency}</span>
                    </div>}
                </div>
                    <div className="flightCard--buttons--field">
                        <button 
                        className="flightCard-btn"
                        onClick={handleDetails}
                        >Details</button>

                        <button className="flightCard-btn" onClick={handleSelectCard}>Select</button>
                    </div>
                
        </div>
    )
}

export default FlightCard;