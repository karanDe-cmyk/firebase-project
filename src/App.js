import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Achievement from './Components/Achievement';
import Contact from './Components/Contact';
import Downloads from './Components/Downloads';
import General from './Components/General';
import Domestic from './Components/Domestic';
import Cyber from './Components/Cyber';
import Marital from './Components/Marital';
import Dowry from './Components/Dowry';
import NRI from './Components/NRI';
import Sexual from './Components/Sexual';
import Workplace from './Components/Workplace';
import Childeren from './Components/Childeren';
import Traficking from './Components/Traficking';
import SignInForm from './Components/SignInForm';
import SignUpForm from './Components/SignUpForm';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/achievement' element={<Achievement />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/download' element={<Downloads />}>
            <Route path='general' element={<General />} />
            <Route path='domestic' element={<Domestic />} />
            <Route path='cyber' element={<Cyber />} />
            <Route path='marital' element={<Marital />} />
            <Route path='dowry' element={<Dowry />} />
            <Route path='nri' element={<NRI />} />
            <Route path='sexual' element={<Sexual />} />
            <Route path='workplace' element={<Workplace />} />
            <Route path='childeren' element={<Childeren />} />
            <Route path='traficking' element={<Traficking />} />
          </Route>
          <Route path='/signin' element={<SignInForm />}>
            <Route path='signup' element={<SignUpForm />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
