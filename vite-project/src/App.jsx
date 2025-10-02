import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Producto from './producto'
import CharacterPoints from './counter.jsx' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CharacterPoints />
    </>
  )
}


export default App
