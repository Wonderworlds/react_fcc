import React from 'react';
import './index.css';
import Die from '../components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

function App() {

	const { width, height } = useWindowSize()
	const [tenzies, setTenzies] = React.useState(false)

	function generateNewDie() {
		return {
			value: Math.ceil(Math.random() * 6),
			isHeld: false,
			id: nanoid(),
		};
	}

	function allNewDice() {
		const newDices = [];

		for (let i = 0; i < 10; i++) {
			newDices.push(generateNewDie());
		}
		return newDices;
	}
	const [dice, setDice] = React.useState(allNewDice());

	function holdDice(id) {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			})
		);
	}

	const diceE = dice.map((element) => (
		<Die
			key={element.id}
			id={element.id}
			value={element.value}
			isHeld={element.isHeld}
			holdDice={() => holdDice(element.id)}
		/>
	));

	function rollDice() {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.isHeld
					? die
					: generateNewDie();
			})
		);
	}

	function newGame() {
		setTenzies(false)
		setDice(allNewDice())
	}

	React.useEffect(() => {
		let won = 0
		for (let i = 0; i < dice.length; i++)
		{
			if (!dice[i].isHeld)
				return
			if (won == 0)
				won = dice[i].value
			else if (won != dice[i].value)
				return
		}
		setTenzies(true)
	}, [dice])

	return (
		<>
		 {tenzies && <Confetti
     		 width={width}
    		height={height}
   		 />}
		<main>
			<div className="main--box">
				<h1 className="main--title">Tenzies</h1>
				<h3>
					Roll until all dice are the same. Click each die to freeze it at its
					current value between rolls.
				</h3>
				<div className="main--game">{diceE}</div>
				<button className="main--roll" onClick={tenzies ? newGame : rollDice}>
					{tenzies ? "New Game" : "Roll"}
				</button>
			</div>
		</main>
	</>
	);
}

export default App;
