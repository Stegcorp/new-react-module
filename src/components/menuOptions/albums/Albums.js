import React, {useEffect, useState} from 'react';
import {albumsService} from "../../../services/albums.service";
import AlbumsOne from "../albumsOne/AlbumsOne";

const Albums = () => {
    const [albums,setAlbums] = useState([]);
        useEffect(()=>{
            albumsService.allGets().then(({data}) => setAlbums(data))
        },[])
    return (
        <div>
            {
                albums.map(value => <AlbumsOne key={value.id} albums={value}/>)
            }
        </div>

    );
};

export default Albums;
