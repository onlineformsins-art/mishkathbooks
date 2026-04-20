import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let w: number;
    let h: number;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class GeometryParticle {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotSpeed: number;
      driftX: number;
      driftY: number;
      type: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = 15 + Math.random() * 40;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.003;
        this.driftX = (Math.random() - 0.5) * 0.2;
        this.driftY = -0.1 - Math.random() * 0.15;
        this.type = Math.floor(Math.random() * 3);
        this.opacity = 0.05 + Math.random() * 0.12;
      }

      update() {
        this.x += this.driftX;
        this.y += this.driftY;
        this.rotation += this.rotSpeed;

        if (this.y < -this.size * 2) {
          this.y = h + this.size * 2;
          this.x = Math.random() * w;
        }
        if (this.x < -this.size * 2) this.x = w + this.size * 2;
        if (this.x > w + this.size * 2) this.x = -this.size * 2;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = `rgba(192, 151, 62, ${this.opacity})`;
        ctx.lineWidth = 0.8;

        if (this.type === 0) {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
          ctx.stroke();
        } else if (this.type === 1) {
          // Hexagon
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const px = (this.size / 2) * Math.cos(angle);
            const py = (this.size / 2) * Math.sin(angle);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        } else {
          // 8-point star
          ctx.beginPath();
          for (let i = 0; i < 16; i++) {
            const angle = (i * Math.PI) / 8;
            const r = i % 2 === 0 ? this.size / 2 : this.size / 4;
            const px = r * Math.cos(angle);
            const py = r * Math.sin(angle);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    const particles: GeometryParticle[] = [];
    for (let i = 0; i < 35; i++) {
      particles.push(new GeometryParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#04302C] overflow-hidden">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto">
        <p className="text-[#C0973E] text-sm tracking-[0.4em] uppercase mb-6 font-light">
          Publications of
        </p>
        <h1 className="font-serif text-[#F6F3EE] leading-[1.05] tracking-tight">
          <span className="block text-[8vw] sm:text-[6vw] lg:text-[5vw] font-semibold">
            MISHKATH
          </span>
          <span className="block text-[5vw] sm:text-[3.5vw] lg:text-[2.8vw] font-normal mt-1 tracking-wide">
            RESEARCH INSTITUTE
          </span>
          <span className="block text-[4vw] sm:text-[2.5vw] lg:text-[2vw] font-light mt-2 text-[#C0973E] italic">
            (PUBLICATIONS)
          </span>
        </h1>
        <p className="text-[#F6F3EE]/60 text-base sm:text-lg mt-8 max-w-xl mx-auto font-light tracking-wide">
          Authentic Islamic literature in Tamil, English &amp; Sinhala
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button
            onClick={() => onNavigate('tamil')}
            className="px-8 py-3 border border-[#C0973E] text-[#C0973E] rounded-full text-sm tracking-wider uppercase hover:bg-[#C0973E] hover:text-[#04302C] transition-all duration-300"
          >
            Tamil Books
          </button>
          <button
            onClick={() => onNavigate('english')}
            className="px-8 py-3 border border-[#C0973E] text-[#C0973E] rounded-full text-sm tracking-wider uppercase hover:bg-[#C0973E] hover:text-[#04302C] transition-all duration-300"
          >
            English Books
          </button>
          <button
            onClick={() => onNavigate('sinhala')}
            className="px-8 py-3 border border-[#C0973E] text-[#C0973E] rounded-full text-sm tracking-wider uppercase hover:bg-[#C0973E] hover:text-[#04302C] transition-all duration-300"
          >
            Sinhala Books
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-[#F6F3EE]/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-10 h-10 rounded-full border border-[#C0973E]/50 flex items-center justify-center animate-bounce">
          <ChevronDown className="w-5 h-5 text-[#C0973E]" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F6F3EE] to-transparent z-10" />
    </section>
  );
}
