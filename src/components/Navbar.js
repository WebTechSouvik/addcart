import React from "react";
import Contentwrapper from "./contentwrapper/Contentwrapper.jsx";

const Navbar = ({ warning, showing, cart }) => {
	const hover = true;
	return (
		<>
			<div className="navbar">
				<Contentwrapper>
					<div className="nav-con">
						<h1>Add Cart</h1>
						<div className="show-warn">
							<i
								class="fa-solid fa-cart-plus"
								onClick={showing}
							></i>
						</div>
					</div>

					{cart.length > 0 ? (
						<span className="card-num">{cart.length}</span>
					) : (
						""
					)}

					{warning && (
						<div className="warning">
							item is presnt in the cart
						</div>
					)}
				</Contentwrapper>
			</div>
		</>
	);
};

export default Navbar;
