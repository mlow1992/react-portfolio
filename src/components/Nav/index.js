import React from "react";

function Nav(props) {
    const {
        aboutSelected,
        setAboutSelected,
        contactSelected,
        setContactSelected,
        workSelected,
        setWorkSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    return (
        <header className="flex-row">
            <h2>
              Portfolio  
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`${aboutSelected && 'navActive'}`}>
                        <span onClick={() => { setAboutSelected(true); setContactSelected(false); setWorkSelected(false); setResumeSelected(false)}}>
                            About me
                        </span>
                    </li>
                    <li className={`${contactSelected && 'navActive'}`}>
                        <span onClick={() => { setAboutSelected(false); setContactSelected(true); setWorkSelected(false); setResumeSelected(false)}}>Contact</span>
                    </li>
                    <li className={`${workSelected && 'navActive'}`}>
                        <span onClick={() => {setAboutSelected(false); setContactSelected(false); setWorkSelected(true); setResumeSelected(false)}}>Work</span>
                    </li>
                    <li className={`${resumeSelected && 'navActive'}`}>
                        <span onClick={() => { setAboutSelected(false); setContactSelected(false); setWorkSelected(false); setResumeSelected(true)}}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;