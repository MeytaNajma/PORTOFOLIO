import { VIDEOS } from '../data';
import { CONTAINER, Photo, Reveal, SECTION, SecHead } from './ui';

export default function Videos({ onOpen }) {
  return (
    <section
      id="videos"
      className={`${SECTION} bg-[linear-gradient(180deg,var(--color-cream),var(--color-pink-pale)_40%,var(--color-cream))]`}
    >
      <div className={CONTAINER}>
        <SecHead
          eyebrow="🎬 my little films"
          title={<>stories in <em>motion</em></>}
          sub="my most-loved videos — click any of them to preview ✿"
        />

        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-4">
          {VIDEOS.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 120}
              data-cursor
              onClick={() => onOpen(v)}
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-[22px] border-[5px] border-white shadow-pink transition-all duration-350 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_28px_55px_rgba(232,70,124,0.32)]"
            >
              <Photo src={v.thumb} alt={v.title} fill />

              <div className="absolute left-1/2 top-1/2 z-[3] grid h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_10px_22px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:scale-[1.18] group-hover:bg-pink">
                <span className="ml-[5px] h-0 w-0 border-y-[11px] border-l-[17px] border-y-transparent border-l-pink-deep group-hover:border-l-white" />
              </div>

              <span className="absolute right-3 top-3 z-[3] rounded-lg bg-ink/75 px-2.5 py-[5px] text-[11.5px] font-bold text-white">{v.dur}</span>

              <div className="absolute inset-x-0 bottom-0 z-[2] bg-[linear-gradient(transparent,rgba(58,46,56,0.8))] px-4 pb-3.5 pt-[46px] text-white">
                <b className="block text-[15px]">{v.title}</b>
                <small className="text-xs opacity-85">{v.views}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
