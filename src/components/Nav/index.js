import React from "react";

function Nav() {
    return (
        <header className="flex-row">
            <h2>
              Portfolio  
            </h2>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        Work
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;