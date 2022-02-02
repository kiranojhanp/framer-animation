import "./App.css";
import { motion, useAnimation } from "framer-motion";
import Not from "./not.svg";
import Crypto from "./crypto.svg";
import { useState } from "react";

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
			ease: "easeOut",
			duration: 1.8,
		},
	},
};

function App() {
	const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
	const notAnimationControls = useAnimation();
	const lineAnimationControls = useAnimation();

	// play first
	// notAnimationControls.start(variants.not);
	// lineAnimationControls.start(variants.line);

	return (
		<motion.div
			onHoverStart={() => {
				if (!isAnimationPlaying) {
					setIsAnimationPlaying(true);
					notAnimationControls.start(variants.not);
					lineAnimationControls.start(variants.line);
				}
			}}
			onAnimationComplete={() => {
				setIsAnimationPlaying(false);
			}}
			className="box relative"
		>
			<img className="crypto absolute" width="180" src={Crypto} alt="not" />
			<motion.img
				animate={notAnimationControls}
				className="not absolute"
				width="180"
				src={Not}
				alt="not"
			/>

			<motion.div
				animate={lineAnimationControls}
				className="line absolute"
			></motion.div>
		</motion.div>
	);
}

export default App;
