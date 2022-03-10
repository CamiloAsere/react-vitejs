import React from "react";
import "../../assets/Modal.css";
import logo from "../../logo.svg";


function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
      <div className="title">
          <h4 style={{float:'left',
          paddingTop:'5px'}}>Do You Want to Continue? 
          </h4>
          
          <div className="titleCloseBtn" >
          <button style={{color:'red'}}
            onClick={() => {
              setOpenModal(false);
            }}
          >X</button>
          </div>
        
        </div>
       
        <img src={logo} alt="logo"/>
        <div className="body">
          <h4>Pagina hecha en react,espero q la difruten!</h4>
          

          
        </div>
        
        
        
        </div>
      </div>
    
  );
}

export default Modal;
