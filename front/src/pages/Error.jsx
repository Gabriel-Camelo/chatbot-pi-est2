import React from "react";


function ErrorPage(){
    return (
        <div 
            className="w-screen h-screen flex justify-center items-center"
        >
            <div 
                className=" w-3/4 h-3/4 flex justify-center items-center flex-col"
            >
                <img 
                    src="/img/error404.png" 
                    alt="Icon Error" 
                    className="object-contain w-3/5 h-3/5"                    
                />
                <h1 
                    className="text-6xl text-green-950 font-error "
                >
                    Page not found
                </h1>
            </div>
        </div>
    )
}

export default ErrorPage;