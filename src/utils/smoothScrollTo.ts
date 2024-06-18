export const tabs = ['main', 'manifest', 'gallery', 'form', 'contacts']

export function smoothScrollTo(target: HTMLElement) {
  return new Promise<void>((resolve) => {
    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY - 15;
    const distance = targetY - startY;
    const duration = 200; // длительность анимации в миллисекундах
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startY, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        resolve(); // завершаем промис после завершения анимации
      }
    };

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animateScroll);
  });
}