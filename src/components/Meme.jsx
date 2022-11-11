import React from "react"

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    botText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })

  const [allMemes, setAllMemes] = React.useState([])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      }
    })
  }

  function handleChange(event) {
    const { value, name } = event.target
    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
    console.log(meme)
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes))
  }, [])

  console.log(allMemes)
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
          name="botText"
          value={meme.botText}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.botText}</h2>
      </div>
    </main>
  )
}
