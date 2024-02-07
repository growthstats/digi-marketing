import { useEffect, useState } from 'react';

/**
 * Custom hook to determine if all images marked for eager loading have completed loading.
 * It listens for the load and error events on each image to accurately set the loading state.
 *
 * @param {string} selector - The CSS selector to target images. This should be general enough to
 * target the desired images, e.g., 'img' to select all image elements within the document.
 * The hook will further filter these elements to include only those with loading="eager".
 *
 * @returns {boolean} areImagesLoaded - A boolean flag indicating whether all targeted images
 * marked with loading="eager" have finished loading. Returns `true` if all such images are loaded
 * or if there are no images marked for eager loading, otherwise `false`.
 */
export const useImagesLoaded = (selector: string): boolean => {
  const [areImagesLoaded, setAreImagesLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      // Skip in SSR
      return;
    }

    const images = document.querySelectorAll<HTMLImageElement>(`${selector}[loading="eager"]`);

    // Immediately return true if there are no images
    if (images.length === 0) {
      setAreImagesLoaded(true);
      return;
    }

    let loadedCount = 0;

    const checkIfAllImagesLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setAreImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete && img.naturalHeight !== 0) {
        checkIfAllImagesLoaded();
      } else {
        img.addEventListener('load', checkIfAllImagesLoaded);
        img.addEventListener('error', checkIfAllImagesLoaded); // Handle broken images too
      }
    });

    // Cleanup function to remove event listeners
    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', checkIfAllImagesLoaded);
        img.removeEventListener('error', checkIfAllImagesLoaded);
      });
    };
  }, [selector]);

  return areImagesLoaded;
};
