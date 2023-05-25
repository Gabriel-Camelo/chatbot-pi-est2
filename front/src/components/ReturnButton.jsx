import React from "react";
import { NavLink } from "react-router-dom";

function ReturnButton({h, w, left, top, bg, color, value, to}) {

  return (
    <NavLink
      to={to}
    >
      <div
        className={`absolute ${top} ${left} h-${h} w-auto bg-${bg} flex flex-row p-1`}
      >
        <img
          className="w-10"
          src="/img/returnIcon.svg"
          alt="Icone de retorno"
        >

        </img>
        <input
          className={`h-full w-full text-${color} cursor-pointer`}
          type="button"
          value={value}
        />
      </div>
    </NavLink>
  );
}

export  default ReturnButton;