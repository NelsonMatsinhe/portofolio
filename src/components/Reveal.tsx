import React, { useEffect, useRef, useState, type JSX as ReactJSX } from "react";

interface RevealProps {
  children: React.ReactNode;
  as?: keyof ReactJSX.IntrinsicElements;
  className?: string;
  delayMs?: number;
}

export default function Reveal({ children, as = "div", className = "", delayMs = 0 }: RevealProps) {
  const Element = as as any;
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeout = setTimeout(() => {
              setVisible(true);
              observer.unobserve(entry.target);
            }, delayMs);
            // garantir limpeza correta
            (entry.target as any)._revealTimeout = timeout;
          }
        });
      },
      { threshold: 0.01, root: null, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);

    // Fallback: se por algum motivo não intersectar, mostrar após 1s
    const safety = setTimeout(() => setVisible(true), Math.max(1000, delayMs + 500));
    return () => {
      observer.disconnect();
      clearTimeout((el as any)._revealTimeout);
      clearTimeout(safety);
    };
  }, [delayMs]);

  return (
    <Element
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Element>
  );
}


