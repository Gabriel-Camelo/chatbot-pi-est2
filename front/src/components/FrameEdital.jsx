import React from "react";


function FrameEdital(props){
    const { document } = props;

    return(
        <div 
            className="h-40 m-auto flex items-center justify-center
            mobile:w-90c
            desktop:w-4/5
            "
        > 
        <span 
            className="editalhover w-3/4 h-3/4"
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
                        className="text-green-950 mt-3 "
                    >
                        {`${document}`}
                    </h2>
                    <div 
                        className="flex"
                    >
                        <div 
                            className="w-full flex justify-end items-end "
                        >
                            <img 
                                src="/img/Download-Icon.svg"
                                alt="Icon Download"
                                className="w-1/6 mr-0 "
                            />
                        </div>
                    </div>
                </div>

            </div>
            <button 
                className="w-full h-1/4 bg-footer bottom-0 font-exo2 text-white"
            >
                Visualizar
            </button>
        </span>

    </div>
    )
}

export default FrameEdital;