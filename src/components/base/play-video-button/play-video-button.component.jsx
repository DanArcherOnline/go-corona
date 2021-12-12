import React from 'react';


const PlayVideoButton = (props) => {
    const fillStyleToPaths = {
        outline: process.env.PUBLIC_URL + '/play-video-icon-outline.svg',
        fill: process.env.PUBLIC_URL + '/play-video-icon-filled.svg',
    }

    return (
        <img with="44px" height="44px" src={fillStyleToPaths[props.fillStyle] ?? fillStyleToPaths['outline']} alt="play video icon" />
    );
}

export default PlayVideoButton;