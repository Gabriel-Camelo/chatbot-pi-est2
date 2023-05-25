import { createContext, useState } from "react";

const FieldContext = createContext({});

function FieldProvider({ children }) {
  const [ mail, setMail] = useState('');
  const [ passwd, setPasswd] = useState('');

  return (
    <FieldContext.Provider value={{mail, passwd, setMail, setPasswd}}>
      {children}
    </FieldContext.Provider>
  );
}

export { FieldContext, FieldProvider };