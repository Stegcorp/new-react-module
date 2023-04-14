import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Post from "./Post";

const postUser = ({userId}) => {

    const [post, setPost] = useState([]);
    useEffect(() => {
        postService.getById(userId).then(({data}) =>
        {
        setPost(data)
            console.log(data);
        }
        )
    }, [userId])
    // console.log(post);
    return (
        <div>
            {post.map(value => <Post post={value} key={value.id}/>)}
        </div>
    );
};

export default postUser;
