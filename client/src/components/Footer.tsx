/*
  Footer, quiet contact close on the dark canvas.
  Inter only, hairline borders, restrained. Outcome-first tone, no filler.
*/
import { contact, resumeUrl } from "@/data/projects";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-paper">
      <div className="container-ed py-20 md:py-28">
        <p className="label !text-paper/40 mb-8">Contact</p>
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-5xl font-light leading-[1.08] tracking-tight text-paper">
              Open to discuss work opportunities.
            </h2>
          </div>
          <div className="md:col-span-5 flex flex-col gap-4 md:items-end">
            <a
              href={`mailto:${contact.email}`}
              className="text-lg md:text-xl font-medium text-paper border-b border-paper/30 hover:border-paper transition-colors pb-1"
            >
              {contact.email}
            </a>
            <div className="flex gap-6 text-[13px] text-paper/60">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-paper transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href={resumeUrl}
                download
                className="hover:text-paper transition-colors"
              >
                Résumé ↓
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8 border-t border-paper/10">
          <p className="text-[12px] text-paper/40">© {year} Eileen Yu</p> <p className="text-[12px] text-paper/30 mt-1"> ☕ Built with coffee and AI. AI wrote some code—I made sure it looked good. </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[12px] text-paper/40 hover:text-paper transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
