import { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-300 animate-skeleton-wave ${className}`} />
      )}
      <img src={src} alt={alt} className={className} onLoad={() => setIsLoading(false)} />
    </div>
  );
};

export default Image;
