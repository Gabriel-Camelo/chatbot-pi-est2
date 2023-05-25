import React, { useEffect, useState } from "react";
import Robot from "./Robot";
import MenuBallon from "./MenuBallon";
import { v4 as uuidv4 } from 'uuid';

function MenuMessage(props) {
  const [ list, setList ] = useState([]);
  const [ counter, setCounter ] = useState(0);

  let answers;

  useEffect(() => {
    if (props.children) {
      setList([...props.children]);
    }
  }, [props.children]);
  
  if (props) {
    answers = list.map((element) => {
      const id = uuidv4();
      return (
        <button
          key={id}
          type="button"
          className="w-full p-2 hover:bg-gray-800 focus:bg-gray-800 bg-menu text-start rounded-md border " 
          onClick={() => {
            props.setSelection({'text': element.resposta, 'counter': counter});
            setCounter(1);
          }}
        >
          {element.pergunta}
        </button>
      );
    })
  }

  return (
    <div
      className="overflow-auto flex flex-row items-start gap-8 pl-4 pt-4 pb-4"
    >
      <Robot/>
      <MenuBallon side="left">
          <p
            data-testid="paragraph"
            className="pl-1"
          >
          Algum desses tópicos diz algo sobre sua dúvida? ( Você pode clicar em qualquer um deles para receber a resposta logo abaixo )
          </p>
          {answers}
      </MenuBallon>
    </div>
  );
}

export default MenuMessage;