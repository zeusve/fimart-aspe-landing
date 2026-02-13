interface OptimizedImageProps {
  src: string;
  webpSrc: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
  fetchPriority?: "high" | "low" | "auto";
}

const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  className,
  loading = "lazy",
  width,
  height,
  fetchPriority,
}: OptimizedImageProps) => {
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={src} type="image/jpeg" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
        {...(fetchPriority ? { fetchPriority } : {})}
      />
    </picture>
  );
};

export default OptimizedImage;
