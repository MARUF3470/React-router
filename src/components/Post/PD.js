import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PD = () => {
    const detailes = useLoaderData()
    //console.log(detailes)
    const navigation = useNavigate()
    const userInfo = () => {
        navigation(`/friend/${detailes.userId}`)
    }
    return (
        <div>
            <h1>Post No:{detailes.id}</h1>
            <h2>{detailes.title}</h2>
            <p>{detailes.body}</p>
            <button onClick={userInfo}>See user</button>
        </div>
    );
};

export default PD;