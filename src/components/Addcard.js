import React from "react";

const Addcart = ({ cart, dltcart, addamount }) => {
	const { id, title, author, price, img, amount } = cart;
	return (
		<>
			<div className="cart">
				<div className="Addcart-info">
					<div className="Addcart-img">
						<img src={img} />
					</div>
					<h4>{title}</h4>
				</div>
				<div className="addcart-btn">
				<div className="quantity-btn">
					<button
						style={{ width: "50px" }}
						onClick={() => addamount(cart, +1)}
					>
						+
					</button>
					<h4>{amount}</h4>
					<button
						style={{ width: "50px" }}
						onClick={() => addamount(cart, -1)}
					>
						-
					</button>
					</div>

					<div className="Addcart-price">
						<h4>price- {price}</h4>
					</div>

					<div className="delete-btn" onClick={() => dltcart(id)}>
						<i class="fa-solid fa-trash-can"></i>
					</div>
				</div>
			</div>
		</>
	);
};

export default Addcart;
