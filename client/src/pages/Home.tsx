/*
  HOME, Reference-driven editorial portfolio.
  Sections: minimal hero · selected work (bordered card grid) · dark about strip (stat list).
  Inter only; hierarchy via weight + whitespace; hairline borders are the structure.
*/
import { Link } from "wouter";
import { useReveal } from "@/hooks/useReveal";
import { projects, aboutIntro, aboutStats, recognitionSkills } from "@/data/projects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CoverMedia } from "@/components/CoverMedia";
import { Lock, ArrowUpRight } from "lucide-react";

export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen bg-paper">
      <Nav />

      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="container-ed pt-36 md:pt-48 pb-20 md:pb-28">
        <h1 className="reveal max-w-[20ch] text-[2.1rem] leading-[1.12] sm:text-5xl md:text-[3.65rem] md:leading-[1.06] font-light tracking-[-0.02em] text-ink">
          Designing growth and monetization products for complex business
          platforms.
        </h1>
        <p
          className="reveal mt-8 max-w-[48ch] text-lg md:text-xl text-ink-2 font-light leading-relaxed"
          data-delay="80"
        >
          Product Designer with 15+ years of design experience spanning product
          design, visual design, and creative leadership.
        </p>
      </section>

      {/* ───────────────────────── WORK ───────────────────────── */}
      <section id="work" className="container-ed pb-24 md:pb-32 scroll-mt-20">
        <div className="flex items-baseline justify-between border-b border-line pb-4 mb-px reveal">
          <h2 className="label">Selected work</h2>
          <span className="label">{projects.length} projects</span>
        </div>

        <div className="grid md:grid-cols-2 border-l border-t border-line">
          {projects.map((p, i) => (
            <WorkCard key={p.slug} p={p} delay={i * 60} />
          ))}
        </div>
      </section>

      {/* ───────────────────────── ABOUT (dark) ───────────────────────── */}
      <section id="about" className="bg-dark text-paper scroll-mt-16">
        <div className="container-ed py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
            {/* Left, intro */}
            <div className="reveal">
              <p className="label !text-paper/40 mb-8">About</p>
              <div className="space-y-6 max-w-[42ch] text-lg md:text-[1.35rem] font-light leading-relaxed text-paper/85">
                {aboutIntro.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Right, bordered stat list */}
            <div className="reveal border border-paper/15" data-delay="100">
              {aboutStats.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-6 md:gap-10 px-6 md:px-8 py-7 md:py-8 ${
                    i !== 0 ? "border-t border-paper/15" : ""
                  }`}
                >
                  <span className="shrink-0 w-16 md:w-24 text-2xl md:text-[1.75rem] font-light tracking-tight text-paper leading-none pt-0.5">
                    {s.num}
                  </span>
                  <span className="text-[14px] md:text-[15px] leading-relaxed text-paper/55">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── RECOGNITION / SKILLS ───────────────────────── */}
      <section className="bg-paper border-b border-line">
        <div className="container-ed py-14 md:py-18">
          <div className="reveal flex items-baseline justify-between border-b border-line pb-4 mb-px">
          </div>
          <div className="grid md:grid-cols-3 border-l border-line">
            {recognitionSkills.map((item) => (
              <div key={item.label} className="border-r border-b border-line px-6 py-7 md:px-8 md:py-9">
                <p className="label mb-4">{item.label}</p>
                <p className="text-[15px] leading-relaxed text-ink-2">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ── Work card ── */
function WorkCard({
  p,
  delay,
}: {
  p: (typeof projects)[number];
  delay: number;
}) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className="reveal group relative flex flex-col border-r border-b border-line bg-paper hover:bg-paper-2/50 transition-colors duration-300"
      data-delay={delay}
    >
      {/* cover */}
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
        <CoverMedia
          src={p.cover}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {p.locked && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-dark/80 backdrop-blur-sm text-paper text-[11px] font-medium tracking-wide px-2.5 py-1.5 rounded-sm">
            <Lock className="h-3 w-3" />
            {p.lockedNote}
          </span>
        )}
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[12px] font-medium tracking-wide text-ink-3">
            {p.index}, {p.company}
          </span>
          <span className="text-[12px] text-ink-3">{p.year}</span>
        </div>

        <h3 className="text-xl md:text-2xl font-normal tracking-tight text-ink leading-snug mb-3 max-w-[24ch]">
          {p.title}
        </h3>
        <p className="text-[14px] text-ink-2 leading-relaxed max-w-[46ch] mb-6">
          {p.cardSummary}
        </p>

        <div className="mt-auto flex items-center justify-between pt-5 border-t border-line">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {p.domain.map((d) => (
              <span key={d} className="text-[11px] text-ink-3">
                {d}
              </span>
            ))}
          </div>
          <ArrowUpRight className="h-4 w-4 text-ink-3 transition-all duration-300 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
