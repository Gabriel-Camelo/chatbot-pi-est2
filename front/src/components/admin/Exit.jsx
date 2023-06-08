import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Exit(){
    const { token, setCredentials } = useContext(AuthContext);

    return(
        <NavLink //Botão de saída (Logout)
            to={!token.access_token || token.access_token === 'denied' ? '/login' : '/'}
            onClick={() => setCredentials({"email": 'logout',"password": 'logout'})} //Reseta as credenciais
        >
            <button className="h-10 bg-green-600 flex items-center justify-center fixed text-white top-3 right-4 w-24 font-exo2 rounded-sm hover:bg-green-500
            mobile:hidden
            desktop:block 
            ">
                SAIR
            </button>
        </NavLink>
    )
}

export default Exit;