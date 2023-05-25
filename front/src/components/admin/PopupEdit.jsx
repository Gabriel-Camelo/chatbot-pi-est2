import ReactModal from 'react-modal';
import { useState } from 'react';


const PopupEdit = ({ isOpen, onClose }) => {

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
          maxWidth: '50vw',
          maxHeight: '45vh',
          width: '100%',
          height: '100%',
          overflow: 'auto',
        },
      }}
    >

      <div className='bg-green-600 w-full h-9 flex items-center justify-center text-white font-roboto font-bold text-lg'>
        <h1>EDITE O MATERIAL</h1>
      </div>

      <div className='flex items-center justify-center flex-col w-full h-4/6 text-lg'>
        <div className='w-full h-2/4 flex flex-row'>
            <div className='w-3/12 h-full bg-white flex items-center justify-end '>
                Descrição:
            </div>
            <div className='flex items-center justify-center w-9/12 '>
                <form className='w-full h-full flex items-center justify-center'>
                   <textarea type='text' 
                        value={text}
                        onChange={handleChangeText}
                        className='h-5/6 w-11/12 border-2 border-gray-400 focus:outline-none focus:border-green-700 focus:ring-green-700 pl-2 pr-2'/>
                </form>

            </div>
        </div>
        <div className='w-full h-2/4 flex flex-row'>
            <div className='w-3/12 h-full bg-white flex items-center justify-end '>
                Tipo de material:
            </div>
            <div className='flex items-center justify-start w-9/12 '>
                <form className='pl-6'>
                    <input type='radio' 
                        name="option" 
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={handleChange}></input>
                    <label className='pl-4'>Manual</label><br/>

                    <input type='radio' 
                        name="option" 
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={handleChange}></input>
                    <label className='pl-4'>Vídeo</label><br/>

                    <input type='radio' 
                        name="option" 
                        value="option3"
                        checked={selectedOption === 'option3'}
                        onChange={handleChange}></input>
                    <label className='pl-4'>Edital</label>
                </form>
            </div>

        </div>
      </div>

      <div className=' w-full h-1/6 flex justify-around font-roboto font-extrabold text-white pt-4'>
        <button className='w-2/6 bg-redfooter h-7'
          onClick={onClose}
          >CANCELAR</button>
        <button className='w-2/6 bg-footer h-7'
          onClick={onClose}
          >SALVAR</button>

        </div>
    </ReactModal>
  );
};

export default PopupEdit;