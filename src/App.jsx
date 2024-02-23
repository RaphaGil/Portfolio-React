import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/Navbar';
import {  About, Contact, Custom404, Home, Projects } from './components/Pages';
import './App.css'


function App() {

  return (
    <Router basename={`/`}>
      <MyNav />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/404' element={<Custom404 />} />
        <Route path='' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
