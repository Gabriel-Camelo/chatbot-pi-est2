import React, { useContext, useEffect, useState } from "react";
import AMenu from "../../components/admin/AMenu";
import Background from "../../components/Background";
import Exit from "../../components/admin/Exit";
import VideoAdmin from "../../components/admin/VideoAdmin";
import SessionProtect from "../../components/Login/SessionProtect";
import axios from "axios";
import { RefreshContext } from "../../contexts/RefreshContext";
import { AuthContext } from "../../contexts/AuthContext";


function AVideos(){
    const [ docs, setDocs ] = useState([])
    
    const { refresh } = useContext(RefreshContext);

    useEffect(() => {

        axios.get('http://localhost:8000/api/videos')
        .then(response => updateVideos(response.data.map((element) => <VideoAdmin key={element.id} unique={element.id}  link={element.link} description={element.titulo}/>)))
        .catch(error => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {

        axios.get('http://localhost:8000/api/videos')
        .then(response => updateVideos(response.data.map((element) => <VideoAdmin key={element.id} link={element.link} description={element.titulo}/>)))
        .catch(error => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);

    const updateVideos = (newVideos) => setDocs(newVideos);

    return (
        <>
            <SessionProtect/>
            <AMenu/>
            <Background/>
            <Exit/>
            <div //Título da página
                className="absolute top-20 w-full text-center"
            >
                <h1 
                    className="text-white font-oswald text-2xl mt-6"
                >
                    Olá Administrador(a), seja Bem-Vindo(a)!
                </h1>
            </div>

            <div //Screen
                className="absolute text-white flex  justify-center  w-full top-40"
            >
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