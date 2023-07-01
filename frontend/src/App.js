import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import MainPage from './components/MainPage';
import PanelState from './context/PanelState';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <PanelState >
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" index element={<MainPage />} />
            <Route path="/about-us" index element={<About />} />
            <Route path="/contact-us" index element={<Contact />} />
          </Route>
        </Routes>
      </PanelState>
    </>
  )
}

export default App