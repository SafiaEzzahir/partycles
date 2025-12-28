import { useEffect, useState } from 'react'
import './App.css'

import Menu from '../src/components/Menu.jsx'
import SnakePage, { BunnyPage, BugPage, FishPage } from './components/Page.jsx'

const PagesToReturn = {
  'snake': SnakePage,
  'bunny': BunnyPage,
  'bug': BugPage,
  'fish': FishPage
}

function App() {
  const [CurrentPage, setCurrentPage] = useState(() => {
    return sessionStorage.getItem("CurrentPage") || "menu"
  })

  useEffect(() => {
    sessionStorage.setItem("CurrentPage", CurrentPage)
  }, [CurrentPage]);

  if (CurrentPage === "menu") {
    return (
      <Menu setPageFunction={setCurrentPage}/>
    )
  }

  const PageToReturn = PagesToReturn[CurrentPage];
  if (!PageToReturn) {
    return <p>error :(</p>
  }
  
  return (
    <PageToReturn setPageFunction={setCurrentPage} />
  )
}

export default App;
