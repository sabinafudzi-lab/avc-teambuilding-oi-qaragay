function updateParallax() {
  const scrollY = window.scrollY;
  const front = document.querySelector('.parallax-front');
  const bg = document.querySelector('.parallax-bg');
  const mountains = document.querySelector('.parallax-mountains');
  
  if (front && bg && mountains) {
    // 1. Текст (передний план)
    const scale = 1 + (scrollY * 0.0012); 
    const translateY = scrollY * 0.4;
    const opacity = 1 - (scrollY * 0.002);
    
    if (opacity > -0.2) {
      front.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      front.style.opacity = Math.max(opacity, 0);
    }

    // 2. Небо (самый дальний фон, двигается медленно)
    const bgTranslateY = scrollY * 0.3;
    bg.style.transform = `translate3d(0, ${bgTranslateY}px, 0)`;

    // 3. Горы (средний план, двигаются быстрее неба, но медленнее текста)
    const mountainsTranslateY = scrollY * 0.15;
    mountains.style.transform = `translate3d(0, ${mountainsTranslateY}px, 0)`;
  }
  ticking = false;
}