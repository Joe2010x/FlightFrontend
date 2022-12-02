import logo from './logo.svg';
import './App.css';
import Search from './componments/Search';
import { useEffect, useState } from 'react';

function App() {
  const [flights, setFlights] = useState(null);

  useEffect(() => {
    console.log('This is app / flights ', flights)
  }, [flights])
  return (
    <div className="App">
      <header className="App-header">
        <p>App Header</p>
      </header>
      <p>This is main</p>
      <Search setFlights = {setFlights}/>
    </div>
  );
}

export default App;
