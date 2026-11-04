export default function ResponsiveImage({
  image,
  alt,
  className,
  sizes,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
}) {
  if (!image) return null;

  return (
    <picture>
      {image.avif ? <source type="image/avif" srcSet={image.avif} sizes={sizes} /> : null}
      {image.webp ? <source type="image/webp" srcSet={image.webp} sizes={sizes} /> : null}
      <img
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
