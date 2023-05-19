import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Person from './components/Person';
import { useEffect } from 'react';
import { fetchData } from './data/FetchData';

function App() {
  useEffect(() => {
    const init = async () => {
      const driverList = await fetchData();
      localStorage.setItem('drivers', JSON.stringify(driverList));
    };
    init();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:driverId" element={<Person />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
