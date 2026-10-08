import { m, useMotionValue, useSpring } from "motion/react";
import { useRef, type PointerEvent, type ReactNode } from "react";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  primary?: boolean;
}

export default function MagneticButton({ href, children, primary = false }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 190, damping: 16, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 190, damping: 16, mass: 0.25 });

  function handleMove(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType === "touch") return;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const distanceX = event.clientX - (bounds.left + bounds.width / 2);
    const distanceY = event.clientY - (bounds.top + bounds.height / 2);
    const radius = Math.max(bounds.width, bounds.height, 80);
    x.set(Math.max(-8, Math.min(8, distanceX / radius * 8)));
    y.set(Math.max(-8, Math.min(8, distanceY / radius * 8)));
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.a
      ref={ref}
      href={href}
      className={"hero-cta magnetic-button " + (primary ? "hero-cta-primary" : "")}
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      <span className="magnetic-label">{children}</span>
      <span className="magnetic-arrow" aria-hidden="true">↗</span>
    </m.a>
  );
}
