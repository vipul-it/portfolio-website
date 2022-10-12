import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';

import {Routes, Route, Navigate} from 'react-router-dom';


const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/" replace/>} />
    </Routes>
    </>
  )
}

export default App