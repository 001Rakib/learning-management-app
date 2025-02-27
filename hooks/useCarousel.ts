import { useEffect, useState } from "react";

interface useCarouselPros {
  totalImages: number;
  interval?: number;
}

export const useCarousel = ({
  totalImages,
  interval = 3000,
}: useCarouselPros) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [totalImages, interval]);

  return currentImage;
};
