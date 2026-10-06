import { useEffect, useRef, useState } from 'react';

/* true kalau device punya hover (bukan touch screen) */
export function useHoverable() {
  const [hoverable] = useState(() => typeof window !== 'undefined' && matchMedia('(hover: hover)').matches);
  return hoverable;
}

/* efek tilt 3D mengikuti kursor */
export function useTilt() {
  const ref = useRef(null);
  const hoverable = useHoverable();

  useEffect(() => {
    const el = ref.current;
    if (!el || !hoverable) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(750px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg) translateY(-5px)`;
    };
    const onLeave = () => { el.style.transform = ''; };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [hoverable]);

  return ref;
}

/* tombol magnetik — ikut "menempel" ke kursor */
export function useMagnetic() {
  const ref = useRef(null);
  const hoverable = useHoverable();

  useEffect(() => {
    const el = ref.current;
    if (!el || !hoverable) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.translate = `${((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1)}px ${((e.clientY - r.top - r.height / 2) * 0.22).toFixed(1)}px`;
    };
    const onLeave = () => { el.style.translate = '0px 0px'; };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [hoverable]);

  return ref;
}
