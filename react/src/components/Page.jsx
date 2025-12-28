
function Page(props) {
    return (
        <p>this page has been created! yay!! i love {props.animal}!!!</p>
    )
}

export default function SnakePage() {
    return (
        <Page animal="snake" />
    )
}

export function FishPage() {
    return (
        <Page animal="fish" />
    )
}

export function BugPage() {
    return (
        <Page animal="bug" />
    )
}

export function BunnyPage() {
    return (
        <Page animal="bunny" />
    )
}