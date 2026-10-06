import { BRANDS_A, BRANDS_B } from '../data';

/* strip miring berjalan (pink / hijau) */
export function MarqueeStrip({ items, green = false }) {
  return (
    <div
      className={`relative z-[5] overflow-hidden py-[15px] text-white ${
        green
          ? 'rotate-[1.2deg] scale-[1.03] bg-green-deep shadow-[0_10px_30px_rgba(31,122,69,0.35)]'
          : '-rotate-[1.4deg] scale-[1.03] bg-pink-deep shadow-[0_10px_30px_rgba(232,70,124,0.35)]'
      }`}
    >
      <div className="flex w-max animate-scrollx gap-11 whitespace-nowrap font-serif text-[19px] italic tracking-wide hover:[animation-play-state:paused]">
        {[...items, ...items].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* dua baris pil brand berjalan berlawanan arah */
export function LogoMarquee() {
  return (
    <div className="overflow-hidden bg-cream py-[70px]">
      <h3 className="text-center font-serif text-2xl">previously worked with ♡</h3>
      <p className="mx-auto mb-9 max-w-[600px] px-6 text-center text-[#8a6e7c]">48 brands trusted my storytelling — here are a few</p>

      <div className="mb-[18px] flex w-max animate-scrollx gap-[18px] hover:[animation-play-state:paused]">
        {[...BRANDS_A, ...BRANDS_A].map((b, i) => (
          <span
            key={i}
            data-cursor
            className="cursor-default whitespace-nowrap rounded-full border-2 border-pink bg-white px-[30px] py-[13px] font-serif text-lg transition-all duration-300 hover:scale-[1.06] hover:bg-pink hover:text-white"
          >
            {b}
          </span>
        ))}
      </div>
      <div className="flex w-max animate-scrollx gap-[18px] [animation-direction:reverse] [animation-duration:32s] hover:[animation-play-state:paused]">
        {[...BRANDS_B, ...BRANDS_B].map((b, i) => (
          <span
            key={i}
            data-cursor
            className="cursor-default whitespace-nowrap rounded-full border-2 border-green bg-white px-[30px] py-[13px] font-serif text-lg text-green-dark transition-all duration-300 hover:scale-[1.06] hover:bg-green hover:text-white"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
