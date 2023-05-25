import ReactModal from 'react-modal';
import { useState } from 'react';


const PopUpUpload = ({ isOpen, onClose }) => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [text, setText] = useState('');

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
        className='flex items-center justify-center flex-col w-full h-full text-lg'
      >
       <div 
        className='w-full h-1/5 flex flex-row'
      >
            <div 
              className='h-full flex items-center justify-end
              mobile:text-sm mobile:w-3/12
              desktop:text-xl desktop:w-2/12
              '
            >
                Descrição:
            </div>
            <div 
              className='flex items-center justify-center w-10/12 h-full'
            >
                <form 
                  className='w-full h-full flex items-center justify-center'
                >
                   <textarea 
                    type='text'                         
                    value={text}
                    onChange={handleChangeText}
                    className='h-5/6 w-11/12 border-2 border-gray-400 focus:outline-none focus:border-green-700 focus:ring-green-700 pl-2 pr-2'
                    />
                </form>
            </div>
        </div> 



        <div 
          className='w-full h-1/5 flex flex-row'
        >
            <div 
              className='h-full flex items-center justify-end
              mobile:w-8/12 mobile:text-sm
              desktop:w-4/12 desktop:text-xl              
              '
            >
                Tipo de material:
            </div>
            <div 
              className='flex items-center justify-start w-9/12 '
            >
                <form 
                  className='pl-6
                  mobile:text-sm
                  desktop:text-xl 
                  '
                >
                    <input 
                      type='radio' 
                      name="option" 
                      value="option1"
                      checked={selectedOption === 'option1'}
                      onChange={handleChange}
                    >
                    </input>
                    <label 
                      className='pl-4'
                    >
                      Manual
                    </label> <br/>

                    <input 
                      type='radio' 
                      name="option" 
                      value="option2"
                      checked={selectedOption === 'option2'}
                      onChange={handleChange}
                    >
                    </input>
                    <label 
                      className='pl-4'
                    >
                      Vídeo
                    </label> <br/>

                    <input 
                      type='radio' 
                      name="option" 
                      value="option3"
                      checked={selectedOption === 'option3'}
                      onChange={handleChange}
                    >
                    </input>
                    <label 
                      className='pl-4'
                    >
                      Edital
                    </label>
                </form>
            </div>
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
                    <h3 
                      className=' text-green-800 text-base mb-2'
                    >
                      Arraste e solte os arquivos até aqui ou
                    </h3>
                   <form>
                        <input 
                          type="file" 
                          id="upload" 
                          class="file-upload" 
                          className='hidden' 
                        />
                        <label 
                          for="upload" 
                          class="custom-file-upload" 
                          className='flex cursor-pointer bg-green-600 text-white rounded-sm h-8 w-48 justify-center items-center text-sm font-semibold hover:bg-green-500'
                        >
                          SELECIONE O ARQUIVO...
                        </label>
                   </form>
                
                </div>
            </div>
        </div>
        <div 
          className=' w-full h-8 flex justify-around font-roboto font-extrabold text-white mb-2'
        >
            <button 
              className='w-2/6 bg-redfooter h-7'
              onClick={onClose}
            >
              CANCELAR
            </button>
            <button 
              className='w-2/6 bg-footer h-7'
              onClick={onClose}
            >
              SALVAR
            </button>

        </div>
      </div> 

      
    </ReactModal>
  );
};

export default PopUpUpload;