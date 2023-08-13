import React from "react";
import list from "../list.js";
import { motion } from "framer-motion";

const Showcard = ({ item, addcart }) => {
	const { id, title, author, price, img } = item;
	return (
		<>
			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="card"
			>
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
			</motion.div>
		</>
	);
};

export default Showcard;
