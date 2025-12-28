import { useRef, useEffect } from 'react';

import '../components/ParticleCanvas.css';

// props -> ColourPalette, CustomFunctions (= [function]), ParticleSize, ParticleLife <-- include randomness, MaxParticles, OnMoveFunction
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
        SpawnParticle(60);
        window.addEventListener('resize', resize)

        function CreateParticle(x, y, vx, vy) {
            let p = PoolRef.current.pop()
            if (!p) p = {};

            p.x = x;
            p.y = y;
            p.vx = vx;
            p.vy = vy;

            p.size = 3 + Math.random() * 6;
            p.life = 2500 + Math.random() * 100;
            p.age = 0;
            p.color = props.ColourFunction();
            return p;
        }

        function SpawnParticle(count, lastX, lastY) {
            for (let i = 0; i < count; i++) {
                const x = Math.random() * (Canvas.width - Dpr/5);
                const y = Math.random() * (Canvas.height - Dpr/5);

                const angle = Math.atan2(y - (lastY ?? y) + (Math.random() - 0.5) * 1.2, x - (lastX ?? x) + (Math.random() - 0.5) * 1.2);
                const speed = 0.05 + Math.random() * 1.2;
                const vx = Math.cos(angle) * speed;
                const vy = Math.sin(angle) * speed;

                const p = CreateParticle(x + (Math.random() - 0.5) * 6, y + (Math.random() - 0.5) * 6, vx, vy);

                ParticlesRef.current.push(p);

                // 60 is max particles
                if (ParticlesRef.current.length > 60) {
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
                p.age += Dt;
                if (p.age >= p.life) {
                    Particles.splice(i, 1);
                    PoolRef.current.push(p);
                    SpawnParticle(1)
                    continue;
                }

                p.vx *= 0.995;
                p.vy *= 0.995;
                p.x += p.vx * (Dt/16);
                p.y += p.vy * (Dt/16) + 0.2 * (Dt/16);

                const t = p.age / p.life;
                const alpha = 1 - t;
                const size = p.size * (1 - t * 0.8)
                // ^^ determine alpha value for transparency and size based on age

                Ctx.save();
                Ctx.beginPath();
                Ctx.fillStyle = p.color;
                Ctx.globalAlpha = alpha;
                Ctx.shadowColor = p.color;
                Ctx.shadowBlur = 10;

                Ctx.rect(p.x, p.y, size, size);
                Ctx.stroke();
                Ctx.fill();
                Ctx.restore();
            }
            RafRef.current = requestAnimationFrame(Update);
        }
        RafRef.current = requestAnimationFrame(Update);

        return () => {
            window.removeEventListener('resize', resize);
        }
    }, [props]);

    return (
        <canvas ref={CanvasRef} className='ParticleCanvas'></canvas>
    )
};