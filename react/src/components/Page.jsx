import ParticleCanvas from '../components/ParticleCanvas.jsx';

function Page(props) {

    function ChooseParticleType(p) {
        const ParticleList = props.ParticleList
        
        /* ADD RANDOMNESS individually AND here */
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
        <div>
            <ParticleCanvas
                ParticleFunction={ChooseParticleType}
            />

            <button className="BackButton" onClick={() => {sessionStorage.setItem("CurrentPage", "menu"); props.setPageFunction("menu");}}>back</button>
            <p>this page has been created! yay!! i love {props.animal}!!!</p>
        </div>
    )
}

export default function SnakePage(props) {
    /* needs a custom function to detect what colour and add to snake -> custom behaviour function uses particle.type */
    /* how do i make the CursorParticle immortal + keep speed + randomness + follow the mouse */

    const ParticlesList = [
        {
            Particle: "CursorParticle",
            Colour: ["#FF007B"],
            Life: 10500,
            Size: (10 + Math.random() * 6)
        },
        {
            Particle: "FloatingParticle",
            Colour: ["#22B64E", "#22B64E", "#22B64E", "#006E2B", "#FFC500", "#FFC500"],
            Life: 3000,
            Size: (5 + Math.random() * 6)
        }
    ]

    return (
        <Page 
            animal="snake"
            setPageFunction={props.setPageFunction}
            ParticleList={ParticlesList}
        />
    )
}

export function FishPage(props) {

    const ParticlesList = [
        {
            Particle: "GoldfishParticle",
            Colour: ["#ff9b10"],
            Life: 3000,
            Size: (5 + Math.random() * 6)
        },
        {
            Particle: "WaterParticle",
            Colour: ["#0b5cf1", "#3fe2ed", "#1a7cecff"],
            Life: 30000,
            Size: (2 + Math.random() * 6)
        }
    ]

    return (
        <Page
            animal="fish"
            setPageFunction={props.setPageFunction}
            ParticleList={ParticlesList}
        />
    )
}

export function BugPage(props) {

    const ParticlesList = [
        {
            Particle: "BigbugParticle",
            Colour: ["#2d3223", "#373030", "#473312"],
            Life: 4000,
            Size: (12 + Math.random() * 6)
        },
        {
            Particle: "LittlebugParticle",
            Colour: ["#98401d", "#510e0e"],
            Life: 5000,
            Size: (3 + Math.random() * 6)
        }
    ]

    return (
        <Page
            animal="bug"
            setPageFunction={props.setPageFunction}
            ParticleList={ParticlesList}
        />
    )
}

export function BunnyPage(props) {

    const ParticlesList = [
        {
            Particle: "BabyBunny",
            Colour: ["#ffcdfb", "#8ec4f0", "#ffffff", "#ffcdfb", "#8ec4f0", "#ffffff", "#adfab7", "#f5e6a0"],
            Life: 8000,
            Size: (1.5 + Math.random() * 20)
        }
    ]

    return (
        <Page
            animal="bunny"
            setPageFunction={props.setPageFunction}
            ParticleList={ParticlesList}
        />
    )
}