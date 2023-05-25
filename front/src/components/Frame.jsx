import React from "react";
import { NavLink } from "react-router-dom";

function Frame(props) {
  const { src } = props;
  const { alt } = props;
  const { className } = props;
  const { tittle } = props;
  const { to } = props;

  return (
    <NavLink
      to={to}
    >
      <div
        className="flex flex-col shadow-xl"
      >
        <button
          className="transition-opacity duration-500 ease-in-out bg-green-500 transform hover:-translate-y-1 hover:scale-110 divHover border"
        >
          <div
            className="w-56 text-black bg-gray-50 flex flex-col items-center justify-center shadow-lg transition delay-300 duration-300 ease-in-out
            mobile:h-52
            desktop:h-60
            "
          >
            <img
              src={`${src}`}
              alt={`${alt}`}
              className={`${className}`}
            />
            <h2
              className="text-green-900 mt-3"
            >
              {tittle}
            </h2>
        
          </div>
          <p className="phover bg-footer">Acessar</p>
        </button>
      </div>
    </NavLink>
  );
}

export default Frame;
