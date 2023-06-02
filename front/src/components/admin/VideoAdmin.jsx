import React, { useEffect, useState } from "react";
import "./VideoAdmin.css"; 
import PopupAlert from "./PopupAlert";
import PopupEdit from './PopupEdit';


function VideoAdmin({link, unique}) {
  const [ idValue, setIdValue ] = useState(null);

  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (unique !== undefined) {
      setIdValue(unique)
    }
  }, [unique]);
  
  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  //PopUp Alert
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  //PopUp Edit

  const [editOpen, setEditOpen] = useState(false);
  const abrirEdit = () => {
      setEditOpen(true);
  }
  const fecharEdit = () => {
      setEditOpen(false);
  }

  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      className="relative h-full w-4/5 m-auto pb-5 pt-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isLoading && <div className="text-2xl text-center  text-letter">Carregando...</div>}
      <iframe
        className="h-full w-full"
        onLoad={handleIframeLoad}
        src={`${link}`}
        title="YouTube video player"        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>

      {(showButtons && !isLoading) && (
        <div 
          className="buttons-wrapper"
        >
          <button 
            className="bg-redfooter text-white  w-2/4 h-8 font-exo2"
            onClick={handleOpenModal}
          >
            Remover
          </button>
          <button 
            className="bg-footer text-white  w-2/4 h-8 font-exo2"
            onClick={abrirEdit}
          >
            Editar
          </button>
        </div>
      )}
      <PopupAlert 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        id={idValue}
        type={"videos"}
      />
      <PopupEdit 
        isOpen={editOpen} 
        onClose={fecharEdit}
        id={idValue}
        type={["videos", "videos"]}
      />
    </div>
  );
}

export default VideoAdmin;
