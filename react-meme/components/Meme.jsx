import React from "react";
import data from '../memesData.js'

export default function Meme() {
	let url_img
	function handleOnClick() {
		const memesArray = data.data.memes
		const randomNumber = Math.floor(Math.random() * memesArray.length)
		url_img = memesArray[randomNumber].url
		console.log(url_img)
	}

	return (
		<main>
			<div className="meme">
				<input type="text" placeholder="Top Text"/>
				<input type="text" placeholder="Bottom Text"/>
				<button onClick={handleOnClick}>Get a new meme image 🖼</button>
			</div>
			{url_img && <img src={url_img}/>}
		</main>
	)
}