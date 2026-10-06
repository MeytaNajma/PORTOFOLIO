import { useEffect, useRef } from 'react';
import { useHoverable } from '../hooks';

/* elemen interaktif yang memperbesar ring kursor */
const CURSOR_SEL = 'a, button, [data-cursor]';

export default function CustomCursor() {
  const hoverable = useHoverable();
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!hoverable) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mx = 0, my = 0, rx = 0, ry = 0, raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };
    const onOver = (e) => ring.classList.toggle('grow', !!e.target.closest?.(CURSOR_SEL));
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      raf = requestAnimationFrame(loop);
    };

    addEventListener('mousemove', onMove);
    addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(loop);
    return () => {
      removeEventListener('mousemove', onMove);
      removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, [hoverable]);

  if (!hoverable) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-deep"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[38px] w-[38px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-pink-deep transition-[width,height,background-color,border-color] duration-250
          [&.grow]:h-16 [&.grow]:w-16 [&.grow]:border-green-deep [&.grow]:bg-pink/20"
      />
    </>
  );
}
