import React, { useContext, useEffect, useState } from "react";
import FrameManual from "../components/FrameManual";
import Video from "../components/Video";
import NavBar from "../components/NavBar";
import Background from "../components/Background";
import axios from "axios";

function VidAndImages(){
    const [ docs, setDocs ] = useState({ docs: [], videos: [] });

    const [activeTab, setActiveTab] = useState("videos");

    useEffect(() => {

        axios.get('http://localhost:8000/api/videos')
        .then(response => updateVideos(response.data.map((element) => <Video key={element.id} link={element.link} description={element.titulo}/>)))
        .catch(error => console.log(error));

        axios.get('http://localhost:8000/api/manuais')
        .then(response => updateDocs(response.data.map((element) => <FrameManual key={element.id} id={element.id} document={element.titulo} />)))
        .catch(error => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateVideos = (newVideos) => setDocs(prevState => ({...prevState, videos: newVideos}));
    const updateDocs = (newManuals) => setDocs(prevState => ({...prevState, docs: newManuals}));

    return (
        <>
            <NavBar/>
            <Background/>
            <div //Título da página
                className="absolute top-20 w-full text-center"
            >
                <h1 
                    className="text-white font-oswald text-2xl mt-6"
                >
                    Aproveite nossos tutoriais!
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
                        <div //Cabeçalho do painel
                            className="w-full"
                        >
                            <button
                                className={`w-1/2 h-11 items-center font-exo2 text-footer border border-b-green-600 ${
                                        activeTab === "videos"
                                        ? "bg-footer text-white"
                                        : "bg-slate-200 text-gray-900"
                                    }`}
                                onClick={() => setActiveTab('videos')}
                            >
                                VÍDEOS
                            </button>
                            <button
                                className={`w-1/2 h-11 items-center font-exo2 text-footer border border-b-green-600 ${
                                        activeTab === "manuals"
                                        ? "bg-footer text-white"
                                        : "bg-slate-200 text-gray-900"
                                    }`}
                                    onClick={() => setActiveTab('manuals')}
                            >
                                MANUAIS
                            </button>
                        </div>
                        <div //Documentos
                            className={`w-full min-h-centralPanel
                            desktop:overflow-auto desktop:max-h-centralPanel
                            mobile:max-h-none mobile:pb-16 text-center

                            ${(docs.docs.length > 0 && activeTab === 'manuals') || (docs.videos.length > 0 && activeTab === 'videos') ? 'grid mobile:grid-cols-1 desktop:grid-cols-2' : 'text-center flex justify-center'}`}
                        >                            
                            {docs.docs.length > 0 && activeTab === 'manuals' && docs.docs}
                            {docs.videos.length > 0 && activeTab === 'videos' && docs.videos}
                            {docs.docs.length === 0 && activeTab === 'manuals' &&
                                <p 
                                    className="pt-5 text-letter"
                                >
                                    Nenhum manual disponível no momento
                                </p>    
                            }
                            {docs.videos.length === 0 && activeTab === 'videos' && 
                                <p 
                                    className="pt-5 text-letter"
                                >
                                    Nenhum video disponível no momento
                                </p> 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VidAndImages;