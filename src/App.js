import React, { useState } from 'react';
import './App.css'
import About from './components/About'
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Resume from './components/Resume';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {

const [aboutSelected, setAboutSelected] = useState(true);
const [contactSelected, setContactSelected] = useState(false);
const [workSelected, setWorkSelected] = useState(false);
const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        workSelected={workSelected}
        setWorkSelected={setWorkSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {contactSelected ? (
            <ContactForm></ContactForm>
        ) : workSelected ? (
            <Work></Work>
        ) : resumeSelected ? (
            <Resume></Resume>
        ) : (
          <About></About>
        )}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
