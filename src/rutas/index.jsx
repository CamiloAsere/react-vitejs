import React from 'react'
import {Route, Routes,Navigate, BrowserRouter} from 'react-router-dom';
import AboutPage from '../components/aboutPage';
import ContactPage from '../components/contactsPage';
import AppModal from '../components/aModal';
import ProfilePage from '../components/profilePage';
import { Layout } from './Layouts';

export function Rutas() {
    return (
        <BrowserRouter>
        <Routes>
        
        <Route path="/"  element={<Layout/>}>
        <Route index element={<AboutPage/>}/>
        <Route path="profile" element={<ContactPage/>}/>
        <Route path="contact/:id/:username" element={ <ProfilePage/> }/>
        <Route path="modal" element={<AppModal/> }/>
        <Route path="*" element={<Navigate to="/" /> }/>
        </Route>
        
        </Routes>
        </BrowserRouter>
    )
}
