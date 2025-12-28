
function Page(props) {
    return (
        <div>
            <button className="BackButton" onClick={() => props.setPageFunction('menu')}>back</button>
            <p>this page has been created! yay!! i love {props.animal}!!!</p>
        </div>
    )
}

export default function SnakePage(props) {
    return (
        <Page animal="snake" setPageFunction={props.setPageFunction} />
    )
}

export function FishPage(props) {
    return (
        <Page animal="fish" setPageFunction={props.setPageFunction} />
    )
}

export function BugPage(props) {
    return (
        <Page animal="bug" setPageFunction={props.setPageFunction} />
    )
}

export function BunnyPage(props) {
    return (
        <Page animal="bunny" setPageFunction={props.setPageFunction} />
    )
}