import logo from './logo.svg';
import './App.css';
import Search from './componments/Search';
import { useEffect, useState } from 'react';
import Booking from './componments/Booking';

function App() {
  const [status, setStatus] = useState('search')
  const [selectedFlights,setSelectedFlights] = useState({outBound: null, returnBound : null});
  
  const handleConfirmed = (flightInfo) =>{
    let newInfo = JSON.parse(JSON.stringify(selectedFlights));
    if (flightInfo.outBound !== undefined) 
      newInfo.outBound = flightInfo.outBound;

    if (flightInfo.returnBound !== undefined) 
      newInfo.returnBound = flightInfo.returnBound;

    setSelectedFlights(newInfo);
    if (flightInfo === 'confirmed') setStatus('personInfo');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Flight Finder</p>
      </header>
     
     { (status === 'search') && 
        <Search setFlights = {handleConfirmed}/>}
     {(status === 'personInfo') && 
        <Booking selectedFlights = {selectedFlights}/> }
    </div>
  );
}

export default App;
