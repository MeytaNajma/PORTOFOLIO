import { useState } from 'react';
import { WORKS, WORK_FILTERS } from '../data';
import { CONTAINER, Photo, Reveal, SECTION, SecHead, ZONE_GREEN } from './ui';

export default function BrandWork({ onOpen }) {
  const [filter, setFilter] = useState('all');
  const shown = WORKS.filter((w) => filter === 'all' || w.cat === filter);

  return (
    <section id="brands" className={`${SECTION} ${ZONE_GREEN}`}>
      <div className={CONTAINER}>
        <SecHead
          zone="green"
          eyebrow="🌿 brand work portfolio"
          title={<>campaigns that <em className="text-green-deep">hit different</em></>}
          sub="pretty visuals, real results — filter by collab type & click any project ♡"
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
          {WORK_FILTERS.map((f) => (
            <button
              key={f.key}
              data-cursor
              onClick={() => setFilter(f.key)}
              className={`cursor-pointer rounded-full border-2 px-[22px] py-[9px] text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                filter === f.key
                  ? 'border-green-deep bg-green-deep text-white shadow-green'
                  : 'border-green bg-white text-green-dark'
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="grid auto-rows-[190px] grid-cols-1 [grid-auto-flow:dense] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((w) => (
              <div
                key={`${filter}-${w.title}`}
                data-cursor
                onClick={() => onOpen(w)}
                className={`group relative animate-pop cursor-pointer overflow-hidden rounded-[22px] border-[5px] border-white shadow-green transition-transform duration-350 hover:scale-[1.025] ${
                  w.tall ? 'md:row-span-2' : ''
                } ${w.wide ? 'md:col-span-2' : ''}`}
              >
                <Photo src={w.img} alt={w.title} fill />

                <span className="absolute right-3.5 top-3.5 z-[3] grid h-10 w-10 place-items-center rounded-full bg-white text-[17px] text-pink-deep transition-all duration-300 group-hover:rotate-[10deg] group-hover:scale-[1.2] group-hover:bg-pink group-hover:text-white">
                  ♡
                </span>

                <div className="absolute inset-x-0 bottom-0 z-[2] bg-[linear-gradient(transparent,rgba(31,58,45,0.78))] px-[18px] pb-4 pt-12 text-white">
                  <small className="block text-[11px] uppercase tracking-[2px] opacity-85">{w.cat}</small>
                  <b className="font-serif text-lg">{w.title}</b>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
