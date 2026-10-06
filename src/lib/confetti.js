/* hujan konfeti — dipanggil saat form terkirim */
export function spawnConfetti() {
  const colors = ['#FF7EB9', '#FFD9E8', '#7FDC9B', '#C8F0D6', '#E8467C', '#2F9E5F'];
  for (let i = 0; i < 64; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[i % colors.length];
    c.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
    c.style.animationDuration = (1.5 + Math.random() * 1.7) + 's';
    c.style.animationDelay = (Math.random() * 0.35) + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3800);
  }
}
