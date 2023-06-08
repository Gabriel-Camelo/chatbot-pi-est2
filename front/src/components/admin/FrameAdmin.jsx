import React from "react";
import { NavLink } from "react-router-dom";

function FrameAdmin(props) {
  const { src } = props;
  const { alt } = props;
  const { className } = props;
  const { tittle } = props;
  const { to } = props;

  return (
    <NavLink
      to={to}
    >
      <button //Frame
        className="transition-opacity duration-500 ease-in-out bg-green-500 transform hover:-translate-y-1 hover:scale-110 divHover "
      >
        <div //Container dentro do Frame
          className="w-56 h-60 text-black bg-gray-100 flex flex-col items-center justify-center shadow-lg transition delay-300 duration-300 ease-in-out"
        >
          <img //Imagem
            src={`${src}`}
            alt={`${alt}`}
            className={`${className}`}
          />
          <h2 //Título
            className="text-green-900 mt-3"
          >
            {tittle}
          </h2>
          
        </div>
        <p //Bottão dinâmico
          className="text-white bg-footer mobile:block desktop:hidden desktop:hover:block font-exo2"
        >
          Editar
        </p>
      </button>
    </NavLink>
  );
}

export default FrameAdmin;
