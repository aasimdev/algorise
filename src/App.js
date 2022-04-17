import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home/Index';
import Promotion from './pages/Promotion'
import Information from './pages/Information'
import Geneology from './pages/Geneology/index'
import SigninIndex from './pages/Signin/Index';
import Header from './layouts/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SigninIndex />} />
        <Route path='home' element={<Home />} />
        <Route path="promotion" element={<Promotion />} />
        <Route path="information" element={<Information />} />
        <Route path='geneology' element={<Geneology />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>


    </>
  )
}

export default App