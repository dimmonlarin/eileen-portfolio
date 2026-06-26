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
    <section className="mt-12 md:mt-16">
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
          <div className="space-y-4 w-full">
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
  if (block.kind === "impact") {
    return (
      <section>
        <SectionHead label={block.label} heading={block.heading} body={block.body} />
        <div className="mt-6 grid gap-6 md:grid-cols-[200px_1fr] md:gap-12">
          <div />
          <div className="space-y-10">
            <div className="space-y-5 max-w-[40ch]">
              <div className="text-3xl md:text-[3.5rem] leading-none font-light tracking-tight text-ink whitespace-nowrap">
                {block.highlight}
              </div>
              <p className="text-[15px] md:text-base leading-relaxed text-ink-2">
                {block.caption}
              </p>
            </div>
            <div className="rounded-sm border border-line bg-paper p-6">
              <p className="label mb-5">{block.subheading}</p>
              <ul className="space-y-4 text-[15px] md:text-base text-ink-2 leading-relaxed">
                {block.bullets.map((bullet) => (
                  <li key={bullet} className="border-b border-line pb-4 last:border-b-0 last:pb-0">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (block.kind === "compare") {
    return (
      <section>
        <SectionHead label={block.label} heading={block.heading} body={block.body} />
        <div className="mt-10">
          <div className="mt-10 grid gap-10 xl:grid-cols-[1fr_1fr] items-start">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-3">
                  {block.before.title}
                </p>
                <span className="flex-1 h-px bg-line" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-3">
                  Touchpoint
                </p>
              </div>
              <div className="space-y-2">
                {block.before.touchpoints.map((tp) => (
                  <div
                    key={tp.name}
                    className="flex items-center justify-between gap-3 rounded-lg border border-dashed border-line bg-white/80 px-3 py-2.5 text-sm text-ink leading-relaxed"
                  >
                    <span className="font-medium text-ink">{tp.name}</span>
                    <span className="text-[13px] text-ink-3">{tp.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 xl:hidden">
              <div className="pt-8">
                <p className="label mb-4">What was breaking</p>
                <div className="space-y-4">
                  {block.before.problems.map((problem) => (
                    <div key={problem.n} className="flex gap-4 text-[15px] text-ink-2 leading-relaxed">
                      <span className="min-w-[1.5rem] font-semibold text-ink-3">{problem.n}.</span>
                      <p>{problem.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                  {block.after.label}
                </p>
                <span className="flex-1 h-px bg-line" />
              </div>
              <div className="rounded-[18px] border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-xl font-semibold tracking-tight text-ink leading-tight mb-3">
                  {block.after.heading}
                </h3>
                <p className="text-[15px] text-ink-2 leading-relaxed">
                  {block.after.body}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-10 xl:grid-cols-[1fr_1fr]">
            <div className="pt-8 hidden xl:block">
              <p className="label mb-4">What was breaking</p>
              <div className="space-y-4">
                {block.before.problems.map((problem) => (
                  <div key={problem.n} className="flex gap-4 text-[15px] text-ink-2 leading-relaxed">
                    <span className="min-w-[1.5rem] font-semibold text-ink-3">{problem.n}.</span>
                    <p>{problem.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-8">
              <p className="label mb-4">What we changed</p>
              <div className="space-y-4">
                {block.after.changes.map((change) => (
                  <div key={change.n} className="flex gap-4 text-[15px] text-ink-2 leading-relaxed">
                    <span className="min-w-[1.5rem] font-semibold text-blue-700">{change.n}.</span>
                    <p>{change.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-2xl md:text-[2rem] font-light tracking-tight text-ink leading-[1.2] max-w-[56ch]">
          {block.conclusion}
        </p>
        <div className="mt-16 space-y-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-3">
            The redesigned experience
          </div>
          <div className="overflow-hidden rounded-[24px] border border-line bg-paper">
            <img
              src="/artifacts/Confidential.png"
              alt="Confidential redesigned experience"
              className="w-full block"
            />
          </div>
          <p className="text-[15px] text-ink-2 leading-relaxed">
            Final UI withheld for confidentiality — happy to walk through the screens on a call.
          </p>
        </div>
      </section>
    );
  }

  if (block.kind === "cards") {
    const hasBody = block.body.length > 0 || (block.bullets && block.bullets.length > 0);

    return (
      <section className="-mt-8">
        {block.label || block.heading ? (
          <SectionHead label={block.label} heading={block.heading} body={block.body} />
        ) : null}
        {hasBody ? (
          <div className="mt-8 space-y-10">
            {block.bullets?.length ? (
              <div className="max-w-[62ch] text-[15px] md:text-base text-ink-2 leading-relaxed">
                <ul className="space-y-3">
                  {block.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="grid gap-6 lg:grid-cols-4">
              {block.items.slice(0, 4).map((item) => (
                <div key={item.label} className="rounded-sm border border-line bg-paper p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-3 mb-2">
                    {item.label}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink leading-tight mb-3">
                    {item.title}
                  </h3>
                  {typeof item.caption === "string" ? (
                    <p className="text-[15px] text-ink-2 leading-relaxed">
                      {item.caption}
                    </p>
                  ) : (
                    <ul className="list-disc pl-4 space-y-2 text-[14px] text-ink-2 leading-relaxed">
                      {item.caption.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            {block.items.length > 4 ? (
              <div className="grid gap-6">
                {block.items.slice(4).map((item) => (
                  <div key={item.label} className="rounded-sm border border-line bg-ink/5 p-6">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-3 mb-2">
                      {item.label}
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-ink leading-tight mb-3">
                      {item.title}
                    </h3>
                    {typeof item.caption === "string" ? (
                      <p className="text-[15px] text-ink-2 leading-relaxed">
                        {item.caption}
                      </p>
                    ) : (
                      <ul className="list-disc pl-4 space-y-2 text-[14px] text-ink-2 leading-relaxed">
                        {item.caption.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {block.items.map((item) => (
              <div key={item.label} className="rounded-sm border border-line bg-paper p-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-ink-3 mb-4">
                  {item.label}
                </p>
                <h3 className="text-3xl font-semibold tracking-tight text-ink leading-tight mb-3">
                  {item.title}
                </h3>
                {typeof item.caption === "string" ? (
                  <p className="text-[15px] text-ink-2 leading-relaxed">
                    {item.caption}
                  </p>
                ) : (
                  <ul className="list-disc pl-4 space-y-2 text-[14px] text-ink-2 leading-relaxed">
                    {item.caption.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }

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
