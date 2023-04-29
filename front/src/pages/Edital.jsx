import React from "react";
import NavBar from "../components/NavBar";
import Background from "../components/Background";
import FrameEdital from "../components/FrameEdital";
import MakeLogin from "../components/MakeLogin";



function Edital(){

    return (
        
        <>
        <NavBar/>
        <Background/>
        <MakeLogin/>
        <div 
        className="absolute top-20 text-white flex justify-center w-full h-5/6">
                    <div className=" flex flex-col justify-center items-center w-8/12">
                        <h1 className="font-oswald text-2xl mt-6">Aproveite nossos tutoriais!</h1>
                        <div className="flex flex-col w-11/12 h-4/6 items-center justify-center mt-28 drop-shadow-lg">
                            <div className="w-full flex justify-center h-11 items-center  bg-white">
                                <nav className="w-11/12 flex justify-center h-11 items-center font-roboto text-footer border-b-2 border-b-green-600">
                                    <h1
                                    className="flex items-center justify-center font-roboto h-10 text-2xl "
                                    // style={linkStyle}
                                    >
                                    Editais
                                    </h1>
                                </nav>
                            </div>
                            <div className="h-full w-full bg-white grid grid-cols-2 gap-x-4 text-white ">
                                <FrameEdital src="/img/Download-Icon.svg" alt="Icon Download" document="Permanencia 2023.1"></FrameEdital>
                                <FrameEdital src="/img/Download-Icon.svg" alt="Icon Download" document="Moradia 2023.1"></FrameEdital>

                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Edital;