import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
  /**
   * Challenge: Save the random meme URL in state
   * - Create new state called `memeImage` with an
   *   empty string as default
   * - When the getMemeImage function is called, update
   *   the `memeImage` state to be the random chosen
   *   image URL
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */

  const [memeImage, setMemeImage] = React.useState()

  function handleOnClick() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesData.data.memes.length)
    const url = memesArray[randomNumber].url

    setMemeImage(url)
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={handleOnClick}>
          Get a new meme image 🖼
        </button>
        <img src={memeImage} className="form--button" />
      </div>
    </main>
  )
}
