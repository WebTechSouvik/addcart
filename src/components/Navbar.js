import React, { useState, useEffect } from "react";
import Contentwrapper from "./contentwrapper/Contentwrapper.jsx";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = ({ warning, show, cart, showing, jark }) => {
	return (
		<>
			<div className="navbar">
				<Contentwrapper>
					<div className="nav-con">
						<h1>Add Cart</h1>
						<div className="show-warn">
							<motion.i
								animate={
									jark && show
										? { rotate: [0, 30, -30, 0] }
										: {}
								}
								transition={{
									type: "tween",

									repeat: show && jark ? Infinity : null,
								}}
								class="fa-solid fa-cart-plus"
								onClick={showing}
							></motion.i>
						</div>
					</div>
					<AnimatePresence>
						{jark && show ? (
							<motion.span
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0 }}
								className="card-num"
							>
								{cart.length}
							</motion.span>
						) : (
							""
						)}
					</AnimatePresence>
					<AnimatePresence>
						{warning && (
							<motion.div
								initial={{ x: "100vw" }}
								animate={{ x: "0vw" }}
								transition={{
									duration: 0.5,

									type: "spring",
								}}
								exit={{ x: "-100vw" }}
								className="warning"
							>
								item is presnt in the cart
							</motion.div>
						)}
					</AnimatePresence>
				</Contentwrapper>
			</div>
		</>
	);
};

export default Navbar;
