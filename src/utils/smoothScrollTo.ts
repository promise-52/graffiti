export const tabs = ['main', 'manifest', 'gallery', 'photos', 'form', 'contacts']

export function smoothScrollTo(target: HTMLElement, parent: Window | HTMLElement = window) {
  return new Promise<void>((resolve) => {
    const startY = parent instanceof Window ? parent.scrollY : parent.scrollTop;
    const targetY = target.getBoundingClientRect().top + startY - 15;
    const distance = targetY - startY;
    const duration = 200; // длительность анимации в миллисекундах
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startY, distance, duration);
      parent.scrollTo(0, run);
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