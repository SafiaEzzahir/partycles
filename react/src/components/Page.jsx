import ParticleCanvas from '../components/ParticleCanvas.jsx';

function Page(props) {

    return (
        <div>
            <ParticleCanvas
                ParticleFunction={props.ParticleFunction}
            />

            <button className="BackButton" onClick={() => {sessionStorage.setItem("CurrentPage", "menu"); console.log("changing current page to menu"); props.setPageFunction("menu");}}>back</button>
            <p>this page has been created! yay!! i love {props.animal}!!!</p>
        </div>
    )
}

export default function SnakePage(props) {
    /* needs a custom function to detect what colour and add to snake -> custom behaviour function uses particle.type */
    /* how do i make the CursorParticle immortal + keep speed + randomness + follow the mouse */
    function ChooseParticleType(p) {
        const ParticleList = [
            {
                Particle: "CursorParticle",
                Colour: ["#FF007B"],
                Life: 10500,
                Size: (10 + Math.random() * 6)
            },
            {
                Colour: ["#22B64E", "#22B64E", "#22B64E", "#006E2B", "#FFC500", "#FFC500"],
                Life: 3000,
                Particle: "FloatingParticle",
                Size: (5 + Math.random() * 6)
            }
        ]
        
        /* update randomness */
        /* can i make this function a template? yes i can!! */
        /* takes: ParticleList
            then I can use UI to update this component
            that's what the attributes of the particles in ParticleList
        */

        const ParticleChoice = ParticleList[Math.floor(Math.random() * ParticleList.length)]

        p.size = ParticleChoice.Size
        p.type = ParticleChoice.Particle
        p.life = ParticleChoice.Life
        p.colourlist = ParticleChoice.Colour
        
    }

    return (
        <Page 
            animal="snake"
            setPageFunction={props.setPageFunction}
            DefaultColourList={["#22B64E", "#22B64E", "#006E2B", "#FFC500"]}
            ParticleFunction={ChooseParticleType}
        />
    )
}

export function FishPage(props) {

    return (
        <Page
            animal="fish"
            setPageFunction={props.setPageFunction}
            ParticleFunction={ChooseParticleType}
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