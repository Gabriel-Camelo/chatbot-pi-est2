import React from "react";

function Video(props){
    const {link} = props;
    return (
        <div className="h-5/6 w-3/4 m-auto flex items-center justify-center text-white">
            <iframe  src={`${link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="w-5/6 h-5/6"></iframe>
        </div>
    )
}

export default Video;