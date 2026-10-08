import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState, type PointerEvent } from "react";

interface SystemMapProps {
  reducedMotion: boolean | null;
}

type NodeId = "React" | "API" | "Laravel" | "PHP";

const nodes: Array<{ id: NodeId; x: number; y: number }> = [
  { id: "React", x: 16, y: 23 },
  { id: "Laravel", x: 20, y: 71 },
  { id: "API", x: 78, y: 24 },
  { id: "PHP", x: 76, y: 74 },
];

const edges = nodes.map((node) => ({ ...node, x1: 50, y1: 50 }));

export default function SystemMap({ reducedMotion }: SystemMapProps) {
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<NodeId | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const motionDisabled = Boolean(reducedMotion || prefersReducedMotion);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 20, mass: 0.5 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 20, mass: 0.5 });
  const rotateX = useTransform(smoothY, [-1, 1], [2.5, -2.5]);
  const rotateY = useTransform(smoothX, [-1, 1], [-3, 3]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (motionDisabled || event.pointerType === "touch") return;
    const bounds = visualRef.current?.getBoundingClientRect();
    if (!bounds) return;
    pointerX.set((event.clientX - bounds.left) / bounds.width * 2 - 1);
    pointerY.set((event.clientY - bounds.top) / bounds.height * 2 - 1);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <m.div
      ref={visualRef}
      className="hero-network"
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionDisabled ? 0 : 0.9, delay: motionDisabled ? 0 : 0.45, ease: "easeOut" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      role="img"
      aria-label="Mapa de sistemas com ligações entre React, Laravel, API e PHP"
    >
      <div className="network-caption"><span>System map</span><span>NM / 01</span></div>
      <svg className="network-lines" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
        {edges.map((edge) => {
          const isActive = activeNode === edge.id;
          return (
            <g key={edge.id}>
              <m.line
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x}
                y2={edge.y}
                className={isActive ? "is-active" : ""}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: activeNode && !isActive ? 0.18 : 0.58 }}
                transition={{ duration: motionDisabled ? 0 : 0.75, delay: motionDisabled ? 0 : 0.6 }}
              />
              {!motionDisabled ? (
                <m.circle
                  r="0.65"
                  className={isActive ? "data-pulse is-active" : "data-pulse"}
                  initial={{ opacity: 0 }}
                  animate={{ cx: [edge.x1, edge.x, edge.x1], cy: [edge.y1, edge.y, edge.y1], opacity: [0, 1, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: 0.4 + edge.x / 100, ease: "linear" }}
                />
              ) : null}
            </g>
          );
        })}
      </svg>
      <m.div
        className="network-core"
        animate={motionDisabled ? undefined : { scale: [1, 1.04, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="core-ring core-ring-one" aria-hidden="true" />
        <span className="core-ring core-ring-two" aria-hidden="true" />
        <span className="core-dot" aria-hidden="true" />
        <b>SYSTEMS</b>
      </m.div>
      {nodes.map((node, index) => (
        <m.button
          key={node.id}
          type="button"
          className={"network-node node-" + node.id.toLowerCase() + (activeNode === node.id ? " is-active" : "")}
          style={{ left: node.x + "%", top: node.y + "%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={motionDisabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: [1, 1.025, 1] }}
          transition={{ duration: motionDisabled ? 0 : 3.6 + index * 0.45, repeat: motionDisabled ? 0 : Infinity, ease: "easeInOut", delay: motionDisabled ? 0 : 0.8 + index * 0.1 }}
          onPointerEnter={() => setActiveNode(node.id)}
          onPointerLeave={() => setActiveNode(null)}
          onFocus={() => setActiveNode(node.id)}
          onBlur={() => setActiveNode(null)}
          aria-label={"Tecnologia " + node.id}
        >
          <span className="node-point" aria-hidden="true" />
          <span>{node.id}</span>
          <span className="node-tooltip" role="tooltip">{node.id} layer</span>
        </m.button>
      ))}
      <m.div
        className="network-photo"
        initial={{ opacity: 0, y: -28, rotate: -8 }}
        animate={{ opacity: 0.82, y: 0, rotate: 3 }}
        whileHover={{ rotateX: -4, rotateY: 5, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 150, damping: 13, delay: motionDisabled ? 0 : 0.75 }}
        style={{ transformPerspective: 400 }}
      >
        <img src="/portofolio/Nelson%20Matsinhe%20Programador.webp" alt="" width="4162" height="3264" />
      </m.div>
      <div className="network-footnote">Interfaces / logic / delivery</div>
    </m.div>
  );
}
