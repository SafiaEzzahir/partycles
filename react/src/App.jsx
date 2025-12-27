import { useEffect, useState } from 'react'
import './App.css'

function Menu({ setPageFunction }) {
  return (
    <div>
      <button onClick={() => setPageFunction("snake")}>snake</button>
      <button onClick={() => setPageFunction("bunny")}>bunny</button>
      <button onClick={() => setPageFunction("bug")}>bug</button>
      <button onClick={() => setPageFunction("fish")}>fish</button>
    </div>
  )
}

function App() {
  const [CurrentPage, setCurrentPage] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem("CurrentPage")) {
      //console.log("CurrentPage exists in sessionStorage");
      setCurrentPage(sessionStorage.getItem("CurrentPage"))
    } else {
      //console.log("CurrentPage doesn't exist in sessionStorage")
      setCurrentPage('menu')
      sessionStorage.setItem("CurrentPage", "menu")
    }
  }, []);

  if (CurrentPage === "menu") {
    return (
      <div>
        <Menu setPageFunction={setCurrentPage}/>
      </div>
    )
  } else {
    return (
      <div>
        <p>page not created yet</p>
      </div>
    )
  }
}

export default App
