import React from 'react';
import './Sfriend.css'
import { Link } from 'react-router-dom';

const SFriend = ({ friend }) => {
    return (
        <div className='box'>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <p><small>userName: <Link to={`/friend/${friend.id}`}>{friend.username}</Link></small></p>
        </div>
    );
};

export default SFriend;