import React from "react";
import "../../assets/Modal.css";

import { Fetch } from "../testcopy";

function Modal({ setOpenModal }) {
  return (
    <div className="grid-container">
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
        <Fetch/>
        </div>
        
        
        
      
  );
}

export default ModalB;
