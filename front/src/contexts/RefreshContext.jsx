import { createContext, useState } from "react";


const RefreshContext = createContext({});

function RefreshProvider({ children }) {
  const [ refresh, setRefresh ] = useState(true);

  return (
    <RefreshContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
}

export { RefreshContext, RefreshProvider };
