const Trip = ({flightList, passengers, title}) => {
    console.log(flightList);
    return (
        <div>
            <span>{title}</span>
            {passengers.adult} Adult
            <p>Departure city {flightList[0].departureDestination}</p>
        </div>
    )
}

export default Trip;