import React from 'react';

const Post = ({post,inf}) => {


    return (
        <div>
            <div>{post.userId}</div>
              <div>{post.id}</div>
              <div>{post.title}</div>
              <div>{post.body}</div>
               {/*<button onClick={()=>{*/}
               {/*   inf(post)*/}
               {/*}}>postInfo</button>*/}
            <hr/>
        </div>
    );
};

export default Post;
