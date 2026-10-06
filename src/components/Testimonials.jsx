import { useEffect, useState } from 'react';
import { TESTIMONIALS } from '../data';
import { CONTAINER, Reveal, SECTION, SecHead, ZONE_GREEN } from './ui';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const len = TESTIMONIALS.length;

  /* autoplay, pause saat hover */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % len), 5200);
    return () => clearInterval(t);
  }, [paused, resetKey, len]);

  const go = (i) => setIdx((i + len) % len);
  const manual = (i) => {
    go(i);
    setResetKey((k) => k + 1); // restart timer
  };

  return (
    <section className={`${SECTION} ${ZONE_GREEN}`}>
      <div className={CONTAINER}>
        <SecHead zone="green" eyebrow="💬 they said what?" title={<>kind words from <em className="text-green-deep">brands</em></>} />

        <Reveal
          className="relative mx-auto max-w-[760px] px-1 max-sm:px-1 lg:px-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            data-cursor
            aria-label="Previous"
            onClick={() => manual(idx - 1)}
            className="absolute left-0 top-1/2 z-[2] h-[46px] w-[46px] -translate-y-1/2 cursor-pointer rounded-full border-2 border-green bg-white text-lg text-green-deep transition-all duration-300 hover:scale-110 hover:bg-green hover:text-white max-sm:hidden"
          >
            ‹
          </button>
          <button
            data-cursor
            aria-label="Next"
            onClick={() => manual(idx + 1)}
            className="absolute right-0 top-1/2 z-[2] h-[46px] w-[46px] -translate-y-1/2 cursor-pointer rounded-full border-2 border-green bg-white text-lg text-green-deep transition-all duration-300 hover:scale-110 hover:bg-green hover:text-white max-sm:hidden"
          >
            ›
          </button>

          <div className="overflow-hidden rounded-[28px]">
            <div
              className="flex transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="min-w-full p-3">
                  <div className="rounded-[28px] border-2 border-green bg-white px-9 py-10 text-center shadow-green">
                    <div className="font-serif text-[58px] leading-none text-pink">"</div>
                    <p className="mb-6 mt-[18px] text-[17px] italic text-[#5c4a66]">{t.quote}</p>
                    <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full border-2 border-pink bg-pink-soft text-[28px]">{t.emoji}</div>
                    <b className="block">{t.name}</b>
                    <small className="text-[#8a7788]">{t.role}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[26px] flex justify-center gap-2.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => manual(i)}
                className={`h-[11px] w-[11px] cursor-pointer rounded-full border-none p-0 transition-all duration-300 ${
                  i === idx ? 'scale-[1.4] bg-green-deep' : 'bg-green-soft'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
