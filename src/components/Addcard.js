import React from "react";

const Addcart = ({ cart, dltcart, addamount }) => {
	const { id, title, author, price, img, amount } = cart;
	return (
		<>
			<div className="container">
				<div className="Addcart-img">
					<img src={img} />
				</div>
				<div className="addcart-info">
					<h4>{title}</h4>
					<h4>{author}</h4>
					<h4>price- {price}</h4>
					<h4>{amount}</h4>
				</div>
				<div className="addcart-btn">
					<button
						style={{ width: "50px" }}
						onClick={() => addamount(cart, +1)}
					>
						+
					</button>
					<button
						style={{ width: "50px" }}
						onClick={() => addamount(cart, -1)}
					>
						-
					</button>
					<button
						style={{ width: "50px" }}
						onClick={() => dltcart(id)}
					>
						remove
					</button>
				</div>
			</div>
		</>
	);
};

export default Addcart;
