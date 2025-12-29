import ParticleCanvas from '../components/ParticleCanvas.jsx';
import './Menu.css'

// handle "infinite" life to immortalise particles

function Page(props) {

    function ChooseParticleType(p, width, height) {
        const ParticleList = props.ParticleList
        
        /* add randomness HERE */

        const ParticleChoice = ParticleList[Math.floor(Math.random() * ParticleList.length)]
        
        p.size = (ParticleChoice.Size + Math.random() * 6)
        p.type = ParticleChoice.Particle
        p.life = (ParticleChoice.Life + (Math.random()-0.5) * 100)
        p.colourlist = ParticleChoice.Colour
        p.shape = ParticleChoice.Shape
        
        if (ParticleChoice.CustomInit) {
            ParticleChoice.CustomInit(p, width, height)
        }

        if (p.shape.rx) {
            p.shape.rx += Math.random()*0.03;
            p.shape.ry += Math.random()*0.03;
        } else if (p.shape.sfx) {
            p.shape.sfx += Math.random()*0.1;
            p.shape.sfy += Math.random()*0.3;
        }
        
    }

    return (
        <div>
            <ParticleCanvas
                ParticleFunction={ChooseParticleType}
                CursorParticleOn={props.CursorParticle ? true : false}
            />

            <div className='PageContainer'>
                <button className="BackButton" onClick={() => {sessionStorage.setItem("CurrentPage", "menu"); props.setPageFunction("menu");}}>back</button>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default function SnakePage(props) {
    /* needs a custom function to detect what colour and add to snake -> custom behaviour function uses particle.type */
    /* how do i make the CursorParticle immortal + keep speed + randomness + follow the mouse */

    const ParticlesList = [
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
            desc="snake-themed particles vaguely inspired by the retro game 'snake' (crazy, i know)"
            setPageFunction={props.setPageFunction}
            ParticleList={ParticlesList}
            CursorParticle={true}
        />
    )
}

export function FishPage(props) {

    const ParticlesList = [
        {
            Particle: "RectangleGoldfishParticle",
            Colour: ["#D76B00"],
            Life: 5000,
            Size: 9,
            Shape: {name: "rectangle", sfx: 0.6, sfy: 1.6}
        },
        {
            Particle: "EllipticGoldfishParticle",
            Colour: ["#D76B00"],
            Life: 5000,
            Size: 10,
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
        },
        {
            Particle: "WaterParticle",
            Colour: ["#137594", "#16677A", "#1BAAB8", "#38D4E3", "#AAF4FF", "#6FE2FF", "#55EBFF", "#52CACD"],
            Life: 3000,
            Size: 0.5,
            Shape: {name: "circle"}
        },
        {
            Particle: "WaterParticle",
            Colour: ["#137594", "#16677A", "#1BAAB8", "#38D4E3", "#AAF4FF", "#6FE2FF", "#55EBFF", "#52CACD"],
            Life: 3000,
            Size: 0.5,
            Shape: {name: "circle"}
        },
        {
            Particle: "WaterParticle",
            Colour: ["#137594", "#16677A", "#1BAAB8", "#38D4E3", "#AAF4FF", "#6FE2FF", "#55EBFF", "#52CACD"],
            Life: 3000,
            Size: 0.5,
            Shape: {name: "circle"}
        }
    ]

    function CustomInitFunc(p) {
        p.angle = Math.atan2((Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 1.2)
    }

    return (
        <Page
            desc="very chaotic and abstract ocean simulation =D"
            setPageFunction={props.setPageFunction}
            ParticleList={ParticlesList}
            CustomInit={CustomInitFunc}
        />
    )
}

export function BugPage(props) {

    function CustomInitFunction(p, width, height) {
        // subtract 2* border from x and y
        const BorderX = 200
        const BorderY = 200
        const MaxX = width - BorderX*2
        const MaxY = height - BorderY*2
        // multiply by random
        // add back the border
        p.x = MaxX * Math.random() + BorderX
        p.y = MaxY * Math.random() + BorderY
        p.speed = 32 + Math.random() * 8
    }

    const ParticlesList = [
        {
            Particle: "BigbugParticle",
            Colour: ["#002800", "#3F0F0F", "#6B2E1A", "#801E1E", "#A34E2B", "#7B3540", "#ED1C24", "#006E2B"],
            Life: 10100,
            Size: 18,
            Shape: {name: "square"},
            CustomInit: CustomInitFunction
        },
        {
            Particle: "LittlebugParticle",
            Colour: ["#ED1C24", "#FFA260", "#A68862", "#006E2B"],
            Life: 10100,
            Size: 1.5,
            Shape: {name: "circle"},
            CustomInit: CustomInitFunction
        }
    ]

    return (
        <Page
            desc="pov: bugs when you lift up a random log that happens to be their home"
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
            Size: 10,
            Shape: {name: "circle"}
        }
    ]

    return (
        <Page
            desc="they might not look like bunnies, but I promise they are!!"
            setPageFunction={props.setPageFunction}
            ParticleList={ParticlesList}
        />
    )
}