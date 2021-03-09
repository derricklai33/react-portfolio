import React from 'react';
import { Background } from './components/Background'
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact'
import './styles/app.scss'

function App() {
  return (
    <>
      < Navbar/>
      < Background />
      < Home />
      < Projects />
      < Contact />
    </>
  );
}

export default App;
