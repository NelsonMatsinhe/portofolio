import { m, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-20);
  const y = useMotionValue(-20);
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.2 });
  const size = useTransform(() => hovering ? 28 : 9);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(finePointer.matches && !reducedMotion);
    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    return () => finePointer.removeEventListener("change", updateEnabled);
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const over = (event: PointerEvent) => {
      const target = event.target;
      setHovering(target instanceof Element && Boolean(target.closest("a, button")));
    };
    const out = () => setHovering(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    window.addEventListener("pointerout", out);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerout", out);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  return <m.span className="custom-cursor" aria-hidden="true" style={{ x: springX, y: springY, width: size, height: size }} />;
}
