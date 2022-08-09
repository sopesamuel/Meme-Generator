import React from "react"
import MemesData from "./MemesData"


export default function Meme(){


    function getMemeImage(){
       const memesArray = MemesData.data.memes
       const randomMeme = Math.floor(Math.random() * memesArray.length)
       const url = memesArray[randomMeme].url
    }
    return(
        <div>
            <div className="form-ctn">
                <input className="top-input" placeholder="Top Text" />
                <input className="bottom-input" placeholder="Bottom Text"/>
                <button className="form-btn" onClick={getMemeImage}>
                    <h1>Getting a new meme image</h1></button>
            </div>
        </div>
    )
}