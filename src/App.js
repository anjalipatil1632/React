
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Display from './components/displaybtn/display';
import Header from './components/Header/header';
import Services from './components/Services';
import Home from './components/home';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/buttons' element={<Display/>} /> 
        <Route path='/services' element={<Services/>} />
        {/* <Route path='/contact-us' element={Contact} />
        <Route path='/sign-up' element={SignUp} /> */}
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
