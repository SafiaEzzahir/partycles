import { useEffect, useState } from 'react'
import './App.css'

function Menu() {
  return (
    <div>
      <p>this is the menu</p>
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
      <Menu />
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
