import FlightInfo from "./FlightInfo";

const Booking = ({selectedFlights}) => {
    return (
        <div>
            Booking page
            {(selectedFlights.outBound) &&
            <FlightInfo info={selectedFlights.outBound} />}
            {(selectedFlights.returnBound) &&
            <FlightInfo info={selectedFlights.returnBound} />}
        </div>
    )
}

export default Booking;