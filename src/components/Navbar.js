import React from "react";

const Navbar = ({ cardnum, warning, showing, cart }) => {
	return (
		<>
			<div className="navbar">
				<div className="nav-con">
					<span>doxp</span>
					<div className="show-warn">
						<i class="fa-solid fa-cart-plus" onClick={showing}></i>
						<div>
							<span className="card-num">{cart.length}</span>
							{warning && (
								<div className="warning">
									item is presnt in the cart
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
