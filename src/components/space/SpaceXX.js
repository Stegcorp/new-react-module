import React from 'react';

const SpaceXX = ({item}) => {
    if(item.launch_year != 2020){
    return (
            <div>
                <div>mission_name: {item.mission_name}</div>
                <div>launch_year: {item.launch_year}</div>
                <img src={item.links.mission_patch_small}></img>
                }
            </div>

    );
    }
};

export default SpaceXX;
