import { useState } from 'react'
import { Pages } from './components/rutas'
import  background from "./assets/connected-city.jpg";
function App() {
  const [count, setCount] = useState(0)
  const style = {
    backgroundImage: `url(${background})`, 
    width: "100%",
    height: "400px",
    
  };
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
       <Pages/>
      </header>
    </div>
  )
}

export default App
