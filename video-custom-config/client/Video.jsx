import React from 'react';

const Video =(props)=> {
    return (
        <div style = {{display: "hidden"} } >
            <video 
                playsInline  
                autoPlay
                muted 
                ref={props.stream} 
                id="player" 
                width="20%" 
                height="20%"
            >
            </video>
        </div>    
    )
}
export default Video;