import React from "react"



export default function Meme(){

//const [memeImage, setMemeImage] = React.useState("")
const [meme, setMeme] = React.useState(
    {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    }
)

const [allMeme, setAllMeme] = React.useState([])

    function getMemeImage(){
       const randomMeme = Math.floor(Math.random() * allMeme.length)
       setMeme((prevMeme => ({...prevMeme, randomImage: allMeme[randomMeme].url})))
    }

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
    }, [])
    
    console.log(allMeme)

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({...prevMeme, [name]: value
        
        })
        )}
  

    return(
        
        <div>
        
            <div className="form-ctn">
                <input 
                type="text"
                className="top-input" 
                placeholder="Top Text"
                name="topText"
                onChange={handleChange}
                value={meme.topText}
                 />

                <input 
                type="text"
                className="bottom-input"
                placeholder="Bottom Text"
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText}
                />

                
                <button 
                className="form-btn" 
                onClick={getMemeImage}
                >

                <h1>Getting a new meme image</h1></button>

                <div className="meme">
                <img 
                src={meme.randomImage} 
                className="meme-img"/>

                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
            
        </div>
    )
}