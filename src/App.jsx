import { useCallback, useRef, useState } from 'react';
import About from './components/About';
import BrandWork from './components/BrandWork';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { LogoMarquee, MarqueeStrip } from './components/Marquee';
import { Lightbox, VideoModal } from './components/Modals';
import Navbar from './components/Navbar';
import Niche from './components/Niche';
import ScrollProgress from './components/ScrollProgress';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Toast from './components/Toast';
import ToTop from './components/ToTop';
import Videos from './components/Videos';
import { STRIP_A, STRIP_B } from './data';

export default function App() {
  const [video, setVideo] = useState(null); // video di modal preview
  const [work, setWork] = useState(null);   // project di lightbox
  const [toast, setToast] = useState(null); // { msg, ok }
  const [service, setService] = useState(''); // prefill service dari "book now"
  const [pulseKey, setPulseKey] = useState(0);
  const toastTimer = useRef(null);

  const showToast = useCallback((msg, ok = true) => {
    setToast({ msg, ok });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3400);
  }, []);

  /* tombol book now → isi form, scroll ke kontak, form berdenyut */
  const book = (name) => {
    setService(name);
    setPulseKey((k) => k + 1);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <MarqueeStrip items={STRIP_A} />
        <About />
        <Niche />
        <Videos onOpen={setVideo} />
        <BrandWork onOpen={setWork} />
        <MarqueeStrip items={STRIP_B} green />
        <LogoMarquee />
        <Services onBook={book} />
        <Testimonials />
        <Contact service={service} pulseKey={pulseKey} showToast={showToast} />
      </main>

      <Footer />
      <ToTop />
      <Toast toast={toast} />

      {video && <VideoModal video={video} onClose={() => setVideo(null)} />}
      {work && <Lightbox work={work} onClose={() => setWork(null)} />}
    </>
  );
}
