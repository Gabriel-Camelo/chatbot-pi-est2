import React, { useContext, useEffect, useState } from "react";
import AMenu from "../../components/admin/AMenu";
import Background from "../../components/Background";
import Exit from "../../components/admin/Exit";
import ManagementManuals from "../../components/admin/ManagementManuals";
import SessionProtect from "../../components/Login/SessionProtect";
import { RefreshContext } from "../../contexts/RefreshContext";
import axios from "axios";

function AManuals(){
    const [ docs, setDocs ] = useState([ 
    ])

    const { refresh } = useContext(RefreshContext);

    useEffect(() => {

        axios.get('http://localhost:8000/api/manuais')
        .then(response => updateDocs(response.data.map((element) => <ManagementManuals type={"manuais"} key={element.id} unique={element.id} document={element.titulo}/>)))
        .catch(error => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {

        axios.get('http://localhost:8000/api/manuais')
        .then(response => updateDocs(response.data.map((element) => <ManagementManuals type={"manuais"} key={element.id} unique={element.id} document={element.titulo}/>)))
        .catch(error => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);

    const updateDocs = (newDocs) => setDocs(newDocs);


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
                            Manuais
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
                                Nenhum manual disponível no momento
                            </p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AManuals;