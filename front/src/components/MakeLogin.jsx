import React from "react";
import { NavLink } from "react-router-dom";

function MakeLogin(){
    return(
        <NavLink
            to="/login"
        >
            <button className="h-10 bg-green-600 flex items-center justify-center fixed text-white top-3 right-4 w-32 font-exo2 rounded-sm hover:bg-green-500">
                Fazer login
            </button>
        </NavLink>
    )
}

export default MakeLogin;