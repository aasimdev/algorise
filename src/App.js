import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import LeftSidebar from './layouts/LeftSidebar';
import RightSidebar from './layouts/RightSidebar';
import Home from './pages/Home/Index';
import Promotion from './pages/Promotion'
import Information from './pages/Information'
import Geneology from './pages/Geneology/index'
import SigninIndex from './pages/Signin/Index';

const App = () => {
  return (
    <>
      <LeftSidebar />
      <RightSidebar />
      <Routes>
        <Route path="/" element={<SigninIndex />} />
        <Route path='home' element={<Home />} />
        <Route path="promotion" element={<Promotion />} />
        <Route path="information" element={<Information />} />
        <Route path='geneology' element={<Geneology />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>


    </>
  )
}

export default App