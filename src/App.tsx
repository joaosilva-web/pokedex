import { useState } from 'react'
import { InitialPage } from './pages/initialPage'
import { PokedexPage } from './pages/pokedexPage'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <>
      <GlobalStyle/>
      <InitialPage/>
      {/* <PokedexPage/> */}
    </>
  )
}

export default App
