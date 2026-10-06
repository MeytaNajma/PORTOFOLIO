import { useEffect, useRef } from 'react';

/* bar gradient di paling atas — lebar sesuai progres scroll */
export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      ref.current.style.width = (max ? (scrollY / max) * 100 : 0) + '%';
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return <div ref={ref} className="fixed left-0 top-0 z-[1001] h-1 w-0 bg-linear-to-r from-pink-deep to-green-deep" />;
}
