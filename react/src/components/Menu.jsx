import './Menu.css'

function Menu({ setPageFunction }) {
  return (
    <div id='Menu'>
        <h1 id='MenuTitle'>partycles</h1>
        <p id="MenuDesc">party in the front, physics in the back ;D</p>
        <div id='MenuButtons'>
            <button className='MenuButton' id='SnakeMenuButton' onClick={() => setPageFunction("snake")}>snake</button>
            <button className='MenuButton' id='BunnyMenuButton' onClick={() => setPageFunction("bunny")}>bunny</button>
            <button className='MenuButton' id='BugMenuButton' onClick={() => setPageFunction("bug")}>bug</button>
            <button className='MenuButton' id='FishMenuButton' onClick={() => setPageFunction("fish")}>fish</button>
        </div>
    </div>
  )
}

export default Menu;