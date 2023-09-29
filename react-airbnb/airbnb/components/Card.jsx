import React from "react";

export default function Card(props) {
	let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
	
	return (
		<div className="card">
			{badgeText && <div className="card--badge">{badgeText}</div>}
			<img src= {`./images/${props.item.coverImg}`} className="card--img" />
			<div className="card--info">
				<div className="card--stats">
					<img src="../images/star.png" className="card--star" />
					<span>{props.item.stats.rating}</span>
					<span className="gray">({props.item.stats.reviewCount}) ● </span>
					<span className="gray">{props.item.location}</span>
				</div>
				<p>{props.item.title}</p>
				<p><span className="bold">From {props.item.price}{props.item.currency}</span> / per person</p>
			</div>
		</div>
	)
}