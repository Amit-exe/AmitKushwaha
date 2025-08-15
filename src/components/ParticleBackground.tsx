import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  baseVx: number; // Store original velocity
  baseVy: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -100, y: -100, radius: 150 }); // Start off-screen
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getColors = () => {
      return document.documentElement.classList.contains("dark")
        ? ["#3DC2EC", "#4B70F5", "#4C3BCF", "#402E7A", "#0118D8"] // Dark mode colors
        : ["#93C5FD", "#60A5FA", "#3B82F6", "#2563EB", "#1D4ED8"]; // Light mode colors
    };

    const getBackgroundColor = () => {
      return document.documentElement.classList.contains("dark")
        ? "#141414" // Dark mode background
        : "#f8fafc"; // Light mode background
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = getBackgroundColor();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 2000); // Density-based count
      const colors = getColors();

      for (let i = 0; i < particleCount; i++) {
        const baseVx = (Math.random() - 0.5) * 0.3;
        const baseVy = (Math.random() - 0.5) * 0.3;

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          size: Math.random() * 2.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.6 + 0.2,
        });
      }

      particlesRef.current = particles;
    };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2);
      ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
        .toString(16)
        .padStart(2, "0")}`;
      ctx.fill();
    };

    const handleMouseInteractions = (particle: Particle) => {
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const influenceRadius = mouseRef.current.radius * 2;

      if (distance < influenceRadius) {
        const angle = Math.atan2(dy, dx);
        const force = (influenceRadius - distance) / influenceRadius;

        // Orbital effect - perpendicular force
        particle.vx = particle.baseVx + Math.sin(angle) * force * 0.8;
        particle.vy = particle.baseVy - Math.cos(angle) * force * 0.8;

        // Draw faint connection lines for closer particles
        if (distance < mouseRef.current.radius) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x + dx * 0.3, particle.y + dy * 0.3);
          ctx.strokeStyle = document.documentElement.classList.contains("dark")
            ? `rgba(147, 51, 234, ${
                0.3 - (distance / mouseRef.current.radius) * 0.3
              })`
            : `rgba(37, 99, 235, ${
                0.3 - (distance / mouseRef.current.radius) * 0.3
              })`;
          ctx.lineWidth = 0.3;
          ctx.stroke();
        }
      } else {
        // Gradually return to base velocity
        particle.vx += (particle.baseVx - particle.vx) * 0.05;
        particle.vy += (particle.baseVy - particle.vy) * 0.05;
      }
    };

    // 🔹 Modified updateParticle to bounce back to center
    const updateParticle = (particle: Particle) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Check edges and redirect velocity toward center
      if (
        particle.x <= 0 ||
        particle.x >= canvas.width ||
        particle.y <= 0 ||
        particle.y >= canvas.height
      ) {
        const dx = centerX - particle.x;
        const dy = centerY - particle.y;
        const angle = Math.atan2(dy, dx);

        const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2) || 0.5; // keep momentum
        particle.vx = Math.cos(angle) * speed;
        particle.vy = Math.sin(angle) * speed;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;
    };

    const animate = () => {
      ctx.fillStyle = getBackgroundColor();
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      particles.forEach((particle) => {
        updateParticle(particle);
        handleMouseInteractions(particle);
        drawParticle(particle);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -100;
      mouseRef.current.y = -100;
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    const observer = new MutationObserver(() => {
      createParticles();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleBackground;
