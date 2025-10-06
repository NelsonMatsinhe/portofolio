import { siteInfo } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 surface-gradient dark:from-gray-900 dark:to-gray-800 transition-colors overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <h3 className="text-4xl sm:text-5xl font-extrabold gradient-text">Contato</h3>
            <p className="mt-4 text-lg text-on-surface dark:text-on-dark leading-relaxed max-w-2xl mx-auto">
              Tem um projeto ou oportunidade? Envie sua mensagem e responderei em breve.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <form
            action={`mailto:${siteInfo.email}`}
            method="post"
            encType="text/plain"
            className="grid gap-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md ring-1 ring-border dark:ring-gray-700 p-6 max-w-3xl mx-auto"
          >
            <div>
              <label className="text-sm font-medium text-on-surface dark:text-on-dark">Nome</label>
              <input
                name="name"
                placeholder="Seu nome"
                required
                className="mt-1 p-3 w-full border border-border dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-on-surface dark:text-on-dark">Email</label>
              <input
                name="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="mt-1 p-3 w-full border border-border dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-on-surface dark:text-on-dark">Mensagem</label>
              <textarea
                name="message"
                placeholder="Como posso ajudar?"
                required
                rows={6}
                className="mt-1 p-3 w-full border border-border dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              <button
                type="submit"
                className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg shadow hover:opacity-90 transition"
              >
                Enviar por e-mail
              </button>
              <a
                href={siteInfo.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-lg shadow bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
