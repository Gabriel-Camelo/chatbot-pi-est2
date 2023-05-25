import React from "react";

function BadLoading() {
  return (
    <>
      <div
        className="w-full min-h-7 bg-red-400 text-white text-center"
      >
        Erro ao se conectar com o servidor, tente novamente mais tarde..
      </div>
    </>
  )
}

export default BadLoading;
