import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;