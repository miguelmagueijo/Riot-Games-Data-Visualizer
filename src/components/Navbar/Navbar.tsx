import React from "react";
// import "./Navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="flex justify-between items-center p-4 bg-black/30 rounded">
                <h1 className="text-3xl font-bold">Riot Games Data Visualizer</h1>
                <ul className="flex space-x-4 font-bold">
                    <li>
                        <a className="px-2 py-1 bg-white text-slate-900 rounded" href="/">Home</a>
                    </li>
                    <li>
                        <a className="px-2 py-1 rounded" href="/about">About</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;