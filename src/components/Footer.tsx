import { siteInfo } from "../data";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700"> {/* Rodapé com contraste consistente */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <Reveal>
          <div className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} {siteInfo.name}. Todos os direitos reservados.</div>
        </Reveal>
        <Reveal delayMs={80}>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href={siteInfo.social.github} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">GitHub</a>
            <a href={siteInfo.social.linkedin} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">LinkedIn</a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}