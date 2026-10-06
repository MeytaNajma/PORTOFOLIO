import { FOOTER_LINKS } from '../data';

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-green-dark px-6 pb-[34px] pt-[70px] text-center text-[#EAFBF0]">
      <div
        data-cursor
        className="cursor-default font-serif text-[clamp(44px,9.5vw,126px)] font-bold leading-none text-transparent transition-all duration-500 select-none [-webkit-text-stroke:2px_rgba(127,220,155,0.55)] hover:tracking-[5px] hover:text-pink hover:[-webkit-text-stroke:2px_transparent]"
      >
        @itsmeytaa
      </div>

      <div className="mt-9 mb-9 flex flex-wrap justify-center gap-[26px]">
        {FOOTER_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="text-[14.5px] text-green-soft no-underline transition-all duration-300 hover:tracking-[1px] hover:text-pink">
            {l.label}
          </a>
        ))}
      </div>

      <p className="text-[13px] text-[#7fae8f]">
        made with <b className="text-pink">♡</b> by meyta · © 2025 · where soft things hit different ✿
      </p>
    </footer>
  );
}
