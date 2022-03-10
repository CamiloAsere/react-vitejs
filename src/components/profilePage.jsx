import React from 'react';
import { useParams } from 'react-router-dom'
//import { OREO } from './OREO.JSX'; {<OREO/>}  
export default function ProfilePage() {
    const { id,username } = useParams();
    
    
    return (
        <div>
            <h3>GetId: {id}</h3> 
            <h1>ProfileUserName: {username}</h1> 
            
            
             
        </div>
    )
}
