import { m } from "motion/react";

interface SplitTextProps {
  text: string;
}

const splitVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const letterVariants = {
  hidden: { y: "110%" },
  visible: { y: 0 },
};

export default function SplitText({ text }: SplitTextProps) {
  const words = text.split(" ");
  return (
    <m.span className="split-text" variants={splitVariants} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span className="split-word" key={word + wordIndex} aria-hidden="true">
          {Array.from(word).map((letter, index) => (
            <span className="split-letter-mask" key={letter + index}>
              <m.span className="split-letter" variants={letterVariants}>{letter}</m.span>
            </span>
          ))}
          {wordIndex < words.length - 1 ? <span className="split-space"> </span> : null}
        </span>
      ))}
    </m.span>
  );
}
