import { FACTS, NOW_ROWS, POLAROIDS } from '../data';
import { useTilt } from '../hooks';
import { CONTAINER, Photo, Reveal, SECTION, SecHead, ZONE_GREEN } from './ui';

function Polaroid({ pos, tape, img, alt, cap }) {
  return (
    <figure
      data-cursor
      className={`absolute bg-white p-3 pb-[50px] shadow-[0_18px_38px_rgba(58,46,56,0.22)] transition-all duration-400 hover:z-10 hover:-translate-y-2.5 hover:rotate-0! hover:scale-[1.04] ${pos}`}
    >
      <span
        className={`absolute -top-3.5 left-1/2 z-[2] h-7 w-24 -translate-x-1/2 -rotate-4 rounded-sm backdrop-blur-[2px] ${
          tape === 'pink' ? 'bg-pink/55' : 'bg-green/55'
        }`}
      />
      <img src={img} alt={alt} loading="lazy" className="block w-full rounded-[4px] saturate-[0.95]" />
      <figcaption className="absolute inset-x-0 bottom-3 text-center font-hand text-[22px] text-[#7a5566]">{cap}</figcaption>
    </figure>
  );
}

export default function About() {
  const collageRef = useTilt();

  return (
    <section id="about" className={`${SECTION} ${ZONE_GREEN}`}>
      <div className={CONTAINER}>
        <SecHead
          zone="green"
          eyebrow="🌿 get to know me"
          title={<>the <em className="text-green-deep">girl</em> behind the camera</>}
          sub="soft life, film cameras & too much matcha — everything you need to know about meyta ♡"
        />

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal className="rounded-[28px] border-2 border-green bg-white p-[34px] pt-9 shadow-green">
              <h3 className="mb-4 text-[26px]">once upon a tuesday... ☁️</h3>
              <p className="mb-3.5 text-[15.5px] text-[#63506a]">
                hi! i'm <strong className="text-pink-deep">Meyta</strong> — 21, based in singosaren, and for the last 3 years i've been turning my soft little life
                into content that feels like a <strong className="text-pink-deep">warm hug</strong>. it all started when i posted a film photo of my morning
                coffee "for the aesthetic"... and somehow 170 thousand of you decided to stay for everything after that.
              </p>
              <p className="mb-3.5 text-[15.5px] text-[#63506a]">
                my superpower? making the <strong className="text-pink-deep">ordinary look dreamy</strong> — a slow tuesday, a matcha run in the rain, golden
                hour on the back of a motorbike. if it's soft, nostalgic and a little bit romantic, i'll turn it into a story worth stopping the scroll for.
              </p>
              <p className="mb-3.5 text-[15.5px] text-[#63506a]">
                off camera you'll find me thrifting, reloading my <strong className="text-pink-deep">film camera</strong> (roll #47 and counting), or defending
                my questionable karaoke song choices 🎤
              </p>
              <div className="mt-2 text-right font-hand text-[30px] text-green-deep">— meyta ♡</div>
            </Reveal>

            {/* kartu currently rn */}
            <Reveal delay={120} className="mt-6 rounded-[28px] bg-ink p-7 text-white shadow-pink">
              <h3 className="mb-4 text-[21px] text-pink">
                currently... <span className="font-hand text-[22px] text-green">right now, rn</span> ✿
              </h3>
              {NOW_ROWS.map((row) => (
                <div key={row.label} className="flex items-center gap-3.5 border-b border-dashed border-white/15 py-2.5 last:border-none">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-white/10 text-[22px]">{row.emoji}</span>
                  <div>
                    <small className="block text-[10.5px] font-bold uppercase tracking-[2px] text-[#b39aa6]">{row.label}</small>
                    <b className="text-[14.5px] font-medium text-[#f7e9f0]">{row.value}</b>
                  </div>
                  {row.eq && (
                    <div className="ml-auto flex h-[18px] items-end gap-[3px]">
                      <span className="w-1 animate-eq rounded-sm bg-green" />
                      <span className="w-1 animate-eq rounded-sm bg-green [animation-delay:0.2s]" />
                      <span className="w-1 animate-eq rounded-sm bg-green [animation-delay:0.4s]" />
                    </div>
                  )}
                </div>
              ))}
            </Reveal>
          </div>

          {/* kolase polaroid */}
          <Reveal delay={240}>
            <div
              ref={collageRef}
              className="relative mx-auto h-[440px] w-full max-w-[480px] transition-transform md:h-[480px] lg:h-[540px] lg:max-w-none"
            >
              {POLAROIDS.map((p) => (
                <Polaroid key={p.cap} {...p} />
              ))}
            </div>
          </Reveal>
        </div>

        {/* fun facts */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FACTS.map((f, i) => (
            <Reveal
              key={f.text}
              delay={(i % 3) * 120}
              data-cursor
              className={`flex items-center gap-3 rounded-[20px] border-2 border-pink bg-white px-5 py-4 text-[14.5px] font-semibold transition-all duration-300 hover:-translate-y-[5px] hover:rotate-0! hover:border-pink-deep hover:bg-pink-pale ${
                i % 2 === 0 ? 'odd:-rotate-[1.2deg]' : 'rotate-[1.2deg]'
              }`}
            >
              <i className="text-2xl not-italic">{f.icon}</i>
              {f.text}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
