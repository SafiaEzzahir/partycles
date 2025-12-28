import './Menu.css'

const MenuButtons = [
  {Text: "snek party", PageName: "snake", Id: "SnakeMenuButton"},
  {Text: "buni party", PageName: "bunny", Id: "BunnyMenuButton"},
  {Text: "bug party", PageName: "bug", Id: "BugMenuButton"},
  {Text: "fsh party", PageName: "fish", Id: "FishMenuButton"}
]

function Menu({ setPageFunction }) {
  return (
    <div id='Menu'>
        <h1 id='MenuTitle'>partycles</h1>
        <p id="MenuDesc">party in the front, physics in the back ;D</p>
        <div id='MenuButtons'>
            {MenuButtons.map((Button, i) => (
              <button key={i} className='MenuButton' id={Button.Id} onClick={() => {setPageFunction(Button.PageName); sessionStorage.setItem("CurrentPage", Button.PageName)}}>{Button.Text}</button>
            ))}
        </div>
    </div>
  )
}

export default Menu;