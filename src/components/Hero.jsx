import hero from '../assets/images/hero.jpeg';
import { useRef, useState } from 'react';
import { NICHE_TAGS, STATS } from '../data';
import { useMagnetic, useTilt } from '../hooks';
import { BTN_GHOST, BTN_PINK, CountUp, Photo, Reveal } from './ui';

const SPARK_CHARS = ['♡', '✿', '🌸', '✨'];

const CHIP = 'absolute z-[5] animate-bob whitespace-nowrap rounded-full border-2 border-pink bg-white px-4 py-[9px] text-[13px] font-bold shadow-pink';

export default function Hero() {
  const tiltRef = useTilt();
  const btn1 = useMagnetic();
  const btn2 = useMagnetic();
  const photoWrapRef = useRef(null);
  const [sparks, setSparks] = useState([]);

  /* easter egg: klik foto hero → hujan hati */
  const popSparks = (e) => {
    const r = photoWrapRef.current.getBoundingClientRect();
    const made = Array.from({ length: 8 }, (_, i) => ({
      id: `${Date.now()}-${i}`,
      char: SPARK_CHARS[i % 4],
      left: e.clientX - r.left + (Math.random() * 70 - 35),
      top: e.clientY - r.top + (Math.random() * 40 - 20),
      delay: Math.random() * 0.3,
    }));
    setSparks((s) => [...s, ...made]);
    setTimeout(() => setSparks((s) => s.filter((sp) => !made.includes(sp))), 1300);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(125deg,var(--color-pink-pale)_0%,var(--color-pink-soft)_55%,#FFC9E0_100%)] pb-[100px] pt-[130px] lg:pt-[140px]"
    >
      {/* blob berkembar */}
      <div className="pointer-events-none absolute -left-[100px] top-[6%] h-[340px] w-[340px] animate-float rounded-full bg-pink opacity-[0.55] blur-[70px]" />
      <div className="pointer-events-none absolute -right-[90px] bottom-[2%] h-[300px] w-[300px] animate-float rounded-full bg-green opacity-[0.55] blur-[70px] [animation-delay:-3s]" />
      <div className="pointer-events-none absolute left-[52%] top-[58%] h-[160px] w-[160px] animate-float rounded-full bg-white opacity-50 blur-[70px] [animation-delay:-5s]" />

      <div className="relative z-[2] mx-auto grid w-full max-w-[1140px] items-center gap-14 px-6 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-pink bg-white px-[18px] py-2 text-[13px] font-bold uppercase tracking-[1.5px] text-pink-dark shadow-pink">
            ☁️ everyday girl · East Java, Indonesia
          </span>
          <h1 className="mb-[18px] mt-[26px] text-[clamp(40px,5.6vw,68px)]">
            hi! i'm <em className="bg-[linear-gradient(transparent_60%,var(--color-green-soft)_60%)]">meyta</em> — i turn ordinary days into soft little films
          </h1>
          <p className="max-w-[540px] text-[clamp(16px,1.7vw,19px)] text-[#7a5566]">
            21 y/o storyteller & <strong className="text-pink-deep">professional daydreamer</strong>. i make the internet a prettier place — one pastel video,
            one golden hour, one matcha date at a time.{' '}
            <span className="bg-[linear-gradient(transparent_60%,var(--color-green-soft)_60%)] font-bold text-green-dark">soft things, but they hit different</span> ✿
          </p>

          <div className="mt-[22px] flex flex-wrap gap-2.5">
            {NICHE_TAGS.map((t) => (
              <span
                key={t}
                data-cursor
                className="cursor-default rounded-full border-[1.5px] border-green bg-white px-4 py-[7px] text-[13.5px] font-semibold text-green-dark transition-all duration-250 hover:-translate-y-[3px] hover:bg-green-soft"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-[34px] flex flex-wrap gap-4">
            <a ref={btn1} href="#about" className={BTN_PINK}>get to know me ✿</a>
            <a ref={btn2} href="#contact" className={BTN_GHOST}>work with me ♡</a>
          </div>

          <Reveal delay={120} className="mt-11 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                data-cursor
                className="group rounded-[20px] border-2 border-pink bg-white px-2 py-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-green hover:shadow-green"
              >
                <CountUp
                  value={s.value}
                  decimals={s.decimals ?? 0}
                  suffix={s.suffix}
                  className="block font-serif text-[clamp(20px,2.6vw,30px)] text-pink-deep transition-colors duration-300 group-hover:text-green-deep"
                />
                <small className="text-xs font-semibold uppercase tracking-[0.6px] text-[#9a7788]">{s.label}</small>
              </div>
            ))}
          </Reveal>
        </Reveal>

        <Reveal delay={240}>
          <div
            ref={tiltRef}
            className="relative rounded-[40px] border-[3px] border-green bg-[linear-gradient(160deg,var(--color-green-pale)_0%,#FDFFFD_100%)] px-[34px] py-10 shadow-green max-lg:mx-auto max-lg:w-full max-lg:max-w-[460px]"
          >
            <div ref={photoWrapRef} data-cursor title="click me! 🌷" onClick={popSparks} className="relative mx-auto w-[min(300px,74%)]">
              <Photo
                eager
                src={hero}
                alt="meyta — content creator"
                className="aspect-[4/5] cursor-pointer rounded-[28px] border-[6px] border-white shadow-[0_24px_50px_rgba(232,70,124,0.3)]"
              />

              {/* badge melingkar berputar */}
              <div className="absolute -left-[30px] -bottom-[26px] z-[4] h-[118px] w-[118px] max-lg:-left-[10px] max-lg:bottom-[-16px] max-lg:h-24 max-lg:w-24">
                <div className="absolute inset-[7%] rounded-full bg-pink-deep shadow-[0_12px_26px_rgba(196,46,103,0.4)]" />
                <svg viewBox="0 0 100 100" className="absolute inset-0 z-[2] h-full w-full animate-spin-slow">
                  <defs>
                    <path id="cp" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                  </defs>
                  <text fill="#fff" fontSize="9.2" letterSpacing="2.4" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase' }}>
                    <textPath href="#cp">✿ meyta's little world ✿ since 2021 ✿ </textPath>
                  </text>
                </svg>
                <span className="absolute inset-0 z-[3] grid place-items-center text-[34px]">🌷</span>
              </div>

              {/* chip melayang */}
              <div className={`${CHIP} -right-2 -top-4 lg:-right-14`}>♡ 170K besties</div>
              <div className={`${CHIP} -left-2 top-[42%] border-green text-green-dark [animation-delay:-1.5s] lg:-left-[66px]`}>★ 4.9 brand rating</div>
              <div className={`${CHIP} -bottom-2.5 -right-[22px] [animation-delay:-3s]`}>✿ Ponorogo</div>

              {sparks.map((s) => (
                <span
                  key={s.id}
                  className="pointer-events-none absolute z-[9] animate-pop-heart text-[22px]"
                  style={{ left: s.left, top: s.top, animationDelay: `${s.delay}s` }}
                >
                  {s.char}
                </span>
              ))}
            </div>

            <div className="mt-9 flex items-center gap-3.5 rounded-[22px] border-2 border-green bg-white p-5">
              <div className="grid h-[46px] w-[46px] flex-none place-items-center rounded-full bg-green-soft text-[21px]">☕</div>
              <div>
                <small className="text-[11.5px] font-bold uppercase tracking-[1.5px] text-[#5e8a6d]">now collabing with</small>
                <br />
                <b className="text-green-dark">Matcha Muse — spring campaign</b>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-[26px] left-1/2 z-[3] -translate-x-1/2 animate-bob text-xs uppercase tracking-[3px] text-pink-dark [animation-duration:2.4s]">
        scroll ♡
      </div>
    </section>
  );
}
