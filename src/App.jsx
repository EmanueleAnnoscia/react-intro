import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"

function App() {
  const title = "ciao mondo"

  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      
      <h1 className="uppercase" >{title}</h1>
      <Footer />
    </>
  )
}

export default App
