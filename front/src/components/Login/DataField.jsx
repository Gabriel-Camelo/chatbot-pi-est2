import React, { useContext } from "react";
import { FieldContext } from "../../contexts/FieldContext";

function DataField(props) {
  const { label } = props;
  const { type } = props;
  const { holder } = props;

  const { setMail, setPasswd } = useContext(FieldContext);

  const handleChange = (event) => {
    const value = event.target.value;
    if (type === "password") {
      setPasswd(value);
    } else if (type === "email") {
      setMail(value);
    }
  };

  return(
    <div
      className="flex flex-row gap-3 text-center justify-center items-center pb-1"
    >
      <label
        className="text-login-label font-bold"
      >
        {label}:
      </label>
      <input
        className="outline-none caret-black border-b"
        type={type}
        placeholder={holder}
        onChange={handleChange}
      />
    </div>
  );
}

export default DataField;