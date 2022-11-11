import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function handleOnClick() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesData.data.memes.length)
    const url = memesArray[randomNumber].url

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      }
    })
  }

  const [formData, setFormData] = React.useState({
    topText: "",
    botText: "",
    comments: "",
  })

  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    })
    console.log(formData)
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          onChange={handleChange}
          value={formData.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="botText"
          onChange={handleChange}
          value={formData.botText}
        />
        <textarea
          placeholder="comments"
          className="form--input"
          name="comments"
          onChange={handleChange}
          value={formData.comments}
        />

        <button className="form--button" onClick={handleOnClick}>
          Get a new meme image 🖼
        </button>
        <img src={meme.randomImage} className="form--button" />
      </div>
    </main>
  )
}
