import React from 'react';

import VideoItem from './VideoItem.jsx';

const Videos = (props) => {
    return(
        <div>
            <VideoItem stream ={props.stream}></VideoItem>

        </div>
    )
}
export default Videos