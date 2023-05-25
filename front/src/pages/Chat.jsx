/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef }  from "react";
import { animateScroll as scroll } from 'react-scroll';
import axios from "axios";

import Background from "../components/Background";
import BadLoading from "../components/Chat/BadLoading";
import Message from "../components/Chat/Message";
import MenuMessage from "../components/Chat/MenuMessage";
import ValidateBlock from "../components/Chat/ValidateBlock";
import TextBox from "../components/Chat/TextBox";
import NavBar from "../components/NavBar";

function Chat () {
  const [ conversation, setConversation ] = useState([]);
  const [ userMSG, setUserMSG ] = useState({'type': '', 'text': ''});
  const [ selection, setSelection ] =useState({'text': '', 'counter': 0});
  const [ validation, setValidation ] =useState({'result': ''});
  const [ hello, setHello ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ questions, setQuestions ] = useState([]);

  const ref = useRef(null);
  
  //Consultar mensagem de saudação
  useEffect(() => {
    axios.get('http://localhost:8000/api/hello')
    .then(response => setHello((response.data)))
    .catch(error => {
      setConversation([...conversation, errorGen()]);
    });
  }, []);

  //Captar mensagem do usuário
  useEffect(() => {
    if (userMSG.text !== '') {
      setConversation([...conversation, dialogueGen('user', userMSG.text)]);
      setSearch(userMSG.text);
    }
  }, [userMSG]);

  //Consultar perguntas respectivas às palavras chave
  useEffect(() => {
    if (search) {
      axios.get('http://localhost:8000/api/keywords/'+userMSG.text)
    .then(response => {
      if (response.data.length === 0) {
        setConversation([...conversation, dialogueGen("robot", "Acabei não encontrando nada relacionado a sua descrição. Poderia dar mais informações?")]);
      }
      setQuestions((response.data))
    }).catch(error => {
      setConversation([...conversation, errorGen()]);
    });
  }
  }, [search]);

  //Auto-Scroll
  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  //Exibição das perguntas
  useEffect(() => {
    if (questions.length > 0) {
      setConversation([...conversation, menuGen()]);
    }
  }, [questions]);
  
  //Exibição de saudação
  useEffect(() => {
    if (hello.resposta !== undefined) {
      setConversation([...conversation, dialogueGen("robot", hello.resposta)]);
    }
  }, [hello.resposta]);

  //Tratamento na apresentação pelo componente com menu (MenuMessageGen) 
  useEffect(() => {
    if (selection.text !== '') {
      if (selection.counter === 1) {
        setConversation(prevConversation => [
          ...prevConversation.slice(0, prevConversation.length - 2),
          dialogueGen("robot", selection.text), validationGen()
        ]);
      }else
        setConversation([...conversation, dialogueGen("robot", selection.text), validationGen()]);
    }
  }, [selection.text]);

  //Direciona segunda a validação (validationGen)
  useEffect(() => {
    if (validation.result === 'yes') {
      setConversation([...conversation, dialogueGen("robot", "Fico em feliz em ter ajudado!")]);
    } else if (validation.result === 'no'){
      setDefaultProps();
      setConversation([...conversation, dialogueGen("robot", "Fale um pouco mais sobre seu problema, assim posso te ajudar melhor..")]);
    }
  }, [validation.result]);

  //Indicar mal conectividade com o servidor
  const errorGen = () => {
    return (
      <BadLoading/>
    );
  }
  
  //Gerar componente de mensagem com menu
  const menuGen = () => {
    return (
      <MenuMessage setSelection={setSelection}>
        {questions}
      </MenuMessage>
    );
  }

  //Gerar componente de mensagem normal
  const dialogueGen = (type, text) => {
    return (
      <Message type={type} text={text}/>
      )
    }

  //Finalizar a conversa ou iniciar um novo loop
  const validationGen = () => {
    return (
      <ValidateBlock setValidation={setValidation}/>
    );
  }

  //Resetar propriedades
  const setDefaultProps = () => {
    setSearch(''); 
    setHello([]); 
    setQuestions([]);
    setSelection({'text': '', 'counter': 0});
  }

  //Ir para o final do container que possui scroll
  const scrollToBottom = () => {
      scroll.scrollToBottom({
        containerId: 'my-scrollable-div',
        duration: 200,
        smooth: true,
      });
  };
    

  return (
    <>
      <NavBar/>
      <Background/>
      <div
        className="absolute center bg-white shadow-xl overflow-hidden
        mobile:left-1/10 mobile:top-1/4 mobile:w-4/5 mobile:h-1/2
        desktop:left-1/4 desktop:top-1/4 desktop:w-1/2 desktop:h-1/2
        "
      >
      <header
            className="bg-chat-header text-center text-white"
          > 
            Chat Bot 
          </header>
        <div
          ref={ref}
          id="my-scrollable-div"
          className="absolute w-full h-full center bg-white shadow-xl overflow-auto pb-16"
        >
          {conversation}
        </div>   
        <TextBox setUserMSG={setUserMSG}/>
      </div>
    </>
  );
}

export default Chat;