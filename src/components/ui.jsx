import { useEffect, useRef, useState } from 'react';

/* ================= KELAS BERSAMA ================= */
export const CONTAINER = 'mx-auto w-full max-w-[1140px] px-6';
export const SECTION = 'relative py-[74px] lg:py-[100px]';
export const ZONE_PINK = 'bg-[linear-gradient(180deg,var(--color-pink-pale),var(--color-pink-soft)_50%,var(--color-pink-pale))]';
export const ZONE_GREEN = 'bg-[linear-gradient(180deg,var(--color-green-pale),var(--color-green-soft)_50%,var(--color-green-pale))]';

export const BTN_PINK =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--color-pink),var(--color-pink-deep))] px-[30px] py-4 text-base font-bold text-white no-underline transition-all duration-250 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-pink';
export const BTN_GHOST =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-pink bg-white px-[30px] py-4 text-base font-bold text-ink no-underline transition-all duration-250 hover:-translate-y-[3px] hover:bg-pink-pale';

/* ================= FOTO DENGAN EFEK DUOTONE PINK-HIJAU ================= */
/* fill=true → foto jadi overlay absolut pengisi parent (parent wajib relative) */
export function Photo({ src, alt = '', className = '', eager = false, fill = false }) {
  return (
    <div className={`group/ph overflow-hidden bg-pink-soft ${fill ? 'absolute inset-0' : 'relative'} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className="h-full w-full object-cover saturate-[0.9] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/ph:scale-[1.07]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,126,185,0.34),rgba(127,220,155,0.30))]"
      />
    </div>
  );
}

/* ================= REVEAL ON SCROLL ================= */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${inView ? 'translate-y-0 opacity-100' : 'translate-y-9 opacity-0'} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ================= COUNTER ANIMASI ================= */
export function CountUp({ value, decimals = 0, suffix = '', className = '' }) {
  const ref = useRef(null);
  const [text, setText] = useState('0');

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 1900;
        const tick = (now) => {
          const p = Math.min((now - t0) / dur, 1);
          const v = value * (1 - Math.pow(1 - p, 3));
          setText((decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString()) + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, decimals, suffix]);

  return (
    <b ref={ref} className={className}>
      {text}
    </b>
  );
}

/* ================= HEADER SEKSI ================= */
export function SecHead({ zone = 'pink', eyebrow, title, sub }) {
  const zoneCls = zone === 'green' ? 'border-green text-green-dark' : 'border-pink text-pink-dark';
  return (
    <Reveal className="mb-14 text-center">
      <span className={`mb-[18px] inline-block rounded-full border-2 bg-white px-5 py-2 text-[12.5px] font-bold uppercase tracking-[2.5px] ${zoneCls}`}>
        {eyebrow}
      </span>
      <h2 className="text-[clamp(32px,4.6vw,50px)]">{title}</h2>
      {sub && <p className="mx-auto mt-3.5 max-w-[600px] text-[#8a6e7c]">{sub}</p>}
    </Reveal>
  );
}
