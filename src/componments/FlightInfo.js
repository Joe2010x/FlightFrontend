import './FlightInfo.css';

const FlightInfo = ({ info }) => {
    // console.log('FlightInfo inof', info)
    let departureAt = new Date(info.itinerary.departureAt);
    let arriveAt = new Date(info.itinerary.arriveAt);
    return (
        <div className='flightInfo'>
            <h2>{info.title}</h2>
            <div className="flightCities">
                <div>
                    <span>Departure City: {info.departureCity}</span>

                    <br></br>
                    <span>Departure Time: {departureAt.toLocaleString()}</span>
                </div>

                <div>
                    <span>Arrival City: {info.arrivalCity}</span>

                    <br></br>
                    <span>Arrival Time: {arriveAt.toLocaleString()}</span>
                </div>
            </div>
            <br></br>
            <span>Total price: {info.total}</span>
            <br></br>
            <span>Available seats: {info.itinerary.avaliableSeats}</span>
        </div>
    )
}

export default FlightInfo;