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
				<div>
					<p>{title}</p>
					<p>{author}</p>
					<p>price- {price}</p>
				</div>

				<button className="btn" onClick={() => addcart(item)}>
					add cart
				</button>
			</div>
		</>
	);
};

export default Showcard;
