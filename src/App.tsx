import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LeagueOfLegends from "./routes/LeagueOfLegends/LeagueOfLegends";
import RiotAccount from "./routes/RiotAccount/RiotAccount";
import leagueLogo from "./assets/LoLGold.svg";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export type GameTabs = {
	Riot: JSX.Element,
	League: JSX.Element,
	Valorant: JSX.Element,
	TFT: JSX.Element,
	LoR: JSX.Element,
	WildRift: JSX.Element
}

const tabs: GameTabs = {
	Riot: <RiotAccount />,
	League: <LeagueOfLegends />,
	Valorant: <RiotAccount />,
	TFT: <RiotAccount />,
	LoR: <RiotAccount />,
	WildRift: <RiotAccount />
}

function App() {
	const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
		accept: { "application/zip": [".zip"] },
		noClick: true,
		noKeyboard: true
	});
	const [ currTab, setCurrTab ] = useState<JSX.Element>(tabs.Riot);

	return (
		<div className="max-w-4xl mx-auto space-y-4 py-4">
			<Navbar />
			{/* Drop file area */}
			<div id="dropArea" {...getRootProps({ className: "border-4 border-dashed border-white/70 rounded py-8 flex justify-center items-center space-y-4 flex-col bg-white/10" })}>
				<input { ...getInputProps() } />
				<h2 className="text-2xl font-bold">Drop your data here</h2>
				<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 duration-300 rounded font-bold" onClick={open}>Choose file</button>
				{/* <h3 className="px-4 py-2 duration-300 rounded font-bold text-white/70">Click here to choose file</h3> */}
				<span className="text-xs font-semibold text-white/50">Only supports .zip file</span>
			</div>
			{/* Tabs */}
			<div>
				<ul className="flex game-list">
					<li onClick={() => { setCurrTab(tabs.Riot) }}>Riot Account</li>
					{/* <li id="league">LoL</li> */}
					<li id="league" className={ `${currTab === tabs.League ? "active" : ""} hover:text-leagueGold2 duration-300` }  onClick={() => { setCurrTab(tabs.League) }}>
						<img src={leagueLogo} alt="League Of Legends Logo" />
						<span className="block">League of Legends</span>
					</li>
					<li onClick={() => { setCurrTab(tabs.Valorant) }}>Valorant</li>
					<li onClick={() => { setCurrTab(tabs.TFT) }}>Teamfight Tacticts</li>
					<li onClick={() => { setCurrTab(tabs.LoR) }}>Legends Of Runeterra</li>
					<li onClick={() => { setCurrTab(tabs.WildRift) }}>LoL: Wild Rift</li>
				</ul>
				{currTab}
			</div>
			<Footer />
		</div>
	);
}

export default App;