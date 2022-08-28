import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './components/Search';
import Results from './components/Results';

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <div className='p-4'>
          <Routes>
              <Route path="/" element={<Navigate to="/search"/>} />
              <Route path="/search" element={<Results />} />
              <Route path="/image" element={<Results />} />
              <Route path="/news" element={<Results />} />
              <Route path="/videos" element={<Results />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App