export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.5, ease: easeOut },
};

export function staggerDelay(index: number, step = 0.06) {
  return { duration: 0.45, delay: index * step, ease: easeOut };
}
