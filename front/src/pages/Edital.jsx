import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import FrameEdital from "../components/FrameEdital";
import NavBar from "../components/NavBar";
import axios from "axios";

function Edital(){
    const [ docs, setDocs ] = useState([  
    ])

    useEffect(() => {

        axios.get('http://localhost:8000/api/editais')
        .then(response => updateDocs(response.data.map((element) => <FrameEdital key={element.id} id={element.id} document={element.titulo} />)))
        .catch(error => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateDocs = (newManuals) => setDocs(newManuals);

    return (
        <>
            <NavBar/>
            <Background/>
            <div //Screen
                className="absolute text-white flex flex-col justify-center items-center w-screen top-20"
            >
                <div //Título da página
                    className="w-full text-center mb-32"
                >
                    <h1 
                        className="font-oswald text-2xl mt-6"
                    >
                        Aproveite nossos tutoriais!
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
                            Editais
                        </h1>
                        <div //Documentos
                            className={`w-full grid min-h-centralPanel
                            desktop:overflow-auto desktop:max-h-centralPanel
                            mobile:max-h-none mobile:pb-16

                            ${docs.length > 0 ? 'mobile:grid-cols-1 desktop:grid-cols-3' : 'text-center flex justify-center'}`}
                        >                            
                            {docs.length > 0 ? docs : 
                            <p 
                                className="pt-5 text-letter"
                            >
                                Nenhum edital disponível no momento
                            </p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default Edital;