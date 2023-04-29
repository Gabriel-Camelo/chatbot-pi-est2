import {React, useState} from "react";

function TextBox(props) {
  const [valor, setValor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setValor("");
    props.setUserMSG({'type':'user', 'text': valor});
  }

  const handleChange = (event) => {
    setValor(event.target.value);
  };

  return (
      <div
          id="textBox"
          className="h-9 w-4/5 absolute bottom-2 left-1/10 bg-text-box rounded-lg z-20"
        >
          <div
            className="pr-2 h-full w-full"
          >
            <form
              className="h-full w-full flex flex-row items-center place-content-between"
              onSubmit={handleSubmit}
            >
              <div 
                className="flex-1"
              >
                <input 
                value={valor}
                onChange={handleChange}
                type="text" 
                id="first_name" 
                class="bg-transparent outline-none caret-black border-0 text-gray-900 text-sm w-full p-2.5" 
                placeholder="Por favor, digite aqui para interagir com o chat" 
                required
                />
              </div>
              <button
                className="h-auto w-6"
                type="submit"
              >
                <img
                  className="h-auto w-6"
                  src="/img/chat/send.png"
                  alt="icone de envio"
                />
              </button>
            </form>
          </div>
        </div>
  );
}

export default TextBox;