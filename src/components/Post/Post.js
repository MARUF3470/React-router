import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Spost from './Spost';

const Post = () => {
    const allPost = useLoaderData()
    return (
        <div>
            {
                allPost.map(post => <Spost key={post.id} post={post}></Spost>)
            }
        </div>
    );
};

export default Post;