
import '../assets/tabla.css';
import React from 'react'
import {UseFetch} from './customHook.jsx';
export const Fetch = (
 {column1='Nombre',
  column2='Carrera',
  column3='Edad',
  column4='Location',
  column5='foto',
  alink='https://camp-tgbot.herokuapp.com/api'}) => {
  let link=alink;
  let {data}=UseFetch(link);
  return (
    <div >
 
        
       
<div className="tittle">

    <h2>
   
    My_Table 
    
    </h2>
    
    
</div>
  
                         
                        <div id="main-container">
                        <table className="table table-striped table-bordered table-hover table-active "  >
                        <thead >
                          <tr >
                             <th>id</th>
                             <th>{column1}</th>
                             <th>{column2}</th>                                
                             <th>{column3}</th>  
                             <th>{column4}</th> 
                             <th>{column5}</th> 
                             
                             
                         </tr>
                        </thead>
                        <tbody>
  
  { data.length===0?(
               
               
                   <h1 style={{color:'red'}}>Cargando...</h1>
               
               
              
               
               
           ):(data.map(post => { 
      return (
                        <tr key={post.id} >
                        <th>{post.id}</th>
                        <th>{post.name}</th>
                        <th>{post.carrera}</th>
                        <th>{post.age}</th>
                        <th>{post.location}</th>
                        <th><img src={post.web} alt={'img'+ post.id}/></th>
                        
                        </tr>
                      
                           )
                         })
  
                      )}
                        </tbody>
  
                     
                   
                        </table> 
                     </div>
                     </div>
                 
  
          )




}
/*

Fetch.defaultProps={

  column1:'Nombre',
  column2:'Carrera',
  column3:'Edad',
  column4:'Location',
  column5:'foto',
  link:'http://localhost:5000/users'
}
*/



      
     
  
