import React from "react";

export default function Card(props) {
	return (
		<div className="card">
			<img src="../images/katie-zaferes.png" className="card--img" />
			<div className="card--stats">
				<img src="../images/star.png" className="card--star" />
				<span>5.0</span>
				<span className="gray">(6) ● </span>
				<span className="gray">USA</span>
			</div>
			<p>Life lessons with katie Zaferes</p>
			<p><span className="bold">From 136$</span> / per person</p>
		</div>
	)
}