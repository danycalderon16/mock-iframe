import { useState } from 'react'
import './App.css'

function App() {

  const handleClicWatch = () => {
    const windowFeatures = 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no';
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const windowOptions = `width=${screenWidth}, height=${screenHeight}, top=0, left=0`;

    window.open("https://dev.d31tbalsqujwg0.amplifyapp.com/?token=3434", "_blank", `${windowFeatures}, ${windowOptions}`);
  }
  const handleClicCreate = () => {

  }

  return (
    <>
      <button style={{margin:"1rem", background:"#111", color:"#fff"}} onClick={handleClicWatch}>Ver</button>       
      <button style={{margin:"1rem", background:"#111", color:"#fff"}} onClick={handleClicCreate}>Crear</button>       
    </>
  )
}

export default App
