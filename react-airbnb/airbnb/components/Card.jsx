import React from "react";

export default function Card(props) {
	return (
		<div className="card">
			<img src= {`./images/${props.img}`} className="card--img" />
			<div className="card--info">
				<div className="card--stats">
					<img src="../images/star.png" className="card--star" />
					<span>{props.rating}</span>
					<span className="gray">({props.reviewCount}) ● </span>
					<span className="gray">{props.location}</span>
				</div>
				<p>{props.title}</p>
				<p><span className="bold">From {props.price}{props.currency}</span> / per person</p>
			</div>
		</div>
	)
}