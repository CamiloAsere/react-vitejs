import {useState,useEffect} from 'react';
export const UseFetch = (link) => {
    const [data, setData] = useState('')
    const [pendiente, setPendiente] = useState(true)
    const [error, setError] = useState(null)
    
    
    useEffect(() => {
   
        const getData = async (link) => {
              
          try {
                let res = await fetch(link);
                
                if(!res.ok){
                    
                    const err ={
                      error:true,
                      status:res.status,
                      statusText:res.statusText ? "Ocurrió 1 error" :res.statusText
                      }
                    throw err;
                }
                let data = await res.json();
                setData(data);
                setPendiente(false);
                setError({error:false});
              } catch (error) {
               
                setPendiente(true,alert("datos de la Api incorrectos:introduzca una direccion https:// correcta y recargue la página"));
                setError(error);
              }
           
            }
            getData(link);
       
    }, [link])

return {data,pendiente,error}

}


