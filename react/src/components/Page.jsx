import ParticleCanvas from '../components/ParticleCanvas.jsx';
import './Menu.css'

function Page(props) {

    function CustomBehaviour(p) {
        console.log(p)
    }

    function ChooseParticleType(p) {
        const ParticleList = props.ParticleList
        
        /* ADD RANDOMNESS individually AND here */
        /* can i make this function a template? yes i can!! */
        /* takes: ParticleList
            then I can use UI to update this component
            that's what the attributes of the particles in ParticleList
        */

        const ParticleChoice = ParticleList[Math.floor(Math.random() * ParticleList.length)]

        if (ParticleChoice.CustomBehaviour) {
            p.custombehaviour = ParticleChoice.CustomBehaviour
        }

        p.size = (ParticleChoice.Size + Math.random() * 6)
        p.type = ParticleChoice.Particle
        p.life = ParticleChoice.Life
        p.colourlist = ParticleChoice.Colour
        p.shape = ParticleChoice.Shape
        
        if (ParticleChoice.InitFunction) {
            p.initfunction = ParticleChoice.InitFunction
        }
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
            Size: 10,
            Shape: {name: "square"}
        },
        {
            Particle: "FloatingParticle",
            Colour: ["#22B64E", "#22B64E", "#22B64E", "#006E2B", "#FFC500", "#FFC500"],
            Life: 3000,
            Size: 5,
            Shape: {name: "square"}
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
            Particle: "RectangleGoldfishParticle",
            Colour: ["#D76B00"],
            Life: 5000,
            Size: 10,
            Shape: {name: "rectangle", sfx: 0.6, sfy: 1.6}
        },
        {
            Particle: "EllipticGoldfishParticle",
            Colour: ["#D76B00"],
            Life: 5000,
            Size: 15,
            // randomise radii a bit
            // mostly horizontal swimming
            // affects direction of water, when still gets affected by direction of water
            // water, when affected by wind strongly enough, affects fish
            // toggle wind particles
            Shape: {name: "ellipse", rx: 1.6, ry: 0.6}
        },
        {
            Particle: "WaterParticle",
            Colour: ["#137594", "#16677A", "#1BAAB8", "#38D4E3", "#AAF4FF", "#6FE2FF", "#55EBFF", "#52CACD"],
            Life: 3000,
            Size: 0.5,
            Shape: {name: "circle"}
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
    
    function CustomInitFunction(p, CanvasWidth, CanvasHeight) {
        // get screen width & height
        // parameter of ParticleFunction
        // subtract a certain border
        const BorderSizeX = 5000, BorderSizeY = 5000;
        const MaxX = CanvasWidth - 2*BorderSizeX;
        const MaxY = CanvasHeight - 2*BorderSizeY;
        // multiply by math.random
        // add border size
        p.x = MaxX * Math.random() + BorderSizeX;
        p.y = MaxY * Math.random() + BorderSizeY;
    }

    function CustomBehaviourFunction(p, CanvasWidth, CanvasHeight) {
        // get screen width & heigth again
        // if outside canvas, die <3
    }

    const ParticlesList = [
        {
            Particle: "BigbugParticle",
            Colour: ["#002800", "#3F0F0F", "#6B2E1A", "#801E1E", "#A34E2B", "#7B3540", "#ED1C24", "#006E2B"],
            Life: 4000,
            Size: 12,
            Shape: {name: "square"},
            InitFunction: CustomInitFunction,
        },
        {
            Particle: "LittlebugParticle",
            Colour: ["#ED1C24", "#FFA260", "#A68862", "#006E2B"],
            Life: 5000,
            Size: 5,
            Shape: {name: "square"}
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
            Colour: ["#FF7289", "#7C72FF", "#DDDDDD", "#FF7289", "#7C72FF", "#DDDDDD", "#22B64E", "#FFC500", "#2AB4D9", "#2AB4D9"],
            Life: 8000,
            Size: 1.5,
            Shape: {name: "circle"}
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