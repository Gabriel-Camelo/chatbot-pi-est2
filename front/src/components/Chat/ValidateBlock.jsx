import React from "react";

function ValidateBlock(props) {
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
          Essa reposta foi útil?
        </p>
        <div
          className="flex flex-row justify-center  gap-2"
        >
          <button
            type="button"
            className="bg-gray-800 rounded-md text-white pl-1 pr-1"
            onClick={() => {
              props.setValidation({'result': 'yes'});
            }}
          >
          Sim
          </button>
          <button
            type="button"
            className="bg-gray-800 rounded-md text-white pl-1 pr-1"
            onClick={() => {
              props.setValidation({'result': 'no'});
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
