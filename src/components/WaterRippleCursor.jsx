import React, { useEffect, useRef } from 'react';

/**
 * WaterRippleCursor
 * 
 * GPU-accelerated fluid water ripple and refraction trail across the viewport.
 * - Non-blocking overlay (pointer-events: none)
 * - Motion-responsive water rings and click shockwaves
 * - Automatic mobile touch disable & user toggle support
 */
export default function WaterRippleCursor({ enabled = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check for touch / mobile device or reduced motion
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!enabled || isTouchDevice || prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Ripple collection
    let ripples = [];
    let lastMousePos = { x: -100, y: -100 };
    let lastSpawnTime = 0;

    const addRipple = (x, y, maxRadius = 90, intensity = 0.55, speed = 2.2) => {
      ripples.push({
        x,
        y,
        radius: 4,
        maxRadius,
        intensity,
        speed,
        life: 1.0,
        decay: 0.016,
      });
      // Limit pool for constant 60fps
      if (ripples.length > 25) {
        ripples.shift();
      }
    };

    const handleMouseMove = (e) => {
      const now = performance.now();
      const dx = e.clientX - lastMousePos.x;
      const dy = e.clientY - lastMousePos.y;
      const dist = Math.hypot(dx, dy);

      // Only spawn ripple if mouse moved enough and throttled slightly for smooth fluid trail
      if (dist > 18 && now - lastSpawnTime > 35) {
        addRipple(e.clientX, e.clientY, 75, Math.min(0.45, dist * 0.008), 2.0);
        lastMousePos = { x: e.clientX, y: e.clientY };
        lastSpawnTime = now;
      }
    };

    const handleMouseDown = (e) => {
      // Powerful click shockwave ripples
      addRipple(e.clientX, e.clientY, 140, 0.8, 3.2);
      setTimeout(() => {
        addRipple(e.clientX, e.clientY, 100, 0.5, 2.4);
      }, 70);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.life -= r.decay;

        if (r.life <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        const alpha = Math.max(0, r.life * r.intensity);

        // Outer water refraction ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(230, 43, 30, ${alpha * 0.65})`;
        ctx.lineWidth = Math.max(1, 2.5 * r.life);
        ctx.shadowColor = '#E62B1E';
        ctx.shadowBlur = 10;
        ctx.stroke();

        // Inner water reflection crest
        if (r.radius > 12) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius * 0.75, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.25})`;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 4;
          ctx.stroke();
        }

        // Faint water droplet core
        if (r.life > 0.6) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, Math.max(1, 3 * (r.life - 0.6)), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 120, 110, ${alpha * 0.5})`;
          ctx.fill();
        }

        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
