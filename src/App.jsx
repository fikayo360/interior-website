import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/nav/nav';
import { Footer } from './components/footer/Footer';
import { Contact } from './pages/contact/contact';
import { Works } from './pages/works/works';
import { OurProcess } from './pages/process/process';
import { Home } from './pages/home/home';

function App() {
  const [dropOpen, setDropOpen] = useState(false);
  const toggleDrop = () => setDropOpen(!dropOpen);
  return (
    <div id='site'>
   
      <Router>
      <Routes>
        <Route path="/" element={<Home dropOpen={dropOpen} toggleDrop={toggleDrop}/>} />
        <Route path="/contact" element={<Contact dropOpen={dropOpen} toggleDrop={toggleDrop}/>} />
        <Route path="/works" element={<Works dropOpen={dropOpen} toggleDrop={toggleDrop}/>} />
        <Route path="/process" element={<OurProcess dropOpen={dropOpen} toggleDrop={toggleDrop}/>} />
      </Routes>
      <Footer />
    </Router>
  
    </div>
  )
}

export default App
