import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper flex flex-col items-center justify-center text-center px-6">
      <p className="label">Error 404</p>
      <h1 className="mt-6 text-5xl md:text-7xl font-light tracking-[-0.02em] text-ink">
        Page not found
      </h1>
      <p className="mt-5 text-ink-2 max-w-md font-light">
        The page you're looking for has moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-[14px] font-medium text-ink border-b border-ink pb-1 hover:opacity-60 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
