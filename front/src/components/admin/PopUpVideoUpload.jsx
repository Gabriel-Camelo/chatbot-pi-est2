import ReactModal from 'react-modal';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';


const PopUpVideoUpload = ({ isOpen, onClose }) => {
    const [text, setText] = useState(null);
    const [link, setLink] = useState(null);
    const [file, setFile] = useState(null);

    const [ message, setMessage ] = useState(null);

    const [fileName, setFileName] = useState('--');

    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      const formData = new FormData();
      formData.append('file', selectedFile);
      setFile(formData);

      const selectedFileName = selectedFile ? selectedFile.name : 'SELECIONE O ARQUIVO...';
      setFileName(selectedFileName);
    };
    
    const [ post, setPost ] = useState(false);

    const { token } = useContext(AuthContext);
    
    useEffect(() => {

      /*if (file && text !== null && post) {
        axios.post('http://localhost:8000/api/videos', {"link": link , "titulo": text})
        .then(response => {
          resetInputs();
          console.log(response.data);
        })
        .catch(error => console.error(error));
      }*/

      if (text !== null && link !== null && post) {
        console.log(token);
        axios.post('http://localhost:8000/api/videos', {"link": link , "titulo": text}, {headers: {
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

    const handleChangeText = (event) => {
        setText(event.target.value);
    };
    
    const handleChangeLink = (event) => {
      setLink(event.target.value);
    };

    const resetInputs = () => {
      setText(null);
      setLink(null);
      setPost(false);
      setFileName("--");
      setMessage(null);
    }

    const handleCancel = (event) => {
      resetInputs();
      onClose();
    };

    const handlePost = () => {
      setPost(true);
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
          maxWidth: '80vw',
          maxHeight: '65vh',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        },
      }}
    >

      <div 
        className='bg-green-600 w-full h-9 flex items-center justify-center text-white font-roboto font-bold text-lg'
      >
        <h1>
          POSTE O MATERIAL
        </h1>
      </div>
      <div 
        className='flex items-center justify-center flex-col w-full gap-2 h-full text-lg'
      >
         <div 
        className='w-full h-2/12 flex flex-row'
      >
            <div 
              className='h-full flex items-center justify-end
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
                  className='w-full h-full flex items-center justify-center'
                >
                   <input 
                    type='text'                         
                    value={text}
                    onChange={handleChangeText}
                    className='h-full w-11/12 border-2 border-gray-400 focus:outline-none focus:border-green-700 focus:ring-green-700 pl-2 pr-2'
                    />
                </form>
            </div>
        </div> 
       <div 
        className='w-full h-2/12 flex flex-row'
      >
            <div 
              className='h-full flex items-center justify-end
              mobile:text-sm mobile:w-3/12
              desktop:text-xl desktop:w-2/12
              '
            >
                Link YouTube:
            </div>
            <div 
              className='flex items-center justify-center w-10/12 h-full'
            >
                <form 
                  className='w-full h-full flex items-center justify-center'
                >
                   <input 
                    type='text'                         
                    value={link}
                    onChange={handleChangeLink}
                    placeholder='Exemplo : https://www.youtube.com/embed/WsEv01p3GXU'
                    className='h-full w-11/12 border-2 border-gray-400 focus:outline-none focus:border-green-700 focus:ring-green-700 pl-2 pr-2'
                    />
                </form>
            </div>
        </div> 
        <div 
          className='w-full h-1/10 flex flex-row'
        >
            <div 
              className='h-full w-full flex items-center justify-center
              mobile:text-sm
              desktop:text-xl              
              '
            >
                Ou
            </div>
           
        </div>
        
        <div 
              className='w-full h-1/10 flex items-center justify-center
              mobile:text-sm
              desktop:text-xl              
              '
            >
                Arquivo Selecionado: {fileName}
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
                    className='text-green-500 desktop:text-xl mobile:text-sm'
                  >
                    {message}
                  </p>
                </div>
                    <h3 
                      className=' text-green-800 text-base mb-2'
                    >
                      Arraste e solte os arquivos até aqui ou
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
                          className='flex cursor-pointer bg-green-600 text-white rounded-sm h-8 w-48 justify-center items-center text-sm font-semibold hover:bg-green-500'
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
              className='w-2/4 bg-redfooter h-7'
              onClick={handleCancel}
            >
              VOLTAR
            </button>
            <button 
              className='w-2/4 bg-footer h-7'
              onClick={handlePost}
            >
              POSTAR
            </button>

        </div>
      </div> 

      
    </ReactModal>
  );
};

export default PopUpVideoUpload;