// Renders a project cover as an autoplaying muted video when the source is a
// video file (e.g. .mp4), otherwise as an image. Lets covers be lightweight
// MP4s instead of heavy GIFs while keeping the same layout/styling.

const VIDEO_RE = /\.(mp4|webm|mov|ogg)$/i;

export function CoverMedia({
  src,
  alt,
  className,
  loading,
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  if (VIDEO_RE.test(src)) {
    return (
      <video
        src={src}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
      />
    );
  }
  return <img src={src} alt={alt} loading={loading} className={className} />;
}
