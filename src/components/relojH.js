import React ,{useEffect,useState} from 'react'
import Add from '@material-ui/icons/Add'
import Close from '@material-ui/icons/Close'
import {Button} from '@material-ui/core'
const Interfaz=({hora})=>{
    return (<div>
        
        <h1>{hora}</h1>
    </div>)
}
const Reloj = () => {


    const [date, setDate] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        let temporizador
        if (visible) {
            temporizador=setInterval(() => {
                setDate(new Date().toLocaleTimeString());
             }, 1000);  
        }
        else
        {
            clearInterval(temporizador);
            return ()=>{
                clearInterval(temporizador);
            }
            
        }
               
    }, [visible])
    
    return (
        <div>
            <p>con hooks</p>
          {visible && <Interfaz hora={date}/>}
          <Button
         variant="contained"
         color="primary"
         startIcon={<Add/>} 
         size="small"
         onClick={()=>setVisible(true)}>
         show
         </Button>
         <Button
         variant="contained"
         color="secondary"
         startIcon={<Close/>} 
         size="small"
         onClick={()=>setVisible(false)}
         >
         hide
         </Button>
        </div>
    )
}

export default Reloj
