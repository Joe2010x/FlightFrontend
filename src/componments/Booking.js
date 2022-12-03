import FlightInfo from "./FlightInfo";
import './Booking.css';
import PersonInfo from "./PersonInfo";
import { useState } from "react";

const Booking = ({selectedFlights}) => {
    console.log('booking page: ', selectedFlights);

    let numAdult = parseInt(selectedFlights.outBound.passengers.adult);
    let numChild = parseInt(selectedFlights.outBound.passengers.child);

    console.log(numAdult,numChild)

    let adultArr = new Array(numAdult).fill({});
    let childArr = new Array(numChild).fill({});


    console.log('new ',adultArr,childArr);

    const [passengers, setPassengers] = useState({
        adult : new Array(numAdult).fill({}),
        child : new Array(numChild).fill({})
    })

    const updatePerson = () => {
        console.log('updatePerson triggered');
    }

    return (
        <div>
            Booking page
            <div className="booking--flightInfo">
            {(selectedFlights.outBound) &&
            <FlightInfo key='outBound' info={selectedFlights.outBound} />}
            {(selectedFlights.returnBound) &&
            <FlightInfo key='returnBound' info={selectedFlights.returnBound} />}
            </div>

            {passengers && 
            <div>
            {passengers.adult.map(
                (person, index) => <PersonInfo 
                key = {index}
                index = {index}
                type = 'adult'
                person = {person}
                updatePerson = {updatePerson} 
                />)}
            {passengers.child.map(
                (person, index) => <PersonInfo 
                key = {index}
                index = {index}
                type = 'child'
                person = {person}
                updatePerson = {updatePerson} 
                />

            )}
            </div>
            }
        </div>
    )
}

export default Booking;