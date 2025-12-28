import './Menu.css'

function Menu({ setPageFunction }) {
  return (
    <div id='Menu'>
      <button className='MenuButton' id='SnakeMenuButton' onClick={() => setPageFunction("snake")}>snake</button>
      <button className='MenuButton' id='BunnyMenuButton' onClick={() => setPageFunction("bunny")}>bunny</button>
      <button className='MenuButton' id='BugMenuButton' onClick={() => setPageFunction("bug")}>bug</button>
      <button className='MenuButton' id='FishMenuButton' onClick={() => setPageFunction("fish")}>fish</button>
    </div>
  )
}

export default Menu;