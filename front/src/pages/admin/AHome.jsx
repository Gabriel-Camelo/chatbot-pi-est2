import React from "react";
import { useState } from "react";
import Exit from "./../../components/admin/Exit";
import AMenu from "../../components/admin/AMenu";
import Background from "./../../components/Background"
import FrameAdmin from "../../components/admin/FrameAdmin";
import SessionProtect from "../../components/Login/SessionProtect";
import FrameUpload from "../../components/admin/FrameUpload";

function AHome(){
    const [activeTab, setActiveTab] = useState("edit");
      
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (   
        <>
            <SessionProtect/>
            <AMenu/>
            <Background/>
            <Exit/>
            <div
                className="absolute text-white flex justify-center w-full h-5/6
                mobile:top-96
                desktop:top-20
                "
            >
                    <div 
                        className=" flex flex-col justify-center items-center w-10/12"
                    >
                        <h1 
                            className="font-oswald text-2xl mt-6"
                        >
                            Olá Administrador(a), seja Bem-Vindo(a)!
                        </h1>
                        <div 
                            className="flex flex-col items-center justify-center mt-16 drop-shadow-lg
                            mobile:w-11/12 mobile:h-auto mobile:pb-20
                            desktop:w-10/12 desktop:h-4/6
                            "
                        >
                            <nav 
                                className="w-full flex justify-center h-11 items-center top-3 divide-x-2 font-roboto bg-footer"
                            >
                                <button  
                                    onClick={() => handleTabClick("edit")}
                                    className={
                                        `${activeTab === "edit" ?
                                        "bg-footer text-white" :
                                        "bg-slate-200 text-gray-800"} 
                                        flex items-center justify-center w-2/4 font-roboto h-10`
                                    }                                
                                >
                                    EDITAR MATERIAL
                                </button>
                                <button 
                                    onClick={() => handleTabClick("post")}
                                    className={
                                        `${activeTab === "post" ?
                                        "bg-footer text-white" :
                                        "bg-slate-200 text-gray-800"} 
                                        flex items-center justify-center w-2/4 font-roboto h-10`
                                    }                                
                                >
                                    POSTAR MATERIAL
                                </button>
                            </nav>
                            <div 
                                className="h-full w-full  text-black bg-white
                                mobile:pt-20 mobile:pb-20
                                desktop:pt-0 desktop:pb-0
                                "
                            >
                            <div 
                                className="h-full w-full"
                            >
                                {activeTab === "edit" && (
                                    <div 
                                        className="h-full w-full flex text-black justify-center items-center
                                        mobile:flex-col mobile:gap-y-24
                                        desktop:flex-row desktop:gap-x-24
                                        "
                                    >
                                        <FrameAdmin 
                                            src="/img/admin/Manuais-icon.png" 
                                            alt="Redirecionamento manuais" 
                                            className="w-28 object-cover" 
                                            tittle="Manuais" 
                                            to="/admin/manuals"
                                        />
                                        <FrameAdmin 
                                            src="/img/admin/icon-documentAdmin.png" 
                                            alt="Redirecionamento edital" 
                                            className="w-20 object-cover mt-2" 
                                            tittle="Editais" 
                                            to="/admin/edicts"
                                        />
                                        <FrameAdmin 
                                            src="/img/admin/video-icon.png" 
                                            alt="Redirecionamento vídeos" 
                                            className="w-28 object-cover" 
                                            tittle="Vídeos" 
                                            to="/admin/videos"
                                        /> 
                                    </div>
                                )}
                                {activeTab === "post"&& (
                                <div 
                                    className="h-full w-full flex text-black justify-center items-center
                                    mobile:flex-col mobile:gap-y-24
                                    desktop:flex-row desktop:gap-x-24
                                    "
                                >
                                    <FrameUpload 
                                        src="/img/admin/Manuais-icon.png" 
                                        alt="Redirecionamento manuais" 
                                        className="w-28 object-cover" 
                                        tittle="Manuais"
                                    />
                                    <FrameUpload 
                                        src="/img/admin/icon-documentAdmin.png" 
                                        alt="Redirecionamento edital" 
                                        className="w-20 object-cover mt-2" 
                                        tittle="Editais"
                                    />
                                    <FrameUpload 
                                        src="/img/admin/video-icon.png" 
                                        alt="Redirecionamento vídeos" 
                                        className="w-28 object-cover" 
                                        tittle="Vídeos"
                                    />
                                </div>
                            )}
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default AHome;