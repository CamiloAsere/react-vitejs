<<<<<<< HEAD
import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import { getData } from "./db/db";
const foods = getData();

//const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);
/*
  useEffect(() => {
    tele.ready();
  });
*/
  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
  };

  return (
    <>
      <h1 className="heading">Order Food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className="cards__container">
        {foods.map((food) => {
          return (
            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
=======
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
  
const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
    alert("troleado")
  };
  return (
    <div className="container" >
      <header className="jumbotron" /*style={style}*/ >
        <b>
        <p>Hello Vite + React!</p>
        </b>
        <button type="button" className="btn btn-danger" onClick={onCheckout}>
            mostrar botton extra
          </button>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            nada
          </button>
        </p>
       
      </header>
      <Rutas/>
    </div>
  )
>>>>>>> 8899b832a3473b13ebe0c378ff4fd7be1190bf67
}

export default App;
