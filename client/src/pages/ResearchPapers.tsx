import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { researchPapers } from "@/data/researchPapers";

export default function ResearchPapers() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />

      <section className="container-ed pt-36 md:pt-48 pb-12 md:pb-16">
        <p className="label mb-5">Research papers</p>
        <h1 className="text-[2.5rem] leading-[1.05] sm:text-5xl md:text-[3.4rem] md:leading-[1.03] font-light tracking-[-0.02em] text-ink max-w-[18ch]">
          Research papers from my Master’s program
        </h1>
        <p className="mt-8 max-w-[56ch] text-lg md:text-xl font-light leading-relaxed text-ink-2">
          During my Master&apos;s program, I completed a series of research papers exploring topics across design, technology, innovation, leadership, business transformation, and fintech. These projects involved conducting literature reviews, analyzing industry trends, evaluating emerging technologies, and developing evidence-based recommendations. The experience strengthened my ability to approach complex problems with curiosity, critical thinking, and a strong research foundation that continues to influence my work as a product designer.
        </p>
      </section>

      <section className="container-ed pb-24 md:pb-32">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {researchPapers.map((paper) => (
            <article key={paper.title} className="group overflow-hidden rounded-[1px] border border-line bg-paper-2 shadow-sm transition-colors duration-300 hover:bg-paper">
              <a
                href={paper.href}
                target="_blank"
                rel="noreferrer"
                className="block h-full"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={paper.media}
                    alt={paper.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[12px] uppercase tracking-[0.18em] text-ink-3 mb-3">
                    {paper.category}
                  </div>
                  <h2 className="text-xl md:text-2xl font-medium tracking-tight text-ink leading-snug">
                    {paper.title}
                  </h2>
                  <p className="mt-4 text-[14px] leading-relaxed text-ink-2">
                    {paper.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-[13px] font-medium text-ink-3">
                    <span>Read paper</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
