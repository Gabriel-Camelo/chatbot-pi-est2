import React, { useState } from "react";
import AMenu from "../../components/admin/AMenu";
import Background from "../../components/Background";
import Exit from "../../components/admin/Exit";
import VideoAdmin from "../../components/admin/VideoAdmin";
import SessionProtect from "../../components/Login/SessionProtect";


function AVideos(){
    const [ docs, setDocs ] = useState([
        <VideoAdmin link="https://www.youtube.com/embed/qUjRTg0U0Qs"></VideoAdmin>,
        <VideoAdmin link="https://www.youtube.com/embed/in24OC-inBc"></VideoAdmin>,
        <VideoAdmin link="https://www.youtube.com/embed/qUjRTg0U0Qs"></VideoAdmin>,
        <VideoAdmin link="https://www.youtube.com/embed/in24OC-inBc"></VideoAdmin>,
        <VideoAdmin link="https://www.youtube.com/embed/qUjRTg0U0Qs"></VideoAdmin>,
        <VideoAdmin link="https://www.youtube.com/embed/in24OC-inBc"></VideoAdmin>,
        <VideoAdmin link="https://www.youtube.com/embed/qUjRTg0U0Qs"></VideoAdmin>,
        <VideoAdmin link="https://www.youtube.com/embed/in24OC-inBc"></VideoAdmin>,
    ])

    return (
        <>
            <SessionProtect/>
            <AMenu/>
            <Background/>
            <Exit/>
            <div //Screen
                className="absolute text-white flex flex-col justify-center items-center w-screen top-20"
            >
                <div //Título da página
                    className="w-full text-center mb-32"
                >
                    <h1 
                        className="font-oswald text-2xl mt-6"
                    >
                        Olá Administrador(a), seja Bem-Vindo(a)!
                    </h1>
                </div>

                <div //Container do painel central
                    className="w-full flex items-start justify-center"
                >
                    <div //Painel central
                        className="h-8/12 bg-white flex flex-col shadow-2xl justify-center items-center
                        mobile:w-11/12
                        desktop:w-10/12
                        "
                    >
                        <h1 //Cabeçalho do painel
                            className="w-11/12 flex justify-center h-11 items-center font-robot text-footer border-b-2 border-b-green-600"
                        >
                            Vídeos
                        </h1>
                        <div //Documentos
                            className={`w-full grid min-h-centralPanel
                            desktop:overflow-auto desktop:max-h-centralPanel
                            mobile:max-h-none mobile:pb-16

                            ${docs.length > 0 ? 'mobile:grid-cols-1 desktop:grid-cols-2' : 'text-center flex justify-center'}`}
                        >                            
                            {docs.length > 0 ? docs : 
                            <p 
                                className="pt-5 text-letter"
                            >
                                Nenhum vídeo disponível no momento
                            </p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AVideos;