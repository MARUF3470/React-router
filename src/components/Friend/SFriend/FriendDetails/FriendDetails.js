import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendInfo = useLoaderData()
    //console.log(friendInfo)
    return (
        <div>
            <h1>Friend Details Page</h1>
            <h1> Details about:{friendInfo.name}</h1>
            <p>Number:{friendInfo.phone}</p>
        </div>
    );
};

export default FriendDetails;