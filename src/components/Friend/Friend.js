import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SFriend from './SFriend/SFriend';

const Friend = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h2>This is Friend components: {friends.length}</h2>
            {
                friends.map(friend => <SFriend friend={friend} key={friend.id}></SFriend>)
            }
        </div>
    );
};

export default Friend;