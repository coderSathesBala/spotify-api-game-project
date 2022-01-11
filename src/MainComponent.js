import React from "react";
import picture1 from './picture1.jpg';
import picture2 from './picture2.jpg';
import { Buffer } from 'buffer';
import { loginUrl } from "./login.js";

class MainComponent extends React.Component {

    render() {
        return (
        <div>
            <a href={loginUrl}>Login</a>
            <h1>Guessing Game</h1>
            <h2>Based On Spotify's Information Which Album, Track, or Artist is more popular?</h2>
            <img style={{"width" : "20rem"}} src={picture1} alt="logo" />
            <img style={{"width" : "20rem"}}src={picture2} alt="logo" />
        </div>
        )}
}

export default MainComponent 





 
