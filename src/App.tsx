import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="max-w-4xl mx-auto space-y-4 py-4">
			<Navbar />
			{/* Drop file area */}
			<div id="dropArea" className="border-4 border-dashed border-white rounded py-8 flex justify-center items-center space-y-4 flex-col">
				<h2 className="text-2xl font-bold">Drop your data here</h2>
				<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 duration-300 rounded font-bold">Choose file</button>
				<span className="text-xs font-semibold text-white/50">Drop or choose the .zip file</span>
			</div>
			{/* Tabs */}
			<div>
				<ul className="flex game-list">
					<li>Riot Account</li>
					<li>League Of Legends</li>
					<li>Valorant</li>
					<li>Teamfight Tacticts</li>
					<li>Legends Of Runeterra</li>
					<li>LoL: Wild Rift</li>
				</ul>
				<div className="border border-white py-4 px-8">
					Content
				</div>
			</div>
		</div>
	);
}

export default App;