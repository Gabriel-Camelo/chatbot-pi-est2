import React from "react";
import Background from '../components/Background';
import NavBar from "../components/NavBar";
import MakeLogin from "../components/MakeLogin";

function About(){
    return (
        <>
            <NavBar/>
            <Background/>
            <MakeLogin/>
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
                        <h1 //Cabeçalho do painel
                            className="w-11/12 flex justify-center h-11 items-center font-exo2 text-footer border-b-2 border-b-green-600"
                        >
                            Sobre o nosso sistema
                        </h1>
                        <div className="w-11/12  font-roboto min-h-centralPanel text-justify mobile:text-sm desktop:text-xl text-green-800 flex flex-col pt-16 pb-16 gap-5" p>
                            <p>
                            O sistema é uma ferramenta criada para auxiliar no processo de inscrição no programa de Manutenção Acadêmica disponibilizado pelo IFPE-Campus Belo Jardim. Nele é possível acessar aos editais divulgados, aos tutoriais disponíveis e conversar com assistente virtual, que tira dúvidas e facilita o entendimento do usuário. A abordagem do ChatBot Manu, como é chamado o assistente virtual, é voltada para a comunicação informal, com intuito de cativar o usuário e facilitar na hora tirar suas dúvidas.
                            </p>
                            
                            <p>
                            O objetivo do sistema é possibilitar a centralização de informações de forma intuitiva, através de uma análise prévia das principais dúvidas que os discentes possuem no ato de inscrição no programa de Manutenção Acadêmica no portal Fluxo - IFPE.
                            </p>
                            
                            <p>
                            Desenvolvido pelos discentes do 5° Período de Engenharia de Software do Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco - Campus Belo Jardim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}

export default About;