import React, { useState } from 'react';
import './App.css'
import About from './components/About'
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Resume from './components/Resume';
import Work from './components/Work';

function App() {

const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav>
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Nav>
      <main>
        {!contactSelected ? (
          <About></About>
        ) : (
          <>
            <ContactForm></ContactForm>
            <Work></Work>
            <Resume></Resume>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
