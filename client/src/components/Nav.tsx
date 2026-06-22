/*
  Nav, fixed, minimal, editorial. Inter only.
  Becomes opaque on scroll for contrast. No vermilion; restraint = seniority.
*/
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { contact, resumeUrl } from "@/data/projects";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHome = location === "/";

  const go = (id: string) => {
    if (!onHome) {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-ed flex items-center justify-between h-16">
        <Link href="/" className="text-[15px] font-semibold tracking-tight text-ink">
          Eileen Yu
        </Link>
        <nav className="flex items-center gap-7">
          <button
            onClick={() => go("work")}
            className="hidden sm:inline text-[13px] text-ink-2 hover:text-ink transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => go("about")}
            className="hidden sm:inline text-[13px] text-ink-2 hover:text-ink transition-colors"
          >
            About
          </button>
          <Link
            href="/research"
            className="hidden sm:inline text-[13px] text-ink-2 hover:text-ink transition-colors"
          >
            Research papers
          </Link>
          <a
            href={resumeUrl}
            download
            className="text-[13px] text-ink-2 hover:text-ink transition-colors"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
