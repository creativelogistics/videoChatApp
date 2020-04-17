import React from 'react';

const Video  = (props) =>{
    return(
        <video 
        playsInline 
        ref={props.stream} 
        autoPlay
            id="player" 
            width="20%" 
            height="20%" 
           >
        </video>
    )
}
export default Video;