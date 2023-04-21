import React from 'react';

const AlbumsOne = ({albums: {id,userId,title}}) => {
    return (
        <div>
            <div><b>id</b>:{id}</div>
            <div><b>userId</b>:{userId}</div>
            <div><b>title</b>:{title}</div>
        </div>
    );
};

export default AlbumsOne;
