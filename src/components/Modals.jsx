import { useEffect, useState } from 'react';
import { Photo } from './ui';

/* kerangka modal: backdrop blur + ESC + klik luar untuk tutup */
function ModalShell({ onClose, children }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[2000] grid place-items-center bg-ink/55 p-5 backdrop-blur-[7px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-[560px] animate-modal-in overflow-hidden rounded-[28px] bg-white">
        <button
          data-cursor
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3.5 top-3.5 z-[5] h-10 w-10 cursor-pointer rounded-full border-none bg-white text-[17px] shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-all duration-300 hover:rotate-90 hover:bg-pink hover:text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

/* ================= MODAL VIDEO ================= */
export function VideoModal({ video, onClose }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(false);
  }, [video]);

  return (
    <ModalShell onClose={onClose}>
      <div className="relative h-[270px]">
        <Photo src={video.cover} alt={video.title} fill eager />

        <button
          data-cursor
          aria-label="Play"
          onClick={() => setPlaying((p) => !p)}
          className="group absolute inset-0 z-[4] grid cursor-pointer place-items-center border-none bg-ink/30"
        >
          <span className="grid h-[72px] w-[72px] place-items-center rounded-full bg-white transition-transform duration-300 group-hover:scale-110">
            {playing ? (
              <span className="flex gap-[14px]">
                <span className="h-[26px] w-2 bg-pink-deep" />
                <span className="h-[26px] w-2 bg-pink-deep" />
              </span>
            ) : (
              <span className="ml-1.5 h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-pink-deep" />
            )}
          </span>
        </button>

        <div className={`absolute bottom-[18px] left-[22px] z-[5] flex h-[26px] items-end gap-[5px] transition-opacity ${playing ? 'opacity-100' : 'opacity-0'}`}>
          <span className="w-[6px] animate-eq rounded-sm bg-white" />
          <span className="w-[6px] animate-eq rounded-sm bg-white [animation-delay:0.2s]" />
          <span className="w-[6px] animate-eq rounded-sm bg-white [animation-delay:0.4s]" />
        </div>
      </div>

      <div className="px-[30px] pb-8 pt-7">
        <h3 className="mb-1.5 text-2xl">{video.title}</h3>
        <div className="mb-3.5 flex gap-3.5 text-[13.5px] text-[#9a7788]">
          <span>⏱ {video.dur}</span>
          <span>👁 {video.views}</span>
        </div>
        <p className="text-[15px] text-[#63506a]">{video.desc}</p>
        <div className="mt-[18px] rounded-[14px] border-[1.5px] border-dashed border-green-deep bg-green-pale px-4 py-3 text-[13px] text-green-dark">
          💡 demo preview — ganti bagian ini dengan embed YouTube/TikTok videomu yang asli ya.
        </div>
      </div>
    </ModalShell>
  );
}

/* ================= LIGHTBOX BRAND WORK ================= */
export function Lightbox({ work, onClose }) {
  return (
    <ModalShell onClose={onClose}>
      <Photo src={work.cover} alt={work.title} className="h-[260px]" eager />

      <div className="px-[30px] pb-8 pt-7">
        <span className="mb-3 inline-block rounded-full border-2 border-green bg-green-pale px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-green-dark">
          {work.catLabel}
        </span>
        <h3 className="mb-1.5 text-2xl">{work.title}</h3>
        <p className="text-[15px] text-[#63506a]">{work.desc}</p>
        <ul className="mt-3.5 list-none">
          {work.results.map((r) => (
            <li key={r} className="relative py-[5px] pl-[26px] text-sm text-[#5c6d5f] before:absolute before:left-0 before:text-pink-deep before:content-['✿']">
              {r}
            </li>
          ))}
        </ul>
      </div>
    </ModalShell>
  );
}
