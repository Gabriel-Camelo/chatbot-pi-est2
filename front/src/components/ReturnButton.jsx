import React from "react";
import { NavLink } from "react-router-dom";

function ReturnButton({h, w, left, top, bg, color, value, to}) {

  return (
    <NavLink
      to={to}
    >
      <div
        className={`absolute ${top} ${left} h-${h} w-${w}`}
      >
        <input
          className={`h-full w-full bg-${bg} text-${color} cursor-pointer`}
          type="button"
          value={value}
        />
      </div>
    </NavLink>
  );
}

export  default ReturnButton;