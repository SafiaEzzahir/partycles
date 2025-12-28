import { useRef, useEffect } from 'react';

import '../components/ParticleCanvas.css';

// props -> ColourPalette ✅ CustomFunctions (= [function]), ParticleSize, ParticleLife <-- include randomness, MaxParticles, OnMoveFunction
// add mouse-following particles

export default function ParticleCanvas(props) {

    const CanvasRef = useRef(null);
    const ParticlesRef = useRef([]);

    // poolref is for reusing particles
    const PoolRef = useRef([]);
    const RafRef = useRef(null);

    // idk if i need this
    const LastTimeRef = useRef(performance.now());

    useEffect(() => {
        const Canvas = CanvasRef.current;

        if (!Canvas) return;

        const Ctx = Canvas.getContext('2d');
        let Dpr = window.devicePixelRatio || 1;

        function resize() {
            Dpr = window.devicePixelRatio || 1;

            Canvas.width = Math.max(1, innerWidth*Dpr);
            Canvas.height = Math.max(1, innerHeight*Dpr);

            Canvas.style.width = innerWidth + 'px';
            Canvas.style.height = innerHeight + 'px';

            Ctx.setTransform(Dpr, 0, 0, Dpr, 0, 0);
        }

        resize();
        SpawnParticle(55);
        window.addEventListener('resize', resize)

        function CreateParticle(lastX, lastY) {
            let p = PoolRef.current.pop()
            if (!p) p = {};
            if (props.ParticleFunction) {
                props.ParticleFunction(p)
            } else {
                p.colourlist = props.ColourList
                p.size = 3 + Math.random() * 6;
                p.life = 2500 + Math.random() * 100;
            }

            p.x = Math.random() * (Canvas.width - Dpr/5);
            p.y = Math.random() * (Canvas.height - Dpr/5);
            p.age = 0;
            p.angle = Math.atan2(p.y - (lastY ?? p.y) + (Math.random() - 0.5) * 1.2, p.x - (lastX ?? p.x) + (Math.random() - 0.5) * 1.2);
            
            if (p.initfunction) {
                p.initfunction(p, Canvas.width / Dpr, Canvas.height / Dpr)
            }
            
            
            const speed = 0.05 + Math.random() * 1.2;
            p.vx = Math.cos(p.angle) * speed;
            p.vy = Math.sin(p.angle) * speed;
            
            p.life = p.life ?? Math.random() * 1000
            
            p.color = p.colourlist[Math.floor(Math.random() * p.colourlist.length)];

            return p;
        }

        function SpawnParticle(count, lastX, lastY) {
            for (let i = 0; i < count; i++) {

                const p = CreateParticle(lastX, lastY);

                ParticlesRef.current.push(p);

                // 60 is max particles
                if (ParticlesRef.current.length > 55) {
                    const removed = ParticlesRef.current.shift();
                    PoolRef.current.push(removed);
                }
            }
        }

        function Update(now) {
            const Dt = Math.min(50, now - LastTimeRef.current);

            LastTimeRef.current = now;
            const Particles = ParticlesRef.current;
            
            Ctx.clearRect(0, 0, Canvas.width/Dpr, Canvas.height/Dpr);

            for (let i = Particles.length - 1; i >= 0; i--) {
                const p = Particles[i];

                let size = p.size

                if (p.custombehaviour) {
                    p.custombehaviour(p)
                } else {
                    p.age += Dt;
                    if (p.age >= p.life) {
                        Particles.splice(i, 1);
                        PoolRef.current.push(p);
                        SpawnParticle(1)
                        continue;
                    }
                    p.vx *= 0.999;
                    p.vy *= 0.999;
                    p.x += p.vx * (Dt/16);
                    p.y += p.vy * (Dt/16) + 0.2 * (Dt/16);
                    
                    size = p.size * (1 - t * 0.8)
    
                    // ^^ determine alpha value for transparency and size based on age
                }
                
                var t = p.age / p.life;
                p.alpha = p.alpha ?? 1 - t;
                
                Ctx.save();
                Ctx.beginPath();
                Ctx.fillStyle = p.color;
                Ctx.globalAlpha = p.alpha ?? 1;
                Ctx.shadowColor = p.color;
                Ctx.shadowBlur = 10;

                if (p.shape.name == "square") {
                    Ctx.rect(p.x, p.y, size, size);
                } else if (p.shape.name == "rectangle") {
                    Ctx.rect(p.x, p.y, (size*p.shape.sfy), (size*p.shape.sfx))
                } else if (p.shape.name == "circle") {
                    Ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
                } else if (p.shape.name == "ellipse") {
                    const rotation = Math.atan2(p.vy, p.vx) + (Math.random()-0.5)*0.5 // smooth
                    Ctx.ellipse(p.x, p.y, size*(p.shape.rx), size*(p.shape.ry), rotation, 0, Math.PI * 2)
                }

                Ctx.stroke();
                Ctx.fill();
                Ctx.restore();
            }
            RafRef.current = requestAnimationFrame(Update);
        }
        RafRef.current = requestAnimationFrame(Update);

        return () => {
            window.removeEventListener('resize', resize);
            ParticlesRef.current = [];
            PoolRef.current = [];
            cancelAnimationFrame(RafRef.current);
        }
    }, []);

    return (
        <canvas ref={CanvasRef} className='ParticleCanvas'></canvas>
    )
};

/*


*/