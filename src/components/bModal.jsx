import React, { useState } from "react";

import ModalB from "./modalComponent/modalB";


function AppModalB() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div >
     
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <ModalB setOpenModal={setModalOpen} />}
    </div>
  );
}

export default AppModalB;
