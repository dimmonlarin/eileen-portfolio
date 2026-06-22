/*
  CASE STUDY, outcome-first, scannable, 3–4 key sections.
  Structure: hero (eyebrow + title + lead) · stat band · meta row · cover ·
  numbered sections (problem / insights / decisions / outcome) · quote · next.
  Inter only; hairline-bordered grids; dark inversion for emphasis blocks.
*/
import { Link, useParams } from "wouter";
import { Fragment, useEffect } from "react";
import { projects, contact, type SectionBlock } from "@/data/projects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CoverMedia } from "@/components/CoverMedia";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";

export default function CaseStudy() {
  const { slug } = useParams();
  const idx = projects.findIndex((p) => p.slug === slug);
  const p = projects[idx];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!p) {
    return (
      <div className="min-h-screen bg-paper">
        <Nav />
        <div className="container-cs pt-40 pb-32 text-center">
          <h1 className="text-3xl font-light text-ink mb-6">Project not found</h1>
          <Link href="/" className="text-[14px] text-ink border-b border-ink pb-1">
            Back to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen bg-paper">
      <Nav />

      {/* hero */}
      <header className="container-cs pt-36 md:pt-44 pb-12 md:pb-16">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-[13px] text-ink-2 hover:text-ink transition-colors mb-12"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All work
        </Link>
        <p className="label mb-7">{p.eyebrow}</p>
        <h1 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-[3.4rem] md:leading-[1.05] font-light tracking-[-0.02em] text-ink max-w-[20ch]">
          {p.heroTitle} <span className="text-ink-3">{p.heroEmphasis}</span>
        </h1>
        <p className="mt-8 max-w-[52ch] text-lg md:text-xl font-light leading-relaxed text-ink-2">
          {p.lead}
        </p>
      </header>

      {p.locked ? (
        <LockedBody note={p.lockedNote} />
      ) : (
        <>
          {/* stat band */}
          {p.stats.length > 0 && (
            <section className="container-cs">
              <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-line">
                {p.stats.map((s) => (
                  <div
                    key={s.label}
                    className="border-r border-b border-line px-5 py-7 md:px-6 md:py-8"
                  >
                    <div className="text-3xl md:text-[2.5rem] font-light tracking-tight text-ink leading-none">
                      {s.value}
                    </div>
                    <div className="mt-3 text-[12px] md:text-[13px] text-ink-2 leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* meta row */}
          {p.meta.length > 0 && (
            <section className="container-cs mt-px">
              <div className="grid grid-cols-2 md:grid-cols-4 border-l border-b border-line">
                {p.meta.map((m) => (
                  <div
                    key={m.label}
                    className="border-r border-line px-5 py-5 md:px-6 md:py-6"
                  >
                    <div className="label mb-2">{m.label}</div>
                    <div className="text-[13px] md:text-[14px] text-ink leading-snug">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* cover */}
          <section className="container-cs mt-12 md:mt-16">
            <div className="aspect-[16/9] overflow-hidden bg-paper-2 shadow-none">
              <CoverMedia
                src={p.cover}
                alt={p.title}
                className="h-full w-full object-cover shadow-none border-0 block"
              />
            </div>
          </section>

          {/* sections */}
          <div className="container-cs py-16 md:py-24 space-y-20 md:space-y-28">
            {p.sections.map((s, i) => (
              <Fragment key={i}>
                <Section block={s} />
                {s.kind === "insights" && p.processArtifacts && (
                  <div className="space-y-12 md:space-y-16">
                    {p.processArtifacts.map((artifact, idx) => (
                      <ProcessArtifact key={idx} artifact={artifact} />
                    ))}
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* quote */}
          {p.quote && (
            <section className="bg-dark text-paper">
              <div className="container-cs py-20 md:py-28">
                <p className="label !text-paper/40 mb-8">In their words</p>
                <blockquote className="text-2xl md:text-[2.1rem] font-light leading-[1.32] tracking-tight text-paper max-w-[34ch]" style={{fontSize: '26px'}}>
                  &ldquo;{p.quote.text}&rdquo;
                </blockquote>
                <p className="mt-8 text-[14px] text-paper/50">— {p.quote.attr}</p>
              </div>
            </section>
          )}
        </>
      )}

      {/* next project */}
      <section className="container-cs py-16 md:py-20 border-t border-line">
        <Link href={`/work/${next.slug}`} className="group block">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="label mb-3">Next project</p>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-ink group-hover:text-ink-2 transition-colors max-w-[22ch]">
                {next.title}
              </h3>
                <p className="mt-2 text-[13px] text-ink-3">
                {next.index}, {next.company}
              </p>
            </div>
            <ArrowRight className="h-6 w-6 shrink-0 text-ink-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink" />
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
}


function ProcessArtifact({
  artifact,
}: {
  artifact: NonNullable<(typeof projects)[number]["processArtifacts"]>[number];
}) {
  const mediaArray = Array.isArray(artifact.media) ? artifact.media : [artifact.media];
  const altArray = Array.isArray(artifact.alt) ? artifact.alt : [artifact.alt];

  return (
    <section className="container-cs mt-12 md:mt-16">
      <div className="grid md:grid-cols-[240px_1fr] border border-line bg-paper">
        <div className="border-b md:border-b-0 md:border-r border-line p-6 md:p-8">
          <p className="label mb-4">Process artifact</p>
          <p className="text-[12px] uppercase tracking-[0.12em] text-ink-3 mb-3">
            {artifact.type}
          </p>
          <h2 className="text-xl md:text-2xl font-light tracking-tight text-ink leading-snug">
            {artifact.title}
          </h2>
          <p className="mt-5 text-[14px] leading-relaxed text-ink-2">
            {artifact.caption}
          </p>
        </div>
        <div>
          <div className="space-y-4">
            {mediaArray.map((media, idx) => {
              const isVideo = /\.(mov|mp4|webm|ogg)$/i.test(media);
              return (
                <div key={idx}>
                  {isVideo ? (
                    <video
                      src={media}
                      aria-label={altArray[idx] || ""}
                      className="w-full border border-line bg-white"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={media}
                      alt={altArray[idx] || ""}
                      className="w-full border border-line bg-white"
                      loading="lazy"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section renderer ── */
function Section({ block }: { block: SectionBlock }) {
  if (block.kind === "outcome") {
    return (
      <section>
        <SectionHead label={block.label} heading={block.heading} body={block.body} />
        <div className="mt-10 grid sm:grid-cols-3 border-l border-t border-line">
          {block.items.map((it) => (
            <div key={it.label} className="border-r border-b border-line px-6 py-8">
              <div className="text-[2.5rem] md:text-5xl font-light tracking-tight text-ink leading-none">
                {it.value}
              </div>
              <div className="mt-4 text-[13px] text-ink-2 leading-relaxed">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.kind === "insights") {
    return (
      <section>
        <SectionHead label={block.label} heading={block.heading} body={block.body} />
        <div className="mt-10 border-t border-line">
          {block.items.map((it) => (
            <div
              key={it.stat}
              className="grid md:grid-cols-[210px_1fr] gap-3 md:gap-10 py-7 border-b border-line"
            >
              <div className="text-3xl md:text-[2.25rem] font-light tracking-tight text-ink leading-none">
                {it.stat}
              </div>
              <p className="text-[15px] md:text-base text-ink-2 leading-relaxed max-w-[56ch]">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.kind === "decisions") {
    return (
      <section>
        <SectionHead label={block.label} heading={block.heading} body={block.body} />
        <div className="mt-10 space-y-px">
          {block.items.map((it, i) => (
            <div
              key={it.title}
              className="grid md:grid-cols-[48px_1fr] gap-4 md:gap-8 border border-line p-6 md:p-8"
            >
              <div className="text-[14px] font-medium text-ink-3 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-medium text-ink mb-3">
                  {it.title}
                </h4>
                <p className="text-[15px] text-ink-2 leading-relaxed max-w-[60ch]">
                  {it.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // text
  return (
    <section>
      <SectionHead label={block.label} heading={block.heading} body={block.body} />
    </section>
  );
}

function SectionHead({
  label,
  heading,
  body,
}: {
  label: string;
  heading: string;
  body: string[];
}) {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
      <div>
        <p className="label md:sticky md:top-24">{label}</p>
      </div>
      <div>
        <h2 className="text-2xl md:text-[2rem] font-light tracking-tight text-ink leading-[1.2] max-w-[26ch]">
          {heading}
        </h2>
        {body.length > 0 && (
          <div className="mt-6 space-y-5 max-w-[62ch]">
            {body.map((para, i) => (
              <p key={i} className="text-[15px] md:text-base text-ink-2 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Locked / NDA body ── */
function LockedBody({ note }: { note?: string }) {
  return (
    <section className="container-cs py-12 md:py-16">
      <div className="border border-line bg-paper-2/40 px-8 py-16 md:px-16 md:py-24 text-center">
        <span className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-line mb-6">
          <Lock className="h-5 w-5 text-ink-2" />
        </span>
        <h2 className="text-xl md:text-2xl font-light text-ink mb-3">
          This case study is under NDA
        </h2>
        <p className="text-[15px] text-ink-2 max-w-[44ch] mx-auto leading-relaxed">
          {note ?? "Details available on request."} I'm happy to walk through the
          work, my role, and the impact in a conversation.
        </p>
    
      </div>
    </section>
  );
}
