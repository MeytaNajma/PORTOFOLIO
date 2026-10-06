import { SERVICES } from '../data';
import { useTilt } from '../hooks';
import { CONTAINER, Reveal, SECTION, SecHead, ZONE_PINK } from './ui';

function ServiceCard({ s, onBook }) {
  const tiltRef = useTilt();

  return (
    <Reveal
      delay={s.popular ? 120 : 0}
      className={s.popular ? 'max-sm:scale-100' : ''}
    >
      <div
        ref={tiltRef}
        className={`relative flex h-full flex-col rounded-[28px] border-2 bg-white px-7 py-[34px] transition-[border-color,box-shadow,translate,scale] duration-350 hover:-translate-y-2.5 hover:border-pink-deep hover:shadow-pink ${
          s.popular ? 'border-pink-deep shadow-pink scale-[1.04] hover:scale-[1.04]' : 'border-pink-soft'
        }`}
      >
        {s.popular && (
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[linear-gradient(120deg,var(--color-pink),var(--color-pink-deep))] px-4 py-[7px] text-[11.5px] font-bold uppercase tracking-[1.5px] text-white">
            ✿ most popular
          </span>
        )}

        <div className="mb-[18px] grid h-[58px] w-[58px] place-items-center rounded-[18px] bg-green-soft text-[27px]">{s.icon}</div>
        <h3 className="mb-2 text-[20px]">{s.title}</h3>
        <div className="mb-4 mt-2 font-serif text-[30px] text-pink-deep">
          {s.price}
          <small className="font-sans text-[13px] text-[#9a7788]">{s.per}</small>
        </div>

        <ul className="mb-[22px] flex-1 list-none">
          {s.features.map((f) => (
            <li key={f} className="relative py-1.5 pl-[26px] text-[13.5px] text-[#63506a] before:absolute before:left-0 before:font-bold before:text-green-deep before:content-['✓']">
              {f}
            </li>
          ))}
        </ul>

        <button
          data-cursor
          onClick={() => onBook(s.name)}
          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-pink-deep px-[18px] py-[13px] text-[14.5px] font-bold text-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-green-deep"
        >
          book now ♡
        </button>
      </div>
    </Reveal>
  );
}

export default function Services({ onBook }) {
  return (
    <section id="services" className={`${SECTION} ${ZONE_PINK}`}>
      <div className={CONTAINER}>
        <SecHead
          eyebrow="✿ services for you"
          title={<>let's <em>work</em> together (pls)</>}
          sub="every collab is tailored to your brand — these are just starting points ♡"
        />

        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.name} s={s} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>
  );
}
