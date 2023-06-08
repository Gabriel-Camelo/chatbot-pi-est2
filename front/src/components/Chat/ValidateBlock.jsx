import React from "react";

function ValidateBlock({text, setValidation, retoric}) {
  return (
    <div
      className="h-7 text-gray-800 text-center mb-16 text-sm
      mobile:w-full
      desktop:w-68c
      "    
    >
      <div
        className="flex flex-col gap-4"
      >
        <p>
          {text}
        </p>
        <div
          className="flex flex-row justify-center  gap-2"
        >
          <button
            type="button"
            className="bg-gray-800 rounded-md text-white pl-1 pr-1"
            onClick={() => {
              if (!retoric) setValidation({'result': 'yes'}); 
              else  setValidation({'result': 'continue'});      
            }}
          >
          Sim
          </button>
          <button
            type="button"
            className="bg-gray-800 rounded-md text-white pl-1 pr-1"
            onClick={() => {
              if (!retoric) setValidation({'result': 'no'});
              else  setValidation({'result': 'continue'});      
            }}
          >
          Não
          </button>
        </div>
      </div>
    </div>
  );
}

export default ValidateBlock;
