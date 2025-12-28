import { useEffect, useState } from 'react'
import './App.css'

import Menu from '../src/components/Menu.jsx'
import SnakePage from './components/Page.jsx'
import BunnyPage from './components/Page.jsx'
import BugPage from './components/Page.jsx'
import FishPage from './components/Page.jsx'

const PagesToReturn = {'snake': SnakePage, 'bunny': BunnyPage, 'bug': BugPage, 'fish': FishPage}

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
  } else if (PagesToReturn[CurrentPage]) {
    const PageToReturn = PagesToReturn[CurrentPage]
    return <PageToReturn setPageFunction={setCurrentPage} />
  } else {
    return (
      <div>
        <p>page not created yet</p>
      </div>
    )
  }
}

export default App
