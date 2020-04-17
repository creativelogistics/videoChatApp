import React from 'react';

import VideoItem from './UserVideo.jsx';

const Videos = (props) => {
    return(
        <div>
            <VideoItem audio = {props.audio} stream ={props.stream}></VideoItem>

        </div>
    )
}
export default Videos