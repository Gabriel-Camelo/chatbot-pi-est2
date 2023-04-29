import React, { useState, useEffect }  from "react";
import axios from "axios";
import Message from "../components/Chat/Message";
import TextBox from "../components/Chat/TextBox";
import Background from "../components/Background";
import NavBar from "../components/NavBar";


function Chat () {
  const [hello, setHello] = useState([]);
  const [conversation, setConversation] = useState([]);
  const [userMSG, setUserMSG] = useState({'type':'', 'text': ''});
  
  useEffect(() => {
    //Consultar mensagem de saudação
    axios.get('http://localhost:8000/api/hello')
    .then(response => setHello((response.data)));
    
  }, []);

  useEffect(() => {
    setConversation([...conversation, dialogueGen(userMSG.type, userMSG.text)]);
  }, [userMSG]);
  
  useEffect(() => {
    if (hello.resposta != undefined) {
      //Renderizar primeira mensagem
      setConversation([...conversation, dialogueGen("robot", hello.resposta)]);
    }
  }, [hello.resposta]);
  
  const dialogueGen = (type, text) => {
    return (
      <Message type={type} text={text}/>
      )
    }

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