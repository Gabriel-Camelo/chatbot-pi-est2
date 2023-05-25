import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function MakeLogin(){
    const { token } = useContext(AuthContext);

    return(
        ((!token.access_token || token.access_token === 'denied') &&
            <NavLink
                to="/login"
            >
                <button className="h-10 bg-green-600 flex items-center justify-center fixed text-white top-3 right-4 w-32 font-exo2 rounded-sm hover:bg-green-500
                mobile:hidden
                desktop:block
                ">
                    Fazer login
                </button>
            </NavLink>
            )
    )
}

export default MakeLogin;