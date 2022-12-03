import FlightInfo from "./FlightInfo";
import './Booking.css';
import PersonInfo from "./PersonInfo";
import { useState } from "react";
import ConfirmPerson from "./ConfirmPerson";

const Booking = ({ selectedFlights }) => {
    // console.log('booking page: ', selectedFlights);
    const [status, setStatus] = useState('passengerInfo');

    let numAdult = parseInt(selectedFlights.outBound.passengers.adult);
    let numChild = parseInt(selectedFlights.outBound.passengers.child);

    const [passengers, setPassengers] = useState({
        adult: new Array(numAdult).fill({}),
        child: new Array(numChild).fill({})
    })

    const updatePerson = (type, index, person) => {
        // console.log('updatePerson triggered', index,person);
        let newPassengers = JSON.parse(JSON.stringify(passengers));
        // if (type ==='adult') {

        // }
        newPassengers[type][index] = person;
        console.log('newPassengers is ', newPassengers);
        setPassengers(newPassengers);

    }

    const handleBook = () => {
        let allPassengerSaved = true;
        passengers.adult.forEach(e => {
            // console.log('e is ', e);
            if (Object.keys(e).length === 0) {
                console.log('error not all passengers are saved');
                allPassengerSaved = false;
            }
        }
        );
        passengers.child.forEach(e => {
            if (Object.keys(e).length === 0) {
                // console.log('error not all passengers are saved');

                allPassengerSaved = false;
            }
        }
        );

        if (allPassengerSaved) setStatus('confirmation');
    }

    const handleConfirm = () => {
        setStatus('Finished');
    }

    return (
        <div>
            {(status !== 'Finished') &&
                <div className="Flight--information">
                    <h3>Flight Information</h3>
                    <div className="booking--flightInfo">
                        {(selectedFlights.outBound) &&
                            <FlightInfo key='outBound' info={selectedFlights.outBound} />}
                        {(selectedFlights.returnBound) &&
                            <FlightInfo key='returnBound' info={selectedFlights.returnBound} />}
                    </div>
                </div>}

            {(status === 'passengerInfo') &&
                <div className="enter--passengerInfo">
                    {passengers &&
                        <div>
                            {passengers.adult.map(
                                (person, index) => <PersonInfo
                                    key={index}
                                    index={index}
                                    type='adult'
                                    person={person}
                                    updatePerson={updatePerson}
                                />)}
                            {passengers.child.map(
                                (person, index) => <PersonInfo
                                    key={index}
                                    index={index}
                                    type='child'
                                    person={person}
                                    updatePerson={updatePerson}
                                />

                            )}
                        </div>

                    }
                    <button
                        className='info--book--btn'
                        onClick={handleBook}
                    >Book</button>
                </div>}

            {(status === 'confirmation') &&
                <div>
                    {passengers.adult.map(
                        (person, index) => <ConfirmPerson
                            key={index}
                            index={index}
                            type='adult'
                            person={person}
                        />)}
                    {passengers.child.map(
                        (person, index) => <ConfirmPerson
                            key={index}
                            index={index}
                            type='child'
                            person={person}
                        />)}
                    <button
                        className='info--book--btn'
                        onClick={handleConfirm}
                    >Confirm</button>
                </div>
            }

            {(status === 'Finished') &&
                <div className="finished">
                    <div>
                    <h2>Thank you for using </h2><h1>Flight Finder</h1>
                    <h2>Wish you a pleasent journey!</h2>
                    </div>
                </div>
            }

        </div>
    )
}

export default Booking;