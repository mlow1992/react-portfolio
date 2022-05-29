import React from 'react';
import './App.css'
import About from './components/About'
import ContactForm from './components/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
