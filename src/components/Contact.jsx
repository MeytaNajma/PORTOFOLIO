import { useEffect, useRef, useState } from 'react';
import { CONTACT_SELECT_OPTIONS } from '../data';
import { spawnConfetti } from '../lib/confetti';
import { CONTAINER, Reveal, SECTION, ZONE_PINK } from './ui';

const FIELD =
  'w-full rounded-2xl border-2 border-pink-soft bg-pink-pale px-[18px] py-3.5 font-sans text-[15px] text-ink outline-none transition-all duration-300 focus:border-pink-deep focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,126,185,0.18)]';
const LABEL = 'mb-[7px] block text-[12.5px] font-bold uppercase tracking-[1px] text-[#a87a90]';

export default function Contact({ service, pulseKey, showToast }) {
  const [fields, setFields] = useState({ name: '', email: '', msg: '' });
  const [selected, setSelected] = useState('');
  const [pulse, setPulse] = useState(false);
  const firstPulse = useRef(true);

  /* sinkron: tombol "book now" mengisi service otomatis + form berdenyut */
  useEffect(() => {
    if (service) setSelected(service);
  }, [service]);

  useEffect(() => {
    if (firstPulse.current) {
      firstPulse.current = false;
      return;
    }
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 2600);
    return () => clearTimeout(t);
  }, [pulseKey]);

  const set = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const name = fields.name.trim();
    const email = fields.email.trim();
    const msg = fields.msg.trim();
    if (!name || !email || !msg) return showToast('✿ isi nama, email & pesan dulu ya ♡', false);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showToast('✿ email-nya belum valid ya ♡', false);
    showToast(`✿ terkirim! makasih ${name} — i'll reply within 24 hours ♡`);
    spawnConfetti();
    setFields({ name: '', email: '', msg: '' });
  };

  return (
    <section id="contact" className={`${SECTION} ${ZONE_PINK}`}>
      <div className={CONTAINER}>
        <div className="grid items-start gap-[50px] lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <span className="mb-[18px] inline-block rounded-full border-2 border-pink bg-white px-5 py-2 text-[12.5px] font-bold uppercase tracking-[2.5px] text-pink-dark">
              🌿 get in touch
            </span>
            <h2 className="mb-[18px] mt-[18px] text-[clamp(30px,4vw,44px)]">
              slide into my <em>inbox</em> ♡
            </h2>
            <p className="mb-[26px] text-[#7a5566]">
              got a campaign, a product, or just a dreamy idea? tell me everything — i usually reply within 24 hours (unless i'm on a matcha run 🍵)
            </p>

            <a
              href="mailto:hello@meyta.world"
              className="mb-3.5 flex items-center gap-3.5 rounded-[22px] border-2 border-pink bg-white px-5 py-4 text-ink no-underline transition-all duration-300 hover:translate-x-1.5 hover:border-pink-deep hover:shadow-pink"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-[14px] bg-pink-soft text-xl">✉️</span>
              <span>
                <small className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#a87a90]">email</small>
                <br />
                <b>hello@meyta.world</b>
              </span>
            </a>
            <div className="mb-3.5 flex items-center gap-3.5 rounded-[22px] border-2 border-pink bg-white px-5 py-4 transition-all duration-300 hover:translate-x-1.5 hover:border-pink-deep hover:shadow-pink">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-[14px] bg-pink-soft text-xl">📍</span>
              <span>
                <small className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#a87a90]">based in</small>
                <br />
                <b>jakarta, indonesia 🌸 (works worldwide)</b>
              </span>
            </div>

            <div className="mt-[22px] flex flex-wrap gap-3">
              <a href="#" data-cursor title="Instagram" className="grid h-[50px] w-[50px] place-items-center rounded-2xl border-2 border-green bg-white text-[21px] no-underline transition-all duration-300 hover:-translate-y-[5px] hover:-rotate-6 hover:bg-green">📷</a>
              <a href="#" data-cursor title="TikTok" className="grid h-[50px] w-[50px] place-items-center rounded-2xl border-2 border-green bg-white text-[21px] no-underline transition-all duration-300 hover:-translate-y-[5px] hover:-rotate-6 hover:bg-green">🎵</a>
              <a href="#" data-cursor title="YouTube" className="grid h-[50px] w-[50px] place-items-center rounded-2xl border-2 border-green bg-white text-[21px] no-underline transition-all duration-300 hover:-translate-y-[5px] hover:-rotate-6 hover:bg-green">▶️</a>
              <a href="#" data-cursor title="Pinterest" className="grid h-[50px] w-[50px] place-items-center rounded-2xl border-2 border-green bg-white text-[21px] no-underline transition-all duration-300 hover:-translate-y-[5px] hover:-rotate-6 hover:bg-green">📌</a>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className={`rounded-[28px] border-2 border-pink bg-white p-[34px] pt-[38px] shadow-pink ${pulse ? 'animate-pulse-card' : ''}`}
          >
            <form onSubmit={submit} noValidate>
              <h3 className="mb-[22px] text-2xl">send a little hello ✿</h3>

              <div className="mb-[18px] grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                <div>
                  <label htmlFor="cfName" className={LABEL}>your name</label>
                  <input id="cfName" type="text" value={fields.name} onChange={set('name')} placeholder="your cute brand name" className={FIELD} />
                </div>
                <div>
                  <label htmlFor="cfEmail" className={LABEL}>email</label>
                  <input id="cfEmail" type="email" value={fields.email} onChange={set('email')} placeholder="you@brand.com" className={FIELD} />
                </div>
              </div>

              <div className="mb-[18px]">
                <label htmlFor="cfService" className={LABEL}>service</label>
                <select id="cfService" value={selected} onChange={(e) => setSelected(e.target.value)} className={FIELD}>
                  {CONTACT_SELECT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              <div className="mb-[18px]">
                <label htmlFor="cfMsg" className={LABEL}>message</label>
                <textarea id="cfMsg" value={fields.msg} onChange={set('msg')} placeholder="tell me about your brand, your goals & your prettiest ideas..." className={`${FIELD} min-h-[130px] resize-y`} />
              </div>

              <button
                type="submit"
                data-cursor
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--color-pink),var(--color-pink-deep))] px-[30px] py-4 text-base font-bold text-white transition-all duration-250 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-pink"
              >
                send message ♡
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
