import ReactModal from 'react-modal';
import { useContext, useEffect, useState } from 'react';
import { RefreshContext } from '../../contexts/RefreshContext';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';


const PopupEdit = ({ isOpen, onClose, id, type }) => {
  const [ idValue, setIdValue ] = useState(null);
  const [text, setText] = useState(null);
  const [ update, setToUpdate ] = useState(false);
  const [ actualTitle, setActualTitle ] = useState(null);

  const [ message, setMessage ] = useState(null);

  const { refresh, setRefresh } = useContext(RefreshContext);
  const { token } = useContext(AuthContext);

  useEffect(() => {
      if (id !== undefined) {
        setIdValue(id)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

  useEffect(() => {
    if (idValue !== null) {
      axios.get(`http://localhost:8000/api/${type[0]}/${idValue}`)
          .then(response => {
            setActualTitle(response.data[0].titulo);
          })
          .catch(error => console.error(error));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idValue]);

  useEffect(() => {
    if (update) {
      axios.put(`http://localhost:8000/api/${type[1]}/${idValue}`, {"titulo": text}, {headers: {
        'Authorization': `Bearer ${token.access_token}`
    }})
      .then((response) => {
        setMessage(response.data.message);
        setActualTitle(text);
        setRefresh(!refresh);
      })
      .then(() => setTimeout(() => {
        resetInputs();
      }, 4000))
      .catch((error) => console.log(error));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  const handleChangeText = (event) => {
      setText(event.target.value);
  };

  const handleCancel = (event) => {
    resetInputs();
    onClose();
  };

  const resetInputs = () => {
    setText(null);
    setToUpdate(false);
    setMessage(null);
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          position: 'relative',
          top: 'auto',
          left: 'auto',
          right: 'auto',
          bottom: 'auto',
          border: 'none',
          background: 'white',
          borderRadius: '4px',
          padding: '0px',
          maxWidth: '50vw',
          maxHeight: '45vh',
          width: '100%',
          height: '100%',
          overflow: 'auto',
        },
      }}
    >

      <div 
        className='bg-green-600 w-full h-9 flex items-center justify-center text-white font-roboto font-bold text-lg'
      >
        <h1>
          EDITE O MATERIAL
        </h1>
      </div>

      <div 
        className='flex items-center justify-center flex-col w-full h-2/6 text-lg'
      >
        <div 
          className='w-full h-1/2 flex flex-row'
        >
            <div 
              className='w-4/12 h-full bg-white flex items-center justify-end desktop:text-xl mobile:text-sm'
            >
                Título Atual:
            </div>
            <div 
              className='flex items-center justify-center w-9/12 h-full'
            >                
                   <p 
                      className=' flex items-center justify-centerh-full w-full pl-5 pr-2 desktop:text-xl mobile:text-sm'
                    >
                     {actualTitle}
                    </p>
            </div>
        </div>

        <div 
          className='w-full h-2/6 flex flex-row'
        >
            <div 
              className='w-4/12 h-full bg-white flex items-center justify-end desktop:text-xl mobile:text-sm'
            >
                Novo Título:
            </div>
            <div 
              className='flex items-center justify-center w-9/12'
            >
                <form 
                  className='w-full h-full flex items-center justify-center'
                >
                   <input 
                      type='text' 
                      value={text}
                      onChange={handleChangeText}
                      placeholder='Insira um novo titulo'
                      className='h-1/7 w-11/12 border-2 border-gray-400 focus:outline-none focus:border-green-700 focus:ring-green-700 pl-2 pr-2 desktop:text-xl mobile:text-sm'
                    />
                </form>

            </div>
        </div>
      </div>

      <div
        className='w-full h-1/5 flex justify-center items-end'
      >
        <p
          className='text-green-500 desktop:text-2xl mobile:text-sm'
        >
          {message}
        </p>
      </div>

      <div 
        className=' w-full h-2/6 bottom-0 flex items-end justify-around font-roboto font-extrabold text-white pt-4'
      >
        <button 
          className='w-1/2 bg-redfooter h-7'
          onClick={handleCancel}
        >
          VOLTAR
        </button>
        <button 
          className='w-1/2 bg-footer h-7'
          onClick={() => setToUpdate(true)}
        >
          SALVAR
        </button>

        </div>
    </ReactModal>
  );
};

export default PopupEdit;