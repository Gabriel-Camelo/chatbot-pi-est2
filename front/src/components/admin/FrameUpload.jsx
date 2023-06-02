import React, { useState } from 'react';
import PopUpManualUpload from './PopUpManualUpload';
import PopUpVideoUpload from './PopUpVideoUpload';
import PopUpEditalUpload from './PopUpEditalUpload';


function FrameUpload(props) {
  const { src } = props;
  const { alt } = props;
  const { className } = props;
  const { tittle } = props;

    const [editOpen, setEditOpen] = useState(false);
    const abrirEdit = () => {
        setEditOpen(true);
    }
    const fecharEdit = () => {
        setEditOpen(false);
    }

  return (
      <div>
          <button
             onClick={abrirEdit} 
            className="transition-opacity duration-500 ease-in-out bg-green-500 transform hover:-translate-y-1 hover:scale-110 divHover "
          >
            <div
              className="w-56 h-60 text-black bg-gray-100 flex flex-col items-center justify-center shadow-lg transition delay-300 duration-300 ease-in-out"
            >
              <img
                src={`${src}`}
                alt={`${alt}`}
                className={`${className}`}
              />
              <h2
                className="text-green-900 mt-3"
              >
                {tittle}
              </h2>
          
            </div>
            <p className="phover bg-footer">Postar</p>
          </button>
          {tittle==='Vídeos' &&
            <PopUpVideoUpload isOpen={editOpen} onClose={fecharEdit}/>
          }
          {tittle==="Manuais" &&
            <PopUpManualUpload isOpen={editOpen} onClose={fecharEdit} />
          }
          {tittle==="Editais" &&
            <PopUpEditalUpload isOpen={editOpen} onClose={fecharEdit} />
          }
      </div>
  );
}

export default FrameUpload;
