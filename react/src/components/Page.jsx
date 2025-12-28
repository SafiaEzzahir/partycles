import ParticleCanvas from '../components/ParticleCanvas.jsx';

function Page(props) {
    function DefaultColourFunction() {
        return props.DefaultColourList[Math.floor(Math.random() * props.DefaultColourList.length)]
    }

    return (
        <div>
            <ParticleCanvas
                ColourFunction={props.ColourFunction ? props.ColourFunction : DefaultColourFunction}
            />

            <button className="BackButton" onClick={() => {sessionStorage.setItem("CurrentPage", "menu"); console.log("changing current page to menu"); props.setPageFunction("menu");}}>back</button>
            <p>this page has been created! yay!! i love {props.animal}!!!</p>
        </div>
    )
}

export default function SnakePage(props) {
    /* needs a custom function to detect what colour and add to snake */

    return (
        <Page 
            animal="snake"
            setPageFunction={props.setPageFunction}
            DefaultColourList={["#22B64E", "#22B64E", "#006E2B", "#FFC500"]}
        />
    )
}

export function FishPage(props) {
    function ChooseColour() {
        return '#555FFF'
    }

    return (
        <Page
            animal="fish"
            setPageFunction={props.setPageFunction}
            ColourFunction={ChooseColour}
        />
    )
}

export function BugPage(props) {
    function ChooseColour() {
        return '#FF5FF5'
    }

    return (
        <Page
            animal="bug"
            setPageFunction={props.setPageFunction}
            ColourFunction={ChooseColour}
        />
    )
}

export function BunnyPage(props) {
    function ChooseColour() {
        return '#555678'
    }

    return (
        <Page
            animal="bunny"
            setPageFunction={props.setPageFunction}
            ColourFunction={ChooseColour}
        />
    )
}