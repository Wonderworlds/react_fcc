import React from "react";
import data from '../memesData.js'

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: ""
		}
		)

	const [allMemes, setAllMemes] = React.useState(data)
    
	React.useEffect(() => {
			fetch("https://api.imgflip.com/get_memes")
				.then(res => res.json())
				.then(data => setAllMemes(data.data.memes))
		}, [])

	function getNewMemeImg() {
		const randomNumber = Math.floor(Math.random() * allMemes.length)

		setMeme(prev => {return {...prev,
		randomImage: allMemes[randomNumber].url
		}})
	}

	function handleChange(event) {
			const {name, value} = event.target
			setMeme(prev => {return {
				...prev,
				[name]: value
			}})
	}

	return (
		<main>
			<div className="meme">
				<input type="text" placeholder="Top Text" name="topText" value={meme.topText} onChange={handleChange}/>
				<input type="text" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
				<button onClick={getNewMemeImg}>Get a new meme image 🖼</button>
			</div>
			<div className="meme-rendu">
				<img src={meme.randomImage} className="meme--img"></img>
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	)
}