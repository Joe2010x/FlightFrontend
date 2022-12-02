import FlightInfo from "./FlightInfo";
import './Booking.css';
import PersonInfo from "./PersonInfo";

const Booking = ({selectedFlights}) => {
    console.log('booking page: ', selectedFlights);
    return (
        <div>
            Booking page
            <div className="booking--flightInfo">
            {(selectedFlights.outBound) &&
            <FlightInfo key='outBound' info={selectedFlights.outBound} />}
            {(selectedFlights.returnBound) &&
            <FlightInfo key='returnBound' info={selectedFlights.returnBound} />}
            </div>

            <PersonInfo />
        </div>
    )
}

export default Booking;