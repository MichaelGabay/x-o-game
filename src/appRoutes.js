import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppGame from './components/appGame';



export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<AppGame/>} />

                <Route path='/*' element={<h1 className='display-8 p-4'>page not found error 404</h1>} />
            </Routes>
        </BrowserRouter>
    )
}
