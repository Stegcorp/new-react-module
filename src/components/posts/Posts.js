import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Post from "./Post";

const Posts = ({inf}) => {

    const [post,setPost] = useState(null);
    useEffect(()=>{
        postService.getAll().then(({data}) => setPost(data))
    },[])

    return (
        <div>
            {
                post && post.map(value=><Post key={value.id} post={value} inf={inf}/>)
            }
        </div>
    );
};

export default Posts;
