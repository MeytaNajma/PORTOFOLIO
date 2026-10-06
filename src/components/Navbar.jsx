import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data';
import { useMagnetic } from '../hooks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const ctaRef = useMagnetic();

  /* navbar scrolled + scrollspy */
  useEffect(() => {
    const onScroll = () => {
      const st = scrollY;
      setScrolled(st > 40);
      let current = 'home';
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && st + 130 >= el.offsetTop) current = id;
      }
      setActive(current);
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  }, []);

  const linkCls = (id) =>
    `relative rounded-xl py-1 text-[15px] font-medium text-ink transition-colors
     after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-0 after:rounded-full after:bg-pink-deep after:transition-all after:duration-300
     hover:after:w-full ${active === id ? 'after:w-full' : ''}
     max-lg:px-3.5 max-lg:py-3 max-lg:hover:bg-pink-pale ${active === id ? 'max-lg:bg-pink-pale' : ''}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] flex items-center justify-between px-8 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 py-3 shadow-[0_6px_24px_rgba(58,46,56,0.08)] backdrop-blur-xl' : 'py-[22px]'
      }`}
    >
      <a href="#home" className="font-serif text-[26px] font-bold text-ink no-underline">
        meyta <span className="text-pink-deep">✿</span>
      </a>

      <nav
        className={`flex lg:gap-6
          max-lg:fixed max-lg:inset-x-4 max-lg:top-[74px] max-lg:z-[999] max-lg:flex-col max-lg:gap-1 max-lg:rounded-[22px] max-lg:bg-white max-lg:p-[18px]
          max-lg:shadow-[0_24px_60px_rgba(58,46,56,0.18)] max-lg:transition-all max-lg:duration-300
          ${open ? 'max-lg:translate-y-0 max-lg:opacity-100' : 'max-lg:pointer-events-none max-lg:-translate-y-3.5 max-lg:opacity-0'}`}
      >
        {NAV_LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className={linkCls(l.id)}>
            {l.label}
          </a>
        ))}
      </nav>

      <a
        ref={ctaRef}
        href="#contact"
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-pink-deep px-[22px] py-[11px] text-sm font-bold text-white no-underline transition-all duration-250 hover:-translate-y-0.5 hover:bg-green-deep max-lg:hidden"
      >
        work with me ♡
      </a>

      <button
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
        className="hidden cursor-pointer flex-col gap-[5px] border-none bg-none p-1.5 max-lg:flex"
      >
        <span className={`h-[3px] w-[26px] rounded-full bg-ink transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`h-[3px] w-[26px] rounded-full bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`h-[3px] w-[26px] rounded-full bg-ink transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>
    </header>
  );
}
