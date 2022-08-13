import React from "react"
import Trollface from "/Users/mac/Documents/Meme Generator/my-app/src/Images/Troll Face.png"

export default function Navbar (){
    return (
        <div className="navbar">
            <span className="navbar-txt"> <img src={Trollface}></img>
        <h1>Meme Generator</h1> </span> 
        <h2>React Course - Project 3</h2>
        </div>
       
    )
}



