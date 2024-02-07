import { useEffect, useState } from 'react';

/**
 * Custom hook to check if all video elements marked for eager loading are ready to play through.
 * This hook targets videos based on the provided CSS selector and the loading attribute set to "eager".
 * It utilizes the 'canplaythrough' event to determine if a video has buffered enough to play smoothly,
 * and also listens for the 'error' event to handle any loading errors.
 *
 * @param {string} selector - The CSS selector used to identify video elements. This selector should
 * capture the video elements intended for eager loading. The hook further narrows down this selection
 * to only those videos with loading="eager".
 *
 * @returns {boolean} areVideosLoaded - Indicates whether all videos matching the selector and marked
 * for eager loading can be played through without interruption. It returns `true` if all such videos
 * are ready or if no videos match the criteria, otherwise `false`.
 */
export const useVideosLoaded = (selector: string): boolean => {
  const [areVideosLoaded, setAreVideosLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      // Skip in SSR
      return;
    }

    const videos = document.querySelectorAll<HTMLVideoElement>(`${selector}[loading="eager"]`);

    // Immediately return true if there are no videos
    if (videos.length === 0) {
      setAreVideosLoaded(true);
      return;
    }

    if (videos.length === 0) {
      setAreVideosLoaded(true); // No videos to load
      return;
    }

    let loadedCount = 0;

    const checkIfAllVideosLoaded = () => {
      loadedCount++;
      if (loadedCount === videos.length) {
        setAreVideosLoaded(true);
      }
    };

    videos.forEach((video) => {
      if (video.readyState >= 4) {
        // HAVE_ENOUGH_DATA
        checkIfAllVideosLoaded();
      } else {
        video.addEventListener('canplaythrough', checkIfAllVideosLoaded, { once: true });
        video.addEventListener('error', checkIfAllVideosLoaded, { once: true }); // Handle errors
      }
    });

    // Cleanup function to remove event listeners
    return () => {
      videos.forEach((video) => {
        video.removeEventListener('canplaythrough', checkIfAllVideosLoaded);
        video.removeEventListener('error', checkIfAllVideosLoaded);
      });
    };
  }, [selector]);

  return areVideosLoaded;
};
