import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LeftSidebar from '../layouts/LeftSidebar'
import RightSidebar from '../layouts/RightSidebar'
import Home from '../pages/Home/Index'
import Promotion from '../pages/Promotion'
import Information from '../pages/Information'
import Geneology from '../pages/Geneology/index'

const ProtectRoute = () => {
    return (
        <div className='homebg'>
            <LeftSidebar />
            <RightSidebar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="promotion" element={<Promotion />} />
                <Route path="information" element={<Information />} />
                <Route path='geneology' element={<Geneology />} />
            </Routes>
        </div>
    )
}

export default ProtectRoute