import { useEffect, useState } from 'react';

export default function ToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(scrollY > 520);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      data-cursor
      aria-label="Back to top"
      onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-[26px] right-[26px] z-[900] h-[52px] w-[52px] cursor-pointer rounded-full border-none bg-[linear-gradient(120deg,var(--color-pink),var(--color-pink-deep))] text-xl text-white shadow-pink transition-all duration-350 hover:-translate-y-[5px] hover:scale-[1.06] ${
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      ↑
    </button>
  );
}
