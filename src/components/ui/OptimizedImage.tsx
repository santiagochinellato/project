import { ImgHTMLAttributes, useState } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
}

export default function OptimizedImage({
  src,
  alt,
  fallback = '/placeholder.jpg',
  className = '',
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? fallback : src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      {...props}
    />
  );
}
