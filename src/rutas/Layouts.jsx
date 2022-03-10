import React from 'react'
import {Link, Outlet} from 'react-router-dom';
//import { Rutas } from './main';

export function Layout() {
    return (
<main>
        
<div className="gridcontainer" > 
<h4>
Router controller: ruta general

</h4>
     <Link to="/" > <button className="btn btn-primary" role="alert">About</button> | 
     </Link>
     <Link to="/profile" > <button  className="btn btn-success" variant="contained" 
      >ProfilesPage</button> | 
     </Link>
     <Link to="/contact/:id/:username" > <button  className="btn btn-danger" role="alert">ContactPage</button> | 
     </Link>
     <Link to="/modal" > <button  className="btn btn-warning" role="alert">Modal</button>
     </Link>
    
    
</div>
<Outlet/>
</main>
    )
}


