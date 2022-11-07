import { Routes, Route } from 'react-router-dom';
// import '../src/styles/global/App.scss';
import CurrencyExchange from './components/Currency/CurrencyExchange';
import DistanceConverter from './components/Distance/DistanceConverter';
import Footer from './components/Footer/Footer';
import LengthConverter from './components/Length/LengthConverter';
import Home from './components/Main/Home';
import TemperatureConverter from './components/Temperature/TemperatureConverter';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
  return (
    <CurrencyProvider>
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/currency-converter" element={ <CurrencyExchange />}/>
        <Route path="/length-converter" element={<LengthConverter />}/>
        <Route path="/distance-converter" element={<DistanceConverter />}/>
        <Route path="/temperature-converter" element={<TemperatureConverter />}/>
      </Routes> 
      <Footer />  
    </div>
    </CurrencyProvider>
  );
}

export default App;
