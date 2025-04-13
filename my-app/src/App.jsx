import Header from '/components/Header'
import MemeDisplay from '/components/MemeDisplay.jsx'
import Footer from '/components/Footer.jsx'
import { Meme } from '/models/MEMEGameClasses.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import './App.css'

function App() {

  const memeExample = new Meme(1, "img/meme-example.jpg", ["Pippo", "Pluto", "Paperino"]);

  return (
    <>
      <Header />
      <MemeDisplay meme={memeExample} />
      <Footer />
    </>
  )
};

export default App;
