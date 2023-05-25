import React from "react";

function Video(props){
    const {link} = props;
    const {description} = props;

    return (
        <div 
            className="h-96 w-full m-auto flex items-center justify-center text-white flex-col"
        >
            <iframe  
                src={`${link}`} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                className="w-5/6 h-5/6"
                allowfullscreen 
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