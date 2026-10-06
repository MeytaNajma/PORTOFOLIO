import { NICHES } from '../data';
import { CONTAINER, Photo, Reveal, SECTION, SecHead, ZONE_PINK } from './ui';

export default function Niche() {
  return (
    <section id="niche" className={`${SECTION} ${ZONE_PINK}`}>
      <div className={CONTAINER}>
        <SecHead
          eyebrow="✿ content niche"
          title={<>the soft corners i call <em>home</em></>}
          sub="four worlds i create in — all soft, all pretty, all me ♡"
        />

        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-4">
          {NICHES.map((n, i) => (
            <Reveal
              key={n.num}
              delay={i * 120}
              className="overflow-hidden rounded-[28px] border-2 border-pink-soft bg-white transition-all duration-350 hover:-translate-y-2.5 hover:border-pink-deep hover:shadow-pink"
            >
              <Photo src={n.img} alt={n.alt} className="aspect-[5/4]" />
              <div className="relative px-[22px] pb-[26px] pt-[22px]">
                <span className="absolute right-[18px] top-2.5 font-serif text-[40px] font-bold text-pink-soft">{n.num}</span>
                <h3 className="mb-2 mt-2.5 text-[19px]">{n.title}</h3>
                <p className="text-[13.5px] text-[#7a5566]">{n.desc}</p>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {n.tags.map((t) => (
                    <span key={t} className="rounded-full border border-green bg-green-pale px-2.5 py-1 text-[11px] font-bold text-green-dark">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
