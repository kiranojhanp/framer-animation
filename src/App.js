import logo from './logo.svg';
import './App.css';
import {motion} from "framer-motion"

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<motion.img
					src={logo}
					animate={{ rotate: 360 }}
					transition={{
						duration: 7,
						ease: "linear",
						times: [0, 0.2, 0.5, 0.8, 1],
						loop: Infinity,
					}}
					className="App-logo"
					alt="logo"
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
