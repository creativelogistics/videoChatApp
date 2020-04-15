import React from 'react';

const UserListItem = (props) => {
    return ( 
        
            <li  onClick={(event)=> props.callPeer(props.peerId,event)}>{props.peerId}</li>
           
        
    )
}
export default UserListItem;