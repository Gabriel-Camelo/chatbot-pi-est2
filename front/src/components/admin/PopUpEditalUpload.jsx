import ReactModal from 'react-modal';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';


const PopUpEditalUpload = ({ isOpen, onClose }) => {
    const [text, setText] = useState(null);
    const [file, setFile] = useState(null);
    const [ message, setMessage ] = useState(null);


    const [fileName, setFileName] = useState('--');
    const { token } = useContext(AuthContext);


    const [ post, setPost ] = useState(false);

    useEffect(() => {
      if (text !== null && post && file) {
        const formData = new FormData();
        formData.append('arquivo', file);
        formData.append('titulo', text);
        axios.post('http://localhost:8000/api/editais', formData, {headers: {
          'Authorization': `Bearer ${token.access_token}`
      }})
        .then((response) => {
          console.log(response.data);
          setMessage(response.data.message);
        })
        .then(() => setTimeout(() => {
          resetInputs();
        }, 4000))
        .catch(error => console.error(error));
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post]);

    const handleCancel = (event) => {
      resetInputs();
      onClose();
    };

    const handlePost = () => {
      setPost(true);
    };

    const resetInputs = () => {
      setText(null);
      setPost(false);
      setFileName("--");
      setMessage(null);
    }

    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);

      const selectedFileName = selectedFile ? selectedFile.name : 'SELECIONE O ARQUIVO...';
      setFileName(selectedFileName);
    };

    const handleChangeText = (event) => {
        setText(event.target.value);
    };

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
          margin: '0px',
          maxWidth: '80vw',
          maxHeight: '65vh',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        },
      }}
    >

      <div 
        className='bg-green-600 w-full h-9 flex items-center justify-center text-white font-exo2 font-bold text-lg'
      >
        <h1>
          POSTAR UM EDITAL
        </h1>
      </div>
      <div 
        className='flex items-center justify-center flex-col w-full h-full text-lg'
      >
       <div 
        className='w-full h-1/5 flex flex-row mb-5'
      >
            <div 
              className='h-full flex items-center justify-end font-exo2
              mobile:text-sm mobile:w-3/12
              desktop:text-xl desktop:w-2/12
              '
            >
                Título:
            </div>
            <div 
              className='flex items-center justify-center w-10/12 h-full'
            >
                <form 
                  className='w-full h-2/5 flex items-center justify-center'
                >
                   <input 
                    type='text'                         
                    value={text}
                    onChange={handleChangeText}
                    className='h-5/6 w-11/12 border-2 border-gray-400 focus:outline-none focus:border-green-700 focus:ring-green-700 pl-2 pr-2'
                    />
                </form>
            </div>
        </div> 

        <div
          className='mb-10'
        >
          <p
            className='text-black font-roboto'
          >
            Selecionado: {fileName}
          </p>
        </div>



        
        <div 
          className='w-full h-2/5 flex justify-center -mt-2'
        >
            <div 
              className=' w-4/5 h-5/6 bg-slate-100 flex flex-row items-center justify-center shadow-xl'
            >
                <div>
                    <img 
                      src='/img/admin/Upload-icon.png' alt='Upload' className='w-16 mr-6 mt-4'
                    >
                    </img>
                </div>
                
                <div 
                  className='flex flex-col items-center'
                >
                <div
                  className='w-full flex justify-center items-end'
                >
                  <p
                    className='text-green-500 desktop:text-xl mobile:text-sm font-exo2'
                  >
                    {message}
                  </p>
                </div>
                    <h3 
                      className=' text-green-800 text-base mb-2 font-exo2'
                    >
                      Clique abaixo para selecionar um arquivo
                    </h3>
                   <form>
                        <input 
                          type="file" 
                          id="upload"
                          className='hidden' 
                          onChange={handleFileChange}
                        />
                        <label 
                          htmlFor="upload"
                          className='flex cursor-pointer bg-green-600 text-white rounded-sm h-8 w-48 justify-center items-center text-sm font-semibold hover:bg-green-500 font-exo2'
                        >
                          SELECIONE O ARQUIVO...
                        </label>
                   </form>
                
                </div>
            </div>
        </div>
        
        <div 
          className='absolute bottom-0 w-full h-8 flex justify-around font-roboto font-extrabold text-white'
        >
            <button 
              className='w-2/4 bg-redfooter h-7 font-exo2'
              onClick={handleCancel}
            >
              VOLTAR
            </button>
            <button 
              className='w-2/4 bg-footer h-7 font-exo2'
              onClick={handlePost}
            >
              POSTAR
            </button>

        </div>
      </div> 

      
    </ReactModal>
  );
};

export default PopUpEditalUpload;