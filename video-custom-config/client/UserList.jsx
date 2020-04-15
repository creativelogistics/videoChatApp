import React from 'react';
import UserListItem from './UserListItem.jsx';

const UserList = (props) => {
    return (
        <div>
            {Object.keys(props.users).map((peerId ,key)=>(
                <ul>
                    <UserListItem 
                    peerId = {peerId}
                    key = {key}
                    callPeer = {props.callPeer}
                    >
                    </ UserListItem >
                </ul>
            ))}
        </div>
    )
}
export default  UserList;