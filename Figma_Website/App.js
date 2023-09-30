import './App.css';
import Home from './components/Home';
import Home2 from './components/Home2';
import  Service  from './components/Service';
import  Portfolio  from './components/Portfolio';
import Job from './components/Job';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/home2' element={<Home2 />} />   
          <Route path='/service' element={<Service />} />  
          <Route path='/portfolio' element={<Portfolio/>} /> 
          <Route path='/job' element={< Job />} />
          <Route path='/about' element={<About />} /> 
          <Route path='/contact' element={ < Contact />} />     
        </Routes>
      </BrowserRouter>
  </>

  );
}

export default App;
