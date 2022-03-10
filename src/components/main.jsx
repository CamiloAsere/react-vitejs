import React from 'react'
import {Route, Routes} from 'react-router-dom';
import AboutPage from './aboutPage';
import ContactPage from './contactsPage';
import AppModal from './aModal';
import ProfilePage from './profilePage';

export function Rutas() {
    return (
        <Routes>
        
        <Route exact path="/" element={<AboutPage/>}/>
        <Route path="/profile" element={<ContactPage/>}/>
        <Route path="/contact/:id/:username" element={ <ProfilePage/> }/>
        <Route path="/modal" element={<AppModal/> }/>
        
       
        
        </Routes>
    
    )
}
