import ParticleCanvas from '../components/ParticleCanvas.jsx';

function Page(props) {
    return (
        <div>
            <ParticleCanvas
                ColourFunction={props.ColourFunction}
            />

            <button className="BackButton" onClick={() => {sessionStorage.setItem("CurrentPage", "menu"); console.log("changing current page to menu"); props.setPageFunction("menu");}}>back</button>
            <p>this page has been created! yay!! i love {props.animal}!!!</p>
        </div>
    )
}

export default function SnakePage(props) {
    function ChooseColour() {
        return '#FFF555'
    }

    return (
        <Page 
            animal="snake"
            setPageFunction={props.setPageFunction}
            ColourFunction={ChooseColour}
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