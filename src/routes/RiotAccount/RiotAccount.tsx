import React from "react";

class RiotAccount extends React.Component {
    render() {
        return (
            <div className="border border-white p-4 font-spiegel bg-leagueHextec space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-sm text-leagueGolden4">Summoner name</div>
                        <div className="font-bold text-2xl">Riot</div>
                    </div>
                    <div>
                        <div className="text-sm text-leagueGolden4 text-right">Region</div>
                        <div className="font-bold text-2xl">Test</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RiotAccount;