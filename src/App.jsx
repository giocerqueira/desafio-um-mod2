import React from "react" // importando o react
import "./App.css" // importando o arquivo de estilização App.css
// import Header from "./componentes/Header/Header.jsx"
import Header from "./componentes/Header/Header.jsx"
import Main from "./componentes/Main/Main.jsx" // importando o arquivo main.jsx
import Footer from "./componentes/Footer/Footer.jsx" // importando o arquivo Footer.jsx

function App() {
  return(
    <>
      <Header/>
      <h1>Oi</h1>
      <Main/>
      <Footer/>
    </>
  )
}

export default App