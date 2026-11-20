import React, { useEffect, useRef } from 'react';

/**
 * HeroWaveCanvas
 * 
 * Replaces old fire/ember animations with an acoustic/fluid harmonic soundwave canvas
 * themed in signature TEDx Red (#E62B1E) and deep crimson (#800B00).
 * 
 * Features:
 * - Overlapping sine/cosine harmonic frequencies simulating resonance acoustics
 * - Interactive mouse influence (frequency & amplitude modulation on cursor proximity)
 * - 60fps hardware-accelerated 2D canvas drawing with additive blending and radial glow
 */
export default function HeroWaveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovering: false,
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener('resize', handleResize);
    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes floating along harmonic lines
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      color: Math.random() > 0.4 ? 'rgba(230, 43, 30,' : 'rgba(255, 80, 70,',
    }));

    let step = 0;

    // Acoustic wave parameters (Resonance harmonics)
    const waveLayers = [
      { color: 'rgba(230, 43, 30, 0.45)', lineWidth: 2.2, frequency: 0.008, speed: 0.022, amplitude: 65, phase: 0 },
      { color: 'rgba(180, 20, 20, 0.35)', lineWidth: 1.8, frequency: 0.012, speed: 0.018, amplitude: 50, phase: 1.5 },
      { color: 'rgba(255, 60, 50, 0.25)', lineWidth: 1.5, frequency: 0.006, speed: 0.028, amplitude: 80, phase: 3.0 },
      { color: 'rgba(120, 10, 10, 0.4)', lineWidth: 2.8, frequency: 0.015, speed: 0.014, amplitude: 40, phase: 4.2 },
      { color: 'rgba(230, 43, 30, 0.15)', lineWidth: 1.0, frequency: 0.022, speed: 0.035, amplitude: 30, phase: 5.5 }
    ];

    const render = () => {
      step += 1;

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Clear with subtle dark trail for motion smoothing
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, width, height);

      // Deep central red ambient glow
      const ambientGlow = ctx.createRadialGradient(
        width / 2, height * 0.55, 10,
        width / 2, height * 0.55, Math.max(width, height) * 0.65
      );
      ambientGlow.addColorStop(0, 'rgba(180, 20, 15, 0.22)');
      ambientGlow.addColorStop(0.35, 'rgba(100, 10, 10, 0.12)');
      ambientGlow.addColorStop(0.7, 'rgba(20, 5, 5, 0.04)');
      ambientGlow.addColorStop(1, 'rgba(10, 10, 10, 0)');
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // Mouse interactive radial halo
      if (mouse.isHovering) {
        const mouseHalo = ctx.createRadialGradient(
          mouse.x, mouse.y, 5,
          mouse.x, mouse.y, 220
        );
        mouseHalo.addColorStop(0, 'rgba(230, 43, 30, 0.18)');
        mouseHalo.addColorStop(0.5, 'rgba(230, 43, 30, 0.05)');
        mouseHalo.addColorStop(1, 'rgba(230, 43, 30, 0)');
        ctx.fillStyle = mouseHalo;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw floating acoustic particle nodes
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.shadowColor = '#E62B1E';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw harmonic acoustic wave ribbons
      waveLayers.forEach((wave, idx) => {
        ctx.beginPath();
        const baseHeight = height * 0.52 + (idx - 2) * 18;

        for (let x = 0; x <= width; x += 3) {
          // Calculate distance from mouse to create interactive distortion
          const dx = x - mouse.x;
          const distToMouse = Math.abs(dx);
          const mouseInfluence = mouse.isHovering
            ? Math.max(0, 1 - distToMouse / 260) * 35 * Math.sin(step * 0.08)
            : 0;

          // Multiple resonant harmonic frequencies
          const y =
            baseHeight +
            Math.sin(x * wave.frequency + step * wave.speed + wave.phase) * wave.amplitude +
            Math.cos(x * (wave.frequency * 0.5) + step * (wave.speed * 0.6)) * (wave.amplitude * 0.35) +
            mouseInfluence;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;
        ctx.shadowColor = '#E62B1E';
        ctx.shadowBlur = idx === 0 ? 15 : 6;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Bottom fading vignette so canvas smoothly merges into page content
      const bottomFade = ctx.createLinearGradient(0, height - 120, 0, height);
      bottomFade.addColorStop(0, 'rgba(10, 10, 10, 0)');
      bottomFade.addColorStop(1, '#0A0A0A');
      ctx.fillStyle = bottomFade;
      ctx.fillRect(0, height - 120, width, 120);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ touchAction: 'none' }}
    />
  );
}
