import React from "react";
import list from "../list.js";

const Showcard = ({ item, addcart }) => {
	const { id, title, author, price, img } = item;
	return (
		<>
			<div className="card">
				<div className="card-img">
					<img src={img} />
				</div>
				<div className="card-info">
					<span>{title}</span>
					<div className="author">
						<span>by </span>
						<span>{author}</span>
					</div>
					<span>Price-</span>
					<span>{price}</span>
				</div>

				<button className="btn" onClick={() => addcart(item)}>
					Add to cart
				</button>
			</div>
		</>
	);
};

export default Showcard;
