import ParticleCanvas from '../components/ParticleCanvas.jsx';

function Page(props) {
    function DefaultColourFunction() {
        return props.DefaultColor
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
    return (
        <Page 
            animal="snake"
            setPageFunction={props.setPageFunction}
            DefaultColor="#22B64E"
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