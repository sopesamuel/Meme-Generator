import React from "react"
import MemesData from "./MemesData"


export default function Meme(){

//const [memeImage, setMemeImage] = React.useState("")
const [meme, setMeme] = React.useState(
    {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    }
)

const [allMemeImages, setAllMemeImages] = React.useState(MemesData)

    function getMemeImage(){
       const memesArray = allMemeImages.data.memes
       const randomMeme = Math.floor(Math.random() * memesArray.length)
       setMeme((prevMeme => ({...prevMeme, randomImage: memesArray[randomMeme].url})))
    }

    return(
        <div>
            <div className="form-ctn">
                <input className="top-input" placeholder="Top Text" />
                <input className="bottom-input" placeholder="Bottom Text"/>
                <button className="form-btn" onClick={getMemeImage}>
                    <h1>Getting a new meme image</h1></button>
                    <img src={meme.randomImage} className="meme-img"/>
            </div>
        </div>
    )
}