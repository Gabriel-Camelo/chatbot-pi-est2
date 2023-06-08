import axios from "axios";
import React, { useEffect, useState } from "react";


function FramManual({document, id}){
    const [ idValue, setIdValue ] = useState(null);
    const [download, setDownload] = useState(null);
    const [ mouseEnter, setMouseEnter ] = useState(null);
    const [view, setView] = useState(null);

    useEffect(() => {
        if (id !== undefined) {
            setIdValue(id)
        }
    }, [id]);

    useEffect(() => {
        if (idValue !== null) {
            axios.get(`http://localhost:8000/api/manuais/${idValue}`, {responseType: 'blob'})
            .then(response => {
                const blob = new Blob([response.data], { type: 'application/pdf' });
                setDownload(blob);
                setView(URL.createObjectURL(blob));
            })
            .catch((error) => console.log(error));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idValue]);
    
    const handleView = () => {
        window.open(view, '_blank');
    }

    return(
        <div 
            className="h-40 m-auto flex items-center justify-center
            mobile:w-90c
            desktop:w-4/5
            "
        > 
        <span 
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
            className="w-3/4 h-3/4"
        >
            <div 
                className="bg-green-400 h-5/6 flex items-center justify-center"
            >
                <div>
                    <img 
                        src="/img/Pdf-Icon.svg" alt="Icon PDF"
                        className="w-16"
                    />
                </div>

                <div 
                    className=" w-4/6"
                >
                    <h2 
                        className="text-green-950 mt-3 font-roboto"
                    >
                        {`${document}`}
                    </h2>
                    <div 
                        className="flex"
                    >
                        <div 
                            className="w-full flex justify-end items-end cursor-pointer"
                        >
                        {download && (
                            <a 
                                href={URL.createObjectURL(download)} 
                                download={document}
                                className="w-1/6 mr-0 "
                                >
                                <img 
                                    src="/img/Download-Icon.svg"
                                    alt="Icon Download"
                                    className="w-full"
                                />
                            </a>
                        )}
                        </div>
                    </div>
                </div>

            </div>
            <button 
                    onClick={handleView}
                    className={`font-exo2 items-center justify-center w-full h-1/4 bg-footer bottom-0 font-exo2 ${mouseEnter ? "block" : "mobile:block desktop:hidden"}`}
                >
                Visualizar
            </button>
        </span>

    </div>
    )
}

export default FramManual;