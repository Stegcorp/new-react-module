import React, {useEffect, useState} from 'react';
import {postsService} from "../../../services/posts.service";
import {useParams} from "react-router-dom";

const post = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        postsService.postById(id).then(({data}) => setPost(data))
    }, [id])

    return (
        <div>
            <div>
                <div><b>id: </b>{post.id}</div>
                <div><b>title: </b>{post.title}</div>
                <div><b>body: </b>{post.body}</div>
            </div>
        </div>
    );
}

export default post;
