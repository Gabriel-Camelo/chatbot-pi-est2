import React from "react";
import DataField from "../components/Login/DataField";
import ReturnButton from "../components/ReturnButton";

function Recover() {
  return(
    <main
      className="bg-ground-login w-full h-full bg-cover bg-no-repeat bg-center relative z-0"
    >
      <ReturnButton h="8" w="14" left="left-10" top="top-10" bg="buttom" value="Voltar" color="white" to="/login"/>
      <div
        className="bg-white absolute shadow-2xl z-10 flex flex-col items-center
        mobile:left-1/10 mobile:top-1/4 mobile:w-4/5 mobile:h-1/2
        desktop:left-3/10 desktop:top-1/5 desktop:w-2/5 desktop:h-3/5
        "
      >
        <form
          className="p-10 flex flex-col text-center items-center"
        >
        <div
          className="rounded-full bg-user-logo w-1/3 mb-4"
        >
          <img
            className="p-3"
            src="/img/login/user-icon.svg"
            alt="imagem do usuário"
          />
        </div>
          <p
          className="mb-4 text-sm text-red-500"
          >
            Por favor, nos informe o seu email de acesso para que possamos recuperar sua senha
          </p>
          <DataField label="Email" type="email" holder="Digite seu email"/>
        </form>
        <input
          className="bg-buttom text-white mt-4 cursor-pointer
          mobile:w-2/5 mobile:h-7
          desktop:w-2/5 desktop:h-7
          "
          type="submit"
          value="Recuperar"/>
      </div>
    </main>
  );
}

export default Recover;
