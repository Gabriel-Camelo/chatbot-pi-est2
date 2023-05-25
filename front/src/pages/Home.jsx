import React from "react";
import MakeLogin from "../components/MakeLogin";
import Background from "../components/Background";
import Frame from "../components/Frame";
import NavBar from "../components/NavBar";



function Home(){
    return (
        <>
            <NavBar/>
            <Background/>
            <div 
                className="absolute text-white flex justify-center w-full h-4/6
                desktop:top-1/4
                mobile:top-1/2
                "
            >
                <MakeLogin/>
                    <div 
                        className=" flex flex-col justify-center items-center w-9/12"
                    >
                        <h1 
                            className="-mt-9 font-oswald 
                            desktop:text-2xl
                            mobile:text-mobiletxt
                            "
                        >
                            Tire duvidas com nosso assistente a qualquer hora!
                        </h1>
                        <div 
                            className="flex flex-row gap-20 w-full items-center justify-center mt-28 pb-1/5
                            mobile:flex-col 
                            desktop:flex-row
                            "
                        >
                            <Frame 
                                src="/img/icon-fluxo.png"  
                                alt="logo de inicio" 
                                className="w-36 object-cover" 
                                tittle="Comece por aqui" 
                                to="/home/starts"                             
                            />
                            <Frame 
                                src="/img/icon-document.png" 
                                alt="logo de edital" 
                                className="w-18 h-20 object-cover mt-2" 
                                tittle="Edital" 
                                to="/edital"
                            />
                            <Frame 
                                src="/img/icon-chat.png" 
                                alt="logo de chat" 
                                className="w-24 object-cover" 
                                tittle="Chat" 
                                to="/chat"
                            />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Home;