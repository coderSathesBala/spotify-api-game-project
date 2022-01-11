import React from "react";
import picture1 from './picture1.jpg';
import picture2 from './picture2.jpg'

class MainComponent extends React.Component {
    render() {
        return (
        <div>
            <h1>Guessing Game</h1>
            <h2>Based On Spotify's Information Which Album, Track, or Artist is more popular?</h2>
            <img style={{"width" : "20rem"}} src={picture1} alt="logo" />
            <img style={{"width" : "20rem"}}src={picture2} alt="logo" />
        </div>
        )}
}

export default MainComponent 