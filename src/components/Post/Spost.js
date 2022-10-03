import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Spost = ({ post }) => {
    const { userId, title, body, id } = post
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={{ border: '2px solid gray', padding: '20px', margin: '20px', borderRadius: '10px' }}>
            <h1>UserID : {userId}</h1>
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Details</button></Link>
            <button onClick={handleNavigate}>Using event handler</button>
        </div>
    );
};

export default Spost;