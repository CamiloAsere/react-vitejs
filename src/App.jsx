import { useState , useEffect } from 'react'
import  background from "./assets/connected-city.jpg";
import { Rutas } from './rutas';
//Telegram.WebApp.offEvent('backButtonClicked', callback
const tele=window.Telegram.WebApp
function App() {
  const [count, setCount] = useState(0)
  
  const style = {
    backgroundImage: `url(${background})`, 
    width: "100%",
    height: "400px",
    
  };
useEffect( ( ) => {
tele.ready()
} )
  return (
    <div className="container" >
      <header className="jumbotron" /*style={style}*/ >
        <b>
        <p>Hello Vite + React!</p>
        </b>
        
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
       
      </header>
      <Rutas/>
    </div>
  )
}

export default App
