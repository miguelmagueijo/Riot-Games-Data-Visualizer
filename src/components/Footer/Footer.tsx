import React from "react";
import linkedinLogo from "../../assets/linkedin.svg";
import githubLogo from "../../assets/github.svg";

class Footer extends React.Component {
    render() {
        return (
            <footer className="text-sm text-white/80">
                <div className="p-4 bg-black/30 rounded-t space-y-4">
                    <div>
                        League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
                    </div>
                    <div className="flex justify-between">
                        <div>
                            Made by <a className="underline" href="#">Miguel Magueijo</a>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <a href="https://github.com/miguelmagueijo">
                                <img src={githubLogo} className="w-6 opacity-90" alt="Github - Miguel Magueijo" />
                            </a>
                            <a href="https://www.linkedin.com/in/miguel-magueijo">
                                <img src={linkedinLogo} className="w-6 opacity-90" alt="LinkedIn - Miguel Magueijo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-black/50 p-4 rounded-b">
                    <a className="text-xs underline" href="https://github.com/miguelmagueijo/riot-games-data-visualizer">Source</a>
                </div>
            </footer>
        );
    }
}

export default Footer;