import { createContext, useEffect, useState } from "react";
import axios from "axios";


const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ token, setToken ] = useState({});
  const [ credentials, setCredentials ] = useState({});

  useEffect(() => {
    if (Object.keys(credentials).length === 2) {
      axios.post('http://localhost:8000/api/login', credentials)
      .then(response => setToken(response.data))
      .catch((response) => setToken({access_token:"denied"}));
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [credentials]);

  return (
    <AuthContext.Provider value={{token, credentials, setCredentials}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

//access_token