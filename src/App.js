import "./App.css";
import { motion } from "framer-motion";

const variants = {
	not: {
		y: [0, -150, -150, -150, 0, 0, 0, 0, 0, 0, 0],
		transition: { repeat: 0, ease: "linear", duration: 4.5 },
	},
	line: {
		width: [0, 650, 650, 0],
		transition: {
			delay: 2.2,
			repeat: 0,
			// repeatType: "reverse",
			ease: "easeOut",
			duration: 1.8,
		},
	},
};

function App() {
	return (
		<motion.div className="box relative">
			<img className="crypto absolute" width="180" src="crypto.svg" alt="not" />
			<motion.img
				animate="not"
				variants={variants}
				className="not absolute"
				width="180"
				src="not.svg"
				alt="not"
			/>

			<motion.div
				animate="line"
				variants={variants}
				className="line absolute"
			></motion.div>
		</motion.div>
	);
}

export default App;
