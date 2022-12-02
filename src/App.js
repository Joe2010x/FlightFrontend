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
    if (flightInfo.outBound !== undefined) newInfo.outBound = flightInfo.outBound;
    if (!flightInfo.returnBound !== undefined) newInfo.returnBound = flightInfo.returnBound;
    //console.log('this is confirmed pressed ', selectedFlights);
    setSelectedFlights(newInfo);
    if (flightInfo === 'confirmed') setStatus('personInfo');
  }

  // useEffect(() => {
  //   console.log('This is app / flights ', flights)
  // }, [flights])

  return (
    <div className="App">
      <header className="App-header">
        <p>App Header</p>
      </header>
      <p>This is main</p>
     { (status === 'search') && <Search setFlights = {handleConfirmed}/>}
     {(status === 'personInfo') && <Booking selectedFlights = {selectedFlights}/> }
    </div>
  );
}

export default App;
