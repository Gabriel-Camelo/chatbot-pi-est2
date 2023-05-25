import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function AMenu(){
    const [ menu, setMenu ] = useState('closed');
    const { token, setCredentials } = useContext(AuthContext);


    return (
        <>
            <nav 
            className="w-screen flex justify-center h-8 items-center top-3 absolute divide-x-2 font-roboto
            mobile:hidden
            desktop:flex
            "
            >
                <NavLink 
                activeClassName="active"
                to="/admin/"           
                className="w-32 h-8 flex items-center justify-center text-white" 
                > 
                
                HOME
                </NavLink>

                <NavLink 
                activeClassName="active"
                to="/admin/about" 
                className="w-32 h-8 flex items-center justify-center text-white" 
                >
                SOBRE
                </NavLink>
            </nav>
            <button
                className="absolute w-10 top-3 right-4 
                desktop:hidden
                mobile:flex
                "
                onClick={() => {
                    (menu === 'opened' ? setMenu('closed') : setMenu('opened'))
                }}
            >   
                {menu === 'opened' && 
                    <img
                        className="w-8"
                        src="/img/crossIcon.svg"
                        alt="Ícone de x"
                    >
                    </img>
                }
                {menu === 'closed' &&
                <img
                    className="w-full"
                    src="/img/menuIcon.svg"
                    alt="Ícone de menu hamburguer"
                >
                </img>
                }
            </button>
            {menu === 'opened' && (
            <ul 
                className="absolute w-24 top-12 right-4 bg-white border shadow-md text-menu-hamburguer flex flex-col h-auto z-50
                mobile:block
                desktop:hidden
                "
            >
                <NavLink 
                    className="block h-full" 
                    to="/admin/"
                >
                    <li 
                        className="p-2 text-center hover:bg-gray-200 cursor-pointer"
                    >
                        HOME
                    </li>
                </NavLink>

                <NavLink 
                    className="block h-full" 
                    to="/admin/about"
                >
                    <li 
                        className="p-2 text-center hover:bg-gray-200 cursor-pointer"
                    >
                        SOBRE
                    </li>
                </NavLink>

                <NavLink 
                    className="block h-full" 
                    to={!token.access_token || token.access_token === 'denied' ? '/login' : '/'}
                    onClick={() => setCredentials({"email": 'logout',"password": 'logout'})}
                >
                    <li 
                        className="p-2 text-center hover:bg-gray-200 cursor-pointer"
                    >
                        SAIR
                    </li>
                </NavLink>
            </ul>
            )}
        </>
    )
}

export default AMenu;