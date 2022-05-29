import React from "react";

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className="flex-row">
            <h2>
              Portfolio  
            </h2>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    <li>
                        Work
                    </li>
                    <li>
                        Resume
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;