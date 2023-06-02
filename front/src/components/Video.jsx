import React, {useState} from "react";

function Video(props){
    const {link} = props;
    const {description} = props;

    const [isLoading, setIsLoading] = useState(true);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div 
            className="h-96 w-full m-auto flex items-center justify-center text-white flex-col"
        >
            {isLoading && <div className="text-2xl text-center  text-letter">Carregando...</div>}
            <iframe  
                src={`${link}`} 
                title="YouTube video player"
                onLoad={handleIframeLoad}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                className="w-5/6 h-5/6"
            >   
            </iframe>
            <p 
                className="text-center text-footer font-error text-lg font-bold mt-1"
            >
                {description}
            </p>
        </div>
    )
}

export default Video;