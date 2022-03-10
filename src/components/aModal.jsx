import React, { useState } from "react";
import Modal from "./modalComponent/modalA";

function AppModal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div >
      <h3 style={{alignContent:'center'}} >Hey, welcome a mi aplicacion.</h3>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      
    </div>
  );
}

export default AppModal;
